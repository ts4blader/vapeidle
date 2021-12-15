import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { Store } from "./store";

ReactDOM.render(
  <Store>
    <div className="wrapper">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  </Store>,
  document.getElementById("root")
);
