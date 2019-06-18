import React, { Component } from 'react';
import './Planta.scss';
import { List, Card, Button, Col, Row, Icon, View } from 'antd';
import { Player, ControlBar, VolumeMenuButton, PlaybackRateMenuButton } from 'video-react';
import ReactPlayer from 'react-player'

const image = 'https://raw.githubusercontent.com/willmeeh/producao-web/master/src/images/comodos.png'

// import "../node_modules/video-react/dist/video-react.css"; // import css
class Planta extends Component {
    render() {
        return (
            <div>
                <div className="planta-page">
                    <img className="planta-external" src={image} alt="unicorn" />
                </div>
            </div>
        );
    }
}

export default Planta;
