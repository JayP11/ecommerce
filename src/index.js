import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HomeProvider } from "./context/home_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HomeProvider>
      <App />
    </HomeProvider>
);
