import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './pages/Home';
import Comodo from './pages/Comodo'
import Planta from './pages/Planta'
import Equipe from './pages/Equipe'
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import './Router.scss';

export const ROUTES = [
    { path: '/', component: Home },
    { path: '/comodo/:nomeComodo?', component: Comodo },
    { path: '/planta', component: Planta },
    { path: '/equipe', component: Equipe }
];

class MyHomeBrewRouter extends Component {
    
    state = { current: null }
    
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    
    componentDidMount() {

        console.log('this.props.location.pathname', this.props.location.pathname);
        this.setState({
            current: this.props.location.pathname
        })
    }
    
    createItem(text, route) {
        return (
            <Menu.Item key={route}>
                {text}
                <Link to={route} />
            </Menu.Item>
        );
    }
        
    createRoutes(routes) {
        return routes.map(({ path, component }, index) => (
            <Route key={"route" + index} exact path={path} component={component} />
        ));
    }
            
    render() {

        console.log('this.state.current', this.state.current)
        return (
            <Menu
                onClick={this.handleClick}
                className="menu-solitaria"
                mode="horizontal"
                selectedKeys={[this.state.current]}
            >
                {this.createItem('Home', '/')}
                {this.createItem('Equipe', '/equipe')}
                {this.createItem('Sobre', '/sobre')}
                {this.createItem('Cômodos da Casa', '/planta')}
            </Menu>
        );
    }
}
            
export default withRouter(MyHomeBrewRouter);
            