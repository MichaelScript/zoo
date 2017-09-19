import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { App } from "./components/app-component/App";

import "../node_modules/wingcss/dist/wing.min.css";

ReactDOM.render(
  (<BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById("root"),
);
