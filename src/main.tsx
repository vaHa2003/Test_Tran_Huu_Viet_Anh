import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SignInProvider } from "./context/SignInContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SignInProvider>
      <App />
      <ToastContainer />
    </SignInProvider>
  </StrictMode>
);
