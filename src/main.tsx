import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./css/global.scss";
import "./css/main.scss";
import "./css/Terminal.scss";
import "./css/pfetch.scss";
import JS from "./JS.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <JS />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
