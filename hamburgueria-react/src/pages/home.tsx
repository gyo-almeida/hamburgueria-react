import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { HomePage } from "../components/homePage";
import { LoginContext } from "../context/loginContext";

export function Home() {
  const { user, loading } = useContext(LoginContext);
  const [reload, setReload] = useState(true);
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }

    setReload(false);
  }, [navigate, token]);

  if (loading) {
    return null;
  }

  if (reload) {
    return null;
  }

  return user ? <HomePage /> : <Navigate to="/" />;
}
