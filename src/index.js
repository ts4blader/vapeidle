import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { Store } from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <div className="wrapper">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
