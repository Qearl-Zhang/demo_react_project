import React, { Component } from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import Admin from "./container/admin/admin";
import Login from "./container/login/login";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Redirect to="/login"/>
      </Switch>
    );
  }
}
