import React, { Component } from 'react';
import './Planta.scss';
import { Row, Col, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import CozinhaSvg from '../images/svgs/cozinha.svg'

const image = 'https://raw.githubusercontent.com/willmeeh/producao-web/master/src/images/comodos.png'

// import "../node_modules/video-react/dist/video-react.css"; // import css
class Planta extends Component {
    render() {
        return (
            <div>
                <div className="planta-page">
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={10}>
                            <Link to="/">
                                <Button className="" size="large">Voltar</Button>
                            </Link>
                            <Card className="home-card" bordered={false}>
                                <p>
                                    Aqui vai um unicorning texto explicando o unicorning projeto; 
                                    Acima de tudo, é fundamental ressaltar que o consenso sobre a necessidade de qualificação deve passar por modificações independentemente dos índices pretendidos. 
                                    Não obstante, a complexidade dos estudos efetuados garante a contribuição de um grupo importante na determinação das diretrizes de desenvolvimento para o futuro. 
                                </p>
                            </Card>
                        </Col>
                        <Col span={14}>
                            <Link className="cozinha-svg" to="/comodo/cozinha">
                                <img src={CozinhaSvg}/>
                            </Link>
                            <img className="planta-external" src={image} alt="unicorn" />
                        </Col>
                    </Row>


                    {/* <Link to="/comodo/cozinha">
                        <Button className="" size="large">Cozinha</Button>
                    </Link>
                    <Link to="/comodo/quarto-monique">
                        <Button className="" size="large">Quarto Monique</Button>
                    </Link>
                    <Link to="/comodo/quarto-teresa">
                        <Button className="" size="large">Quarto Teresa</Button>
                    </Link>
                    <Link to="/comodo/sala-estar">
                        <Button className="" size="large">Quarto Estar</Button>
                    </Link>
                    <Link to="/comodo/sala-jantar">
                        <Button className="" size="large">Quarto Jantar</Button>
                    </Link> */}
                </div>
            </div>
        );
    }
}

export default Planta;
