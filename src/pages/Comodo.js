import React, { Component } from 'react';
import './Comodo.scss';
import { notification, Button, Col, Row, Icon, Menu, Card } from 'antd';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

import ImagemCozinha from '../images/cozinha.jpeg'
import ImagemCozinha2 from '../images/cozinha2.jpeg'
import ImagemQuartoMonique from '../images/quarto-monique.jpeg'
import ImagemQuartoMonique2 from '../images/quarto-monique-2.jpeg'
import ImagemQuartoNene from '../images/quarto-nene.jpeg'
import ImagemQuartoNene2 from '../images/quarto-nene2.jpeg'
import ImagemQuartoNene3 from '../images/quarto-nene3.jpeg'
import ImagemQuartoTeresa from '../images/quarto-teresa.jpeg'
import ImagemQuartoTeresa2 from '../images/quarto-teresa2.jpeg'
import ImagemSalaEstar from '../images/sala-estar.jpeg'
import ImagemSalaJantar from '../images/sala-jantar.jpeg'

const imagemCena8 = 'data:image/jpeg;base64,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';
const imagemCena12 = 'https://pbs.twimg.com/profile_images/732328055398641664/nN2Y-0tn.jpg';

export const COMODOS = {
    'cozinha': {
        backgroundImage: ImagemCozinha,
        name: 'Cozinha',
        videos: [
            {
                src: 'https://www.youtube.com/watch?v=Uq_3k-N6ntQ',
                order: 3,
                messageToNextVideo: 'Vá para a sala de jantar',
                comodoProximoVideo: 'sala-jantar'
            },
            {
                src: 'https://www.youtube.com/watch?v=ulzdM2hQOGk',
                order: 4,
                messageToNextVideo: 'Vá para a sala de jantar',
                comodoProximoVideo: 'sala-jantar'
            },
            {
                src: 'https://www.youtube.com/watch?v=3-gbwpNN9vI',
                order: 6,
                messageToNextVideo: 'Vá para o quarto trancado',
                comodoProximoVideo: 'quarto-nene'
            }
        ]
    },
    'quarto-monique': {
        backgroundImage: ImagemQuartoMonique,
        name: 'Quarto da Monique',
        videos: [
            {
                src: 'https://www.youtube.com/watch?v=BAIkOV4pbUo',
                order: 2,
                messageToNextVideo: 'Vá para a Cozinha',
                comodoProximoVideo: 'cozinha'
            }
        ]
    },
    'quarto-nene': {
        backgroundImage: ImagemQuartoNene,
        name: 'Quarto Trancado',
        videos: [
            {
                src: 'https://www.youtube.com/watch?v=3UPzSO0nHC8',
                order: 7,
                messageToNextVideo: 'Vá para a sala de estar',
                comodoProximoVideo: 'sala-estar'
            }
        ]
    },
    'quarto-teresa': {
        backgroundImage: ImagemQuartoTeresa,
        name: 'Quarto da Teresa',
        videos: [
            {
                src: 'https://www.youtube.com/watch?v=Tr37xJ45zZc',
                order: 9,
                messageToNextVideo: 'Vá para a sala de jantar',
                comodoProximoVideo: 'sala-jantar'
            },
            {
                src: 'https://www.youtube.com/watch?v=ejPYbGJEPUU',
                order: 11,
                messageToNextVideo: '',
                comodoProximoVideo: ''
            },
        ]
    },
    'sala-estar': {
        backgroundImage: ImagemSalaEstar,
        name: 'Sala de Estar',
        videos: [
            {
                src: 'https://www.youtube.com/watch?v=B27iYNmOaXY',
                order: 1,
                messageToNextVideo: 'Vá para o quarto da monique',
                comodoProximoVideo: 'quarto-monique'
            },
            {
                src: 'https://www.youtube.com/watch?v=tWvG2zEfDU8',
                order: 8,
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
                src: 'https://www.youtube.com/watch?v=v7Qi4xXtEqs',
                order: 10,
                messageToNextVideo: 'Vá para o quarto da teresa',
                comodoProximoVideo: 'quarto-teresa'
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
                <Card className="card-dica">
                    <p>{!isTheSameRoom && currentVideo.messageToNextVideo}</p>

                </Card>
            );
        }
        // Tratamento feito para apontar para a primeira cena
        else if (currentVideoOrder === 1 && nomeComodo !== 'sala-estar') {
            return (
                <Card className="card-dica">
                    <p>Vá para a sala de estar</p>
                </Card>
            );
        }
    }

    render() {
        let { backgroundImage, videos } = this.state.comodo;
        let selectedKeys = null;
        if (this.state.selectedVideo) {
            selectedKeys = [String(this.state.selectedVideo.order)]
        }

        const currentVideoOrder = this.getSavedVideoOrder();
        const previousVideo = this.getVideoByOrder(currentVideoOrder -1);

        const savedVideoOrder = this.getSavedVideoOrder();
        const { nomeComodo } = this.props.match.params;
        if (savedVideoOrder >= 8 && savedVideoOrder < 11 && nomeComodo === 'quarto-nene') {
            backgroundImage = ImagemQuartoNene2;
        }
        else if (savedVideoOrder >= 3 && savedVideoOrder < 11 && nomeComodo === 'quarto-monique') {
            backgroundImage = ImagemQuartoMonique2;
        }
        else if (savedVideoOrder >= 11) {
            if (nomeComodo === 'quarto-teresa') {
                backgroundImage = ImagemQuartoTeresa2;
            }
            // if (nomeComodo === 'cozinha') {
            //     backgroundImage = ImagemCozinha2;
            // }
            if (nomeComodo === 'quarto-nene') {
                backgroundImage = ImagemQuartoNene3;
            }
        }


        return (
            <div className="comodo-page">
                <img className="comodo-background-image" src={backgroundImage} alt="alt"/>
                {/* <Row type="flex" justify="center" align="middle"> */}
                <Row>
                    <Col lg={20} md={18} sm={24} xs={24}>
                        {
                            this.state.selectedVideo ?
                            <ReactPlayer
                                controls={true}
                                className="video-player"
                                url={this.state.selectedVideo.src}
                                onEnded={this.handleOnVideoEnd.bind(this)}
                                playing
                            />
                            :
                            this.generateCurrentCard(previousVideo)
                        }
                    </Col>
                    <Col lg={4} md={6} sm={24} xs={24}>
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
