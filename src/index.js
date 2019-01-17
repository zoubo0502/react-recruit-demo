import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import AuthRoute from "./components/authroute/AuthRoute";
import Bossinfo from "./containers/bossinfo/bossinfo";
import Geniusinfo from "./containers/genuisinfo/geniusinfo";
import "antd-mobile/dist/antd-mobile.css";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

function Boss() {
  return <p>boss</p>;
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/boss" component={Boss} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/bossinfo" component={Bossinfo} />
          <Route path="/geniusinfo" component={Geniusinfo} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
