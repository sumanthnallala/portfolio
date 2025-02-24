import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("root");
if (domNode) {
  const root = ReactDOM.createRoot(domNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}