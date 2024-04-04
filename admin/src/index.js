import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);