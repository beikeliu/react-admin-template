import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = document.getElementById("root");

root && ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
