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

export const COMODOS = {
    'cozinha': {
        backgroundImage: ImagemCozinha,
        name: 'Cozinha'
    },
    'quarto-monique': {
        backgroundImage: ImagemQuartoMonique,
        name: 'Quarto da Monique'
    },
    'quarto-nene': {
        backgroundImage: ImagemQuartoNene,
        name: 'Quarto do Bebê'
    },
    'quarto-teresa': {
        backgroundImage: ImagemQuartoTeresa,
        name: 'Quarto da Teresa'
    },
    'sala-estar': {
        backgroundImage: ImagemSalaEstar,
        name: 'Sala de Estar'
    },
    'sala-jantar': {
        backgroundImage: ImagemSalaJantar,
        name: 'Sala de Jantar'
    },
};

class Comodo extends Component {
    render() {
        const { nomeComodo } = this.props.match.params;
        const { backgroundImage } = COMODOS[nomeComodo]

        console.log('nomeComodo', nomeComodo);
        console.log('backgroundImage', backgroundImage);

        return (
            <div className="comodo-page">
                <img className="comodo-background-image" src={backgroundImage} alt="alt"/>
                <Row gutter={8}>
                    <Col span={16}>
                        <ReactPlayer className="video-player" url='https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be' />
                        {/* <ReactPlayer url='https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be' playing /> */}
                    </Col>
                    <Col span={8}>
                        <Card bordered={false} style={{ width: 400 }}>
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
                        <Link to="/planta">
                            <Button type="primary" icon="download" size={'large'}>
                                Voltar
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Comodo;
