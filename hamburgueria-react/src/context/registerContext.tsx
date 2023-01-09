import { createContext } from "react";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import { api } from "../request/api";

interface iRegisterContext {
  submit: (data: iData) => void;
}

interface iRegisterProps {
  children: React.ReactNode;
}

export interface iData {
  email: string;
  password: string;
  name: string;
  confirmPass?: string;
}

export const RegisterContext = createContext({} as iRegisterContext);

export function RegisterProvider({ children }: iRegisterProps) {
  const navigate = useNavigate();

  async function submit(data: iData) {
    try {
      const response = await api.post("/users", data);

      if (response.status === 201) {
        toast.success(`Cadastro realizado com sucesso`, {
          style: {
            border: "1px solid #27AE60",
            padding: "16px",
            color: "#27AE60",
            background: "#F5F5F5",
          },
          iconTheme: {
            primary: "#27AE60",
            secondary: "#F5F5F5",
          },
        });

        setTimeout(() => navigate("/", { replace: true }), 3000);
      }
    } catch (error) {
      toast.error(`Falha no cadastro`, {
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
    }
  }

  return (
    <>
      <RegisterContext.Provider value={{ submit }}>
        {children}
      </RegisterContext.Provider>

      <Outlet />
    </>
  );
}
