import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
