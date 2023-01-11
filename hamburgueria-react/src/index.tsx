import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../src/styles/modal.css";
import { RegisterProvider } from "./context/registerContext";
import { ProductProvider } from "./context/productsContext";
import { LoginProvider } from "./context/loginContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <LoginProvider>
          <RegisterProvider>
            <App />
          </RegisterProvider>
        </LoginProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
