import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { routes } from './routes'
import { TokenProvider } from "../context/tokenContext";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Routes() {
  const token = cookies.get("token");
  return (
    <Router>
      <TokenProvider>
          {
            token ? (
              <Switch>
                <Redirect exact from="/" to="/inmuebles" />
                {
                  routes.root.map((route, key) => <Route key={key} exact path={route.path} component={route.component} />)
                }
             </Switch>
            ) : (
              <Switch>
                <Redirect exact from="/" to="/inmuebles" />
                {
                  routes.notRegister.map((route, key) => <Route key={key} exact path={route.path} component={route.component} />)
                }
             </Switch>
            )
          }
      </TokenProvider>
    </Router>
  );
}
