import React, { Component } from 'react'
import Router from './Router';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd';

import Menu from './Menu'

import './App.scss';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ height: '0px' }}>
          <Menu/>
        </Header>
        <Content className="content">
          <Router />
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);
