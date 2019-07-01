import React, { Component } from 'react';
import './Comodo.scss';
import { notification, Button, Col, Row, Icon, Menu, Card } from 'antd';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

import ImagemCozinha from '../images/cozinha.jpeg'
import ImagemQuartoMonique from '../images/quarto-monique.jpeg'
import ImagemQuartoNene from '../images/quarto-nene.jpeg'
import ImagemQuartoTeresa from '../images/quarto-teresa.jpeg'
import ImagemSalaEstar from '../images/sala-estar.jpeg'
import ImagemSalaJantar from '../images/sala-jantar.jpeg'

export const COMODOS = {
    'cozinha': {
        backgroundImage: ImagemCozinha,
        name: 'Cozinha',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=hs91TFUdqdU',
                order: 3,
                messageToNextVideo: 'Vá para a sala de jantar',
                comodoProximoVideo: 'sala-jantar'
            },
            { 
                src: 'https://www.youtube.com/watch?v=hs91TFUdqdU',
                order: 5,
                messageToNextVideo: 'Vá para a sala de jantar',
                comodoProximoVideo: 'sala-jantar'
            },
            { 
                src: 'https://www.youtube.com/watch?v=hs91TFUdqdU',
                order: 7,
                messageToNextVideo: 'Vá para o quarto do bebê',
                comodoProximoVideo: 'quarto-nene'
            },
            { 
                src: 'https://www.youtube.com/watch?v=hs91TFUdqdU',
                order: 13,
                messageToNextVideo: 'Fim.',
            }
        ]
    },
    'quarto-monique': {
        backgroundImage: ImagemQuartoMonique,
        name: 'Quarto da Monique',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 2,
                messageToNextVideo: 'Vá para a Cozinha',
                comodoProximoVideo: 'cozinha'
            }
        ]
    },
    'quarto-nene': {
        backgroundImage: ImagemQuartoNene,
        name: 'Quarto do Bebê',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 8,  // Mudar a imagem
                messageToNextVideo: 'Vá para a sala de estar',
                comodoProximoVideo: 'sala-estar'
            },
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be', // Muda a imagem
                order: 12,
                messageToNextVideo: 'Vá para a cozinha',
                comodoProximoVideo: 'cozinha'
            }
        ]
    },
    'quarto-teresa': {
        backgroundImage: ImagemQuartoTeresa,
        name: 'Quarto da Teresa',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 10,
                messageToNextVideo: 'Vá para a sala de jantar',
                comodoProximoVideo: 'sala-jantar'
            }
        ]
    },
    'sala-estar': {
        backgroundImage: ImagemSalaEstar,
        name: 'Sala de Estar',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=hs91TFUdqdU',
                order: 1,
                messageToNextVideo: 'Vá para o quarto da monique',
                comodoProximoVideo: 'quarto-monique'
            },
            { 
                src: 'https://www.youtube.com/watch?v=i_Zz8mIHXWc',
                order: 9,
                messageToNextVideo: 'Vá para o quarto da Teresa',
                comodoProximoVideo: 'quarto-teresa'
            }
        ]
    },
    'sala-jantar': {
        backgroundImage: ImagemSalaJantar,
        name: 'Sala de Jantar',
        videos: [
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 4,
                messageToNextVideo: 'Vá para a cozinha',
                comodoProximoVideo: 'cozinha'
            },
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 6,
                messageToNextVideo: 'Vá para a cozinha',
                comodoProximoVideo: 'cozinha'
            },
            { 
                src: 'https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be',
                order: 11,
                messageToNextVideo: 'Vá para o quarto do bebê',
                comodoProximoVideo: 'quarto-nene'
            }
        ]
    },
};

class Comodo extends Component {

