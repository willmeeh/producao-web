import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Comodo from './pages/Comodo'
import Planta from './pages/Planta'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

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
      <Switch>
        <Layout className="layout">
          <Header style={{ height: '0px' }}>
            <div className="logo" />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ marginTop: '30px', backgroundColor: 'rgba(255, 255, 255, 1)', paddingTop: '20px', lineHeight: '20px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Equipe</Menu.Item>
              <Menu.Item key="3">Sobre</Menu.Item>
            </Menu>
          </Header>
          <Content >
            {/* @TODO: Criação de rotas provisórias, utilizar (https://reacttraining.com/react-router/web/example/route-config) ?  */}
            {this.createRoutes(ROUTES)}
          </Content>
        </Layout>
      </Switch>
    );
  }
}

export default MyHomeBrewRouter;
