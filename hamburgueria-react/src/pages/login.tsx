import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../components/login";

export function LoginPage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      navigate("/homePage", { replace: true });
    }

    setLoading(false);
  }, [navigate]);

  if (loading) {
    return null;
  }

  return <Login />;
}
