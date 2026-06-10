import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"




import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import App from "./App";




createRoot(document.getElementById("root")).render(
  <StrictMode>
      
        <BrowserRouter>
        <AppProvider>
          <App></App>
        </AppProvider>
        </BrowserRouter>
    

  </StrictMode>,
);
