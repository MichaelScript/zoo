import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../home-component/Home";
import Rest from "../rest-component/Rest";

export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/rest" component={Rest} />
    </Switch>
  </main>
);
