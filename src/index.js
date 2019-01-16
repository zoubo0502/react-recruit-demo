import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import AuthRoute from "./components/authroute/AuthRoute";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route> 
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
