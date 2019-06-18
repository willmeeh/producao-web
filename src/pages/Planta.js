import React, { Component } from 'react';
import './Planta.scss';
import { List, Card, Button, Col, Row, Icon, View } from 'antd';
import { Player, ControlBar, VolumeMenuButton, PlaybackRateMenuButton } from 'video-react';
import ReactPlayer from 'react-player'

import image from '../images/comodos.svg'

// import "../node_modules/video-react/dist/video-react.css"; // import css


class Planta extends Component {
    render() {
        return (
            <div>
                <div className="home-page">
                    <img className="house-external" src={image} alt="fuck" />
                </div >
            </div>
        );
    }
}

export default Planta;