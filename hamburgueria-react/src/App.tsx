import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/register";
import { LoginPage } from "./pages/login";
import { Home } from "./pages/home";
import { Style } from "./styles/global";

function App() {
  return (
    <div>
      <Style />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homePage" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
