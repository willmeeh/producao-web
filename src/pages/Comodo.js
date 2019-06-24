import React, { Component } from 'react';
import './Comodo.scss';
import { List, Card, Button, Col, Row, Icon } from 'antd';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

import ImagemCozinha from '../images/cozinha.jpeg'
import ImagemQuartoMonique from '../images/quarto-monique.jpeg'
import ImagemQuartoNene from '../images/quarto-nene.jpeg'
import ImagemQuartoTeresa from '../images/quarto-teresa.jpeg'
import ImagemSalaEstar from '../images/sala-estar.jpeg'
import ImagemSalaJantar from '../images/sala-jantar.jpeg'

const data = [
    {
        title: 'Vídeo 1',
        icon: 'unlock'
    },
    {
        title: 'Vídeo 2',
        icon: 'lock'
    },
    {
        title: 'Vídeo 3',
        icon: 'lock'
    },
    {
        title: 'Vídeo 4',
        icon: 'lock'
    },
];

const comodos = {
    'cozinha': {
        backgroundImage: ImagemCozinha
    },
    'quarto-monique': {
        backgroundImage: ImagemQuartoMonique
    },
    'quarto-nene': {
        backgroundImage: ImagemQuartoNene
    },
    'quarto-teresa': {
        backgroundImage: ImagemQuartoTeresa
    },
    'sala-estar': {
        backgroundImage: ImagemSalaEstar
    },
    'sala-jantar': {
        backgroundImage: ImagemSalaJantar
    },
};

class Comodo extends Component {
    render() {
        const { nomeComodo } = this.props.match.params;
        const { backgroundImage } = comodos[nomeComodo]

        console.log('nomeComodo', nomeComodo);
        console.log('backgroundImage', backgroundImage);

        return (
            <div style={{marginTop: '100px'}}>
                <img className="comodo-background-image" src={backgroundImage} alt="alt"/>
                <Row gutter={8}>
                    <Col span={16}>
                        <Row>
                            <Col span={20} style={{ padding: 20 }}>
                                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18}>
                                <Card title="Descrição" bordered={false} style={{ width: 500, height: 200 }}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis malesuada dolor eu porta. Donec id urna ac metus feugiat rutrum eget nec nibh. Maecenas in sem vel metus ullamcorper pharetra.
                                                </p>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Link to="/planta">
                                    <Button type="primary" icon="download" size={'large'}>
                                        Voltar
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={5}>
                        <Card title="Descrição" bordered={false} style={{ width: 400 }}>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a><Icon type={item.icon} />{item.title}</a>}
                                            description="Esse vídeo apresenta o momento em que o personagem."
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Comodo;
