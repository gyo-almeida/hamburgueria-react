import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import { api } from "../request/api";

interface iLoginProps {
  children: React.ReactNode;
}

interface iLoginContext {
  submit: (data: iLogin) => Promise<void>;
  user: iLogin | null;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface iLogin {
  email: string;
  password: string;
}

export const LoginContext = createContext({} as iLoginContext);

export function LoginProvider({ children }: iLoginProps) {
  const [user, setUser] = useState<iLogin | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function loadingUser() {
      const token = localStorage.getItem("@TOKEN");
      const user: any = localStorage.getItem("@USER");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        setUser(user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadingUser();
  }, []);

  async function submit(data: iLogin) {
    try {
      const request = await api.post("/login", data);

      const response = request.data;
      const { accessToken, user: userResponse } = response;

      const userJson = JSON.stringify(userResponse);

      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@USER", userJson);

      setUser(userResponse);
      navigate("/homePage", { replace: true });
    } catch (error) {
      toast.error(`Falha no login. Tente novamente!`, {
        style: {
          border: "1px solid #EB5757",
          padding: "16px",
          color: "#EB5757",
          background: "#F5F5F5",
        },
        iconTheme: {
          primary: "#EB5757",
          secondary: "#F5F5F5",
        },
      });

      console.error(error);
    }
  }

  return (
    <>
      <LoginContext.Provider value={{ submit, user, loading, setLoading }}>
        {children}
      </LoginContext.Provider>

      <Outlet />
    </>
  );
}
