import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import {
  Home,
  Register,
  Login,
  Site,
  AboutMe,
  Restaurants,
  RestaurantSite,
} from "../pages/index";
import { TokenProvider } from "../context/tokenContext";

export default function Routes() {
  return (
    <Router>
      <TokenProvider>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/site/:id" component={Site} />
          <Route exact path="/restaurantSite/:id" component={RestaurantSite} />
          <Route exact component={() => <h1>Error 404</h1>} />
        </Switch>
      </TokenProvider>
    </Router>
  );
}
