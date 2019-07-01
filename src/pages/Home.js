import React, { Component } from 'react';
import logo from '../images/solitaria-logo.png';
import './Home.scss';
import { Button } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import bg from '../images/img-casa-cima.jpeg';

class Home extends Component {
    handleIniciarHistoria() {
        localStorage.setItem('currentVideoOrder', 1)
    }

    render() {
        return (
            <div className="home-page">
                <img className="background-image" src={bg} alt="alt"/>

                <div className="logo-outer">
                    <img className="logo-inner" src={logo} alt="logo"/>
                </div>

                <Link to="/planta">
                    <Button 
                        className="botao-iniciar-tour" 
                        size="large"
                        onClick={this.handleIniciarHistoria}
                    >
                            Iniciar História
                    </Button>
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
