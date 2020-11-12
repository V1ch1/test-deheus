import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "./NavBar";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Login from "../componentes/login/Login";
import TitleProduct from "../componentes/TitleProduct";

const Layout = () => {
  let { path, url } = useRouteMatch();

  return (
    <Grid>
      <NavBar />
      <body>
        <Switch>
          <Route exact path="/informacion">
            Información
            <TitleProduct />
          </Route>
          <Route exact path="/trazabilidad">
            Trazabilidad
          </Route>
          <Route exact path="/historico">
            Histórico de Compra
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </body>
    </Grid>
  );
};

export default Layout;
