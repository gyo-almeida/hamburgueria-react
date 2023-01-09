import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { HomePage } from "../components/homePage";
import { LoginContext } from "../context/loginContext";

export function Home() {
  const { user, loading } = useContext(LoginContext);

  if (loading) {
    return null;
  }

  return user ? <HomePage /> : <Navigate to="/" />;
}
