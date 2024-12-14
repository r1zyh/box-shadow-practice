import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routing } from "./components/routing/routing";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
