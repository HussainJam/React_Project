import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

ReactDOM.render(<Router><App /> </Router> , document.getElementById("root"));
registerServiceWorker();
