import React, { Component } from 'react';
import logo from '../images/solitaria-logo.png';
import william from '../images/autores/william.jpeg';
import arthur from '../images/autores/arthur.jpeg';
import './Equipe.scss';
import { Row, Col, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';


class Equipe extends Component {
    render() {
        return (
            <div className="equipe-page">
                <img className="house-external" src={"https://willmeeh.github.io/producao-web/static/media/img-casa-cima.f163ecff.jpeg"} alt="alt"/>

                <div className="logo-outer">
                    <img className="logo-inner" src={logo} alt="logo"/>
                </div>

                <Row type="flex" justify="space-around" className="equipe-container" align="middle">
                    <Col span={12}>
                        <Avatar size={64} src={arthur} />
                        <br/>
                        <span className="nome">Arthur - Desenvolvedor do Site</span>
                    </Col>
                    <Col span={12}>
                        <Avatar size={64} src={william} />
                        <br/>
                        <span className="nome">William - Desenvolvedor do Site</span>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Equipe;
