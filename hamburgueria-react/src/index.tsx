import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RegisterProvider } from "./context/registerContext";
import { ProductProvider } from "./context/productsContext";
import { LoginProvider } from "./context/loginContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <RegisterProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </RegisterProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);
