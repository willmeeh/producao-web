import React, { Component } from 'react';
import logo from '../images/solitaria-logo.png';
import './Home.scss';
import { Button } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <img className="background-image" src={"https://willmeeh.github.io/producao-web/static/media/img-casa-cima.f163ecff.jpeg"} alt="alt"/>

                <div className="logo-outer">
                    <img className="logo-inner" src={logo} alt="logo"/>
                </div>

                <Link to="/planta">
                    <Button className="botao-iniciar-tour" size="large">Iniciar História</Button>
                </Link>
                <Card className="home-card" bordered={false}>
                    <p>
                        Aqui vai um unicorning texto explicando o unicorning projeto; 
                        Acima de tudo, é fundamental ressaltar que o consenso sobre a necessidade de qualificação deve passar por modificações independentemente dos índices pretendidos. 
                        Não obstante, a complexidade dos estudos efetuados garante a contribuição de um grupo importante na determinação das diretrizes de desenvolvimento para o futuro. 
                    </p>
                </Card>
            </div>
        );
    }
}

export default Home;
