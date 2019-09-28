import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Components/Home/index";
import store from "./redux/store";

import "./index.css";

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
