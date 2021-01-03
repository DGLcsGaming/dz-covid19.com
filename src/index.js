import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import ReactGA from "react-ga";

ReactGA.initialize("UA-162774407-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Suspense fallback="">
    <App />
  </Suspense>,
  document.getElementById("root")
);
