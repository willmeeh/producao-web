import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';

export const ROUTES = [
  { path: '/', component: Home },
];

class MyHomeBrewRouter extends Component {
  createRoutes(routes) {
    return routes.map(({path, component}, index) => (
      <Route key={"route" + index} exact path={path} component={component} />
    ));
  }

  render() {
    return (
      <Switch>
        {/* @TODO: Criação de rotas provisórias, utilizar (https://reacttraining.com/react-router/web/example/route-config) ?  */}
        {this.createRoutes(ROUTES)}
    </Switch>
    );
  }
}

export default MyHomeBrewRouter;
