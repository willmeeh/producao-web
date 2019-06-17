import React, { Component } from 'react';
import image from '../images/img-casa-cima.jpeg';
import logo from '../images/solitaria-logo.png';
import './Home.scss';
import { Button, Radio, Icon } from 'antd';
import { Card } from 'antd';


class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <img className="house-external" src={image} alt="fuck"/>

                <div className="logo-outer">
                    <img className="logo-inner" src={logo} alt="fuck"/>
                </div>

                {/* <div className="botao-iniciar-tour-outer"> */}
                <Button className="botao-iniciar-tour" size="large">Iniciar Fucking Tour</Button>
                {/* </div> */}
                <Card className="home-card" bordered={false}>
                    <p>
                        Aqui vai um fucking texto explicando o fucking projeto; 
                        Acima de tudo, é fundamental ressaltar que o consenso sobre a necessidade de qualificação deve passar por modificações independentemente dos índices pretendidos. 
                        Não obstante, a complexidade dos estudos efetuados garante a contribuição de um grupo importante na determinação das diretrizes de desenvolvimento para o futuro. 
                    </p>
                </Card>
                
                <Button className="botao-playlist-completa" size="large">Playlist Completa</Button>
            </div>
        );
    }
}

export default Home;
