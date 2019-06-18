import React, { Component } from 'react';
import image from '../images/img-casa-cima.jpeg';
import logo from '../images/solitaria-logo.png';
import './Home.scss';
import { Button, Radio, Icon } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <img className="house-external" src={"https://willmeeh.github.io/producao-web/static/media/img-casa-cima.f163ecff.jpeg"} alt="fuck" />

                <div className="logo-outer">
                    <img className="logo-inner" src={logo} alt="fuck" />
                </div>

                {/* <div className="botao-iniciar-tour-outer"> */}
                <Link to="/planta">
                    <Button className="botao-iniciar-tour" size="large">Iniciar Fucking Tour</Button>
                </Link>
                {/* </div> */}
                <Card className="home-card" bordered={false}>
                    <p>
                        Aqui vai um fucking texto explicando o fucking projeto;
                        Acima de tudo, é fundamental ressaltar que o consenso sobre a necessidade de qualificação deve passar por modificações independentemente dos índices pretendidos.
                        Não obstante, a complexidade dos estudos efetuados garante a contribuição de um grupo importante na determinação das diretrizes de desenvolvimento para o futuro.
                    </p>
                </Card>
                <Link to="/comodo">
                    <Button className="botao-playlist-completa" size="large">Playlist Completa</Button>
                </Link>
            </div>
        );
    }
}

export default Home;
