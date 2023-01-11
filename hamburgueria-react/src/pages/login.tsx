import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../components/login";

export function LoginPage() {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/homePage", { replace: true });
    }

    setLoading(false);
  }, [navigate, token]);

  if (loading) {
    return null;
  }

  return <Login />;
}
