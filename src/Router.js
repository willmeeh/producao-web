import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './pages/Home';
import Comodo from './pages/Comodo'
import Planta from './pages/Planta'
import Equipe from './pages/Equipe'

import './Router.scss';

export const ROUTES = [
  { path: '/', component: Home },
  { path: '/comodo/:nomeComodo?', component: Comodo },
  { path: '/planta', component: Planta },
  { path: '/equipe', component: Equipe }
];

class MyHomeBrewRouter extends Component {
  createRoutes(routes) {
    return routes.map(({ path, component }, index) => (
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

export default withRouter(MyHomeBrewRouter);
