import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './pages/Home';
import Comodo from './pages/Comodo'
import Planta from './pages/Planta'
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import './Router.scss';

const { Header, Content } = Layout;

export const ROUTES = [
  { path: '/', component: Home },
  { path: '/comodo/:nomeComodo?', component: Comodo},
  { path: '/planta', component: Planta}
];

class MyHomeBrewRouter extends Component {
  createRoutes(routes) {
    return routes.map(({ path, component }, index) => (
      <Route key={"route" + index} exact path={path} component={component} />
    ));
  }

  render() {
    return (
      
      <Layout className="layout">
        <Header style={{ height: '0px' }}>
          <Menu
            className="menu-solitaria"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/equipe">
                Equipe
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/sobre">
                Sobre
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/planta">
                Playlist Completa
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content >
            <Switch>
            {/* @TODO: Criação de rotas provisórias, utilizar (https://reacttraining.com/react-router/web/example/route-config) ?  */}
              {this.createRoutes(ROUTES)}
            </Switch>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(MyHomeBrewRouter);
