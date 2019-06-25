import React, { Component } from 'react'
import Router from './Router';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { withRouter } from 'react-router-dom'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default withRouter(App);
