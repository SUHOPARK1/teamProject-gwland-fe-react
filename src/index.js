import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux'
import "./index.scss";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import ScrollToTop from "./utilities/scrollToTop";
import App from "./App";

import Mock from "./state/mock";
import "./state/database";
import { Provider } from "react-redux";
import { rootReudcer } from "webapp/_reducers";

Mock.onAny().passThrough();
const store = createStore(rootReudcer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