    state = {
        selectedVideo: null,
        comodo: null,
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

    cleanSelectedVideo() {
        this.setState((state, props) => {
            return { selectedVideo: null};
        });
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

    hasUnlockedVideos() {
        const currentVideoOrder = this.getSavedVideoOrder();
        const selectedVideo = this.state.comodo.videos.find(({ order }) => currentVideoOrder >= order);
        return selectedVideo ? true : false;
    }

    getVideoByOrder(orderParam) {
        
        // console.log('orderParam', orderParam);
        let currentVideo = null;
        for (const key in COMODOS) {
            const comodo = COMODOS[key];
            const currentVideoAux = comodo.videos.find(({ order }) => orderParam === order);
            if (currentVideoAux) {
                currentVideo = currentVideoAux;
            }
        }
        console.log('currentVideo', currentVideo);
        return currentVideo;
    }

    componentWillMount() {
        const { nomeComodo } = this.props.match.params;
        // const currentVideoOrder = this.getSavedVideoOrder();
        const comodo = COMODOS[nomeComodo];
        
        // const selectedVideo = comodo.videos.find(({ order }) => currentVideoOrder === order);

        this.setState((state, props) => {
            return { comodo };
        });
        
        // const videoFounded = comodo.videos.find((video) => currentVideoOrder === video.order);
        // if (videoFounded) {
        //     this.changeVideoByOrder(currentVideoOrder, comodo);
        // }
        // if (!videoFounded) {
        //     orderToChangeVideo = comodo.videos[0].order;
        // }
        // this.changeVideoByOrder(orderToChangeVideo, comodo);
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
                // notification.open({
                //     message: 'Atenção',
                //     description: messageToNextVideo,
                //     duration: 15,
                //     onClick: () => {
                //       console.log('Notification Clicked!');
                //     },
                // });
            }
        }
        // else {
        //     this.changeVideoByOrder(nextOrderVideo, this.state.comodo);
        // }
        this.cleanSelectedVideo();
    }

    generateCurrentCard(currentVideo) {
        const currentVideoOrder = this.getSavedVideoOrder();
        const { nomeComodo } = this.props.match.params;
        const isTheSameRoom = currentVideo && nomeComodo === currentVideo.comodoProximoVideo;
        if (!isTheSameRoom && (currentVideo && currentVideo.messageToNextVideo)) {
            return (
                <Card className="nenhuma-cena-liberada">
                    <p>{!isTheSameRoom && currentVideo.messageToNextVideo}</p>
                    
                </Card>
            );
        }
        // Tratamento feito para apontar para a primeira cena
        else if (currentVideoOrder === 1 && nomeComodo !== 'sala-estar') {
            return (
                <Card className="nenhuma-cena-liberada">
                    <p>Vá para a sala de estar</p>
                </Card>
            );
        }
    }

    render() {
        const { backgroundImage, videos } = this.state.comodo;
        let selectedKeys = null;
        if (this.state.selectedVideo) {
            selectedKeys = [String(this.state.selectedVideo.order)]
        }

        const currentVideoOrder = this.getSavedVideoOrder();
        const previousVideo = this.getVideoByOrder(currentVideoOrder -1);

        return (
            <div className="comodo-page">
                <img className="comodo-background-image" src={backgroundImage} alt="alt"/>
                {/* <Row type="flex" justify="center" align="middle"> */}
                <Row>
                    <Col lg={20} md={18} sm={15} xs={24}>
                    {/* url='https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be'  */}
                        {
                            this.state.selectedVideo ? 
                            <ReactPlayer 
                                className="video-player" 
                                url={this.state.selectedVideo.src}
                                onEnded={this.handleOnVideoEnd.bind(this)}
                            />
                            :
                            this.generateCurrentCard(previousVideo)
                        }
                        
                        {/* <ReactPlayer url='https://www.youtube.com/watch?v=wtZNFVJl2KE&feature=youtu.be' playing /> */}
                    </Col>
                    <Col lg={4} md={6} sm={8} xs={24}>
                        <div className="playlist">
                            <Menu 
                                selectedKeys={selectedKeys}
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


