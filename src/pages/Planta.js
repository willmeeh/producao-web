import React, { Component } from 'react';
import './Planta.scss';
import { List, Card, Button, Col, Row, Icon, View } from 'antd';
import { Player, ControlBar, VolumeMenuButton, PlaybackRateMenuButton } from 'video-react';
import ReactPlayer from 'react-player'
// import "../node_modules/video-react/dist/video-react.css"; // import css


class Planta extends Component {
    render() {
        return (
            <div style={{ marginTop: '70px' }}>
                <Row gutter={8}>
                    <Col span={16}>
                       
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Planta;