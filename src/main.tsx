import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import LocaleContextProvider from "./context/LocaleContext/LocaleContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocaleContextProvider>
  </StrictMode>
);
