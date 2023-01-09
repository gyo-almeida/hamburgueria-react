import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RegisterProvider } from "./context/registerContext";
import { ProductProvider } from "./context/productsContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
