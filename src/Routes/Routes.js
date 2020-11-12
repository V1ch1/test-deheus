import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../componentes/Layout";
import Login from "../componentes/login/Login";
// import Menu from "../componentes/Menu";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Layout />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
