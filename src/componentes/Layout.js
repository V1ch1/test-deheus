import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "./NavBar";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Login from "../componentes/Login";

const Layout = () => {
  let { path, url } = useRouteMatch();

  return (
    <Grid>
      <NavBar />
      <body>
        <Switch>
          <Route exact path="/">
            Información
          </Route>
          <Route exact path="/Trazabilidad">
            Trazabilidad
          </Route>
          <Route exact path="/Histórico de compra">
            Histórico de Compra
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </body>
    </Grid>
  );
};

export default Layout;
