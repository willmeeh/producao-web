import React, { Component } from 'react';
import './Comodo.scss';
import { notification, Button, Col, Row, Icon, Menu } from 'antd';
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
        name: 'Cozinha',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=i_Zz8mIHXWc',
                order: 1,
                messageToNextVideo: 'Vá para a sala de estar',
                comodoProximoVideo: 'sala-estar'
            },
            { 
                src: 'https://www.youtube.com/watch?v=hs91TFUdqdU',
                order: 3,
                messageToNextVideo: 'Assista a próxima cena deste cômodo'
            },
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 4,
            }
        ]
    },
    'quarto-monique': {
        backgroundImage: ImagemQuartoMonique,
        name: 'Quarto da Monique',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 1,
                messageToNextVideo: 'Assista a próxima cena deste cômodo'
            }
        ]
    },
    'quarto-nene': {
        backgroundImage: ImagemQuartoNene,
        name: 'Quarto do Bebê',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 1,
                messageToNextVideo: 'Assista a próxima cena deste cômodo'
            }
        ]
    },
    'quarto-teresa': {
        backgroundImage: ImagemQuartoTeresa,
        name: 'Quarto da Teresa',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 1,
                messageToNextVideo: 'Assista a próxima cena deste cômodo'
            }
        ]
    },
    'sala-estar': {
        backgroundImage: ImagemSalaEstar,
        name: 'Sala de Estar',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=g8gs1inwrdM',
                order: 2,
                messageToNextVideo: 'Vá para cozinha',
                comodoProximoVideo: 'cozinha'
            }
        ]
    },
    'sala-jantar': {
        backgroundImage: ImagemSalaJantar,
        name: 'Sala de Jantar',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 1,
                messageToNextVideo: 'Assista a próxima cena deste cômodo'
            }
        ]
    },
};

class Comodo extends Component {

    state = {
        selectedVideo: null,
        comodo: null
    }

    createMenuItem({ src, order }) {
        const currentVideoOrder = Number(localStorage.getItem('currentVideoOrder')) || 1;
        const disabled = order > currentVideoOrder;

        return (
            <Menu.Item key={order} disabled={disabled}>
                Vídeo {order}
                {'\u00A0'}
                {disabled && <Icon type="lock" />}
            </Menu.Item>
        );
    }

    createMenuItems(videos) {
        return videos.map((video) => {
            return this.createMenuItem(video);
        });
    }

    handleMenuItemClick({ item, key, keyPath, domEvent }) {
        this.changeVideoByOrder(Number(key), this.state.comodo);
    }

    changeVideoByOrder(orderParam, comodo) {
        const videoForSelect = comodo.videos.find(({ order }) => orderParam === order);
        this.setState((state, props) => {
            return { 
                selectedVideo: videoForSelect
            };
        });
    }

    getSavedVideoOrder() {
        return Number(localStorage.getItem('currentVideoOrder')) || 1;
    }

    componentWillMount() {
        const { nomeComodo } = this.props.match.params;
        const currentVideoOrder = this.getSavedVideoOrder();
        const comodo = COMODOS[nomeComodo];
        
        // const selectedVideo = comodo.videos.find(({ order }) => currentVideoOrder === order);

        this.setState((state, props) => {
            return { comodo };
        });
        
        const videoFounded = comodo.videos.find((video) => currentVideoOrder === video.order);
        let orderToChangeVideo = currentVideoOrder;
        if (!videoFounded) {
            orderToChangeVideo = comodo.videos[0].order;
        }
        this.changeVideoByOrder(orderToChangeVideo, comodo);
    }

    handleOnVideoEnd() {
        const { order, messageToNextVideo } = this.state.selectedVideo;
        const nextOrderVideo = order + 1;
        const currentVideoOrder = this.getSavedVideoOrder();
        if (currentVideoOrder < nextOrderVideo) {
            localStorage.setItem('currentVideoOrder', nextOrderVideo)
        }

        const nextVideo = this.state.comodo.videos.find((video) => nextOrderVideo === video.order);
        if (!nextVideo) {
            if (messageToNextVideo) {
                notification.open({
                    message: 'Atenção',
                    description: messageToNextVideo,
                    duration: 15,
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                });
            }
        }
        else {
            this.changeVideoByOrder(nextOrderVideo, this.state.comodo);
        }
    }

    render() {
        const { backgroundImage, videos } = this.state.comodo;

        // console.log('nomeComodo', nomeComodo);
        // console.log('backgroundImage', backgroundImage);

        return (
            <div className="comodo-page">
                <img className="comodo-background-image" src={backgroundImage} alt="alt"/>
                {/* <Row type="flex" justify="center" align="middle"> */}
                <Row>
                    <Col lg={20} md={18} sm={15} xs={24}>
                    {/* url='https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be'  */}
                        <ReactPlayer 
                            className="video-player" 
                            url={this.state.selectedVideo.src}
                            onEnded={this.handleOnVideoEnd.bind(this)}
                        />
                        {/* <ReactPlayer url='https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be' playing /> */}
                    </Col>
                    <Col lg={4} md={6} sm={8} xs={24}>
                        <div className="playlist">
                            <Menu 
                                selectedKeys={[String(this.state.selectedVideo.order)]}
                                onClick={this.handleMenuItemClick.bind(this)} mode="vertical"
                            >
                                {this.createMenuItems(videos)}
                            </Menu>
                            <Link to="/planta">
                                <Button type="primary" size={'large'}>
                                    Cômodos
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Comodo;
