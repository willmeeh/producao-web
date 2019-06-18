import React, { Component } from 'react';
import './Comodo.scss';
import { List, Card, Button, Col, Row, Icon, View } from 'antd';
import { Player, ControlBar, VolumeMenuButton, PlaybackRateMenuButton } from 'video-react';
import ReactPlayer from 'react-player'
// import "../node_modules/video-react/dist/video-react.css"; // import css

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

class Comodo extends Component {
    render() {
        return (
            <div style={{ marginTop: '70px' }}>
                <Row gutter={8}>
                    <Col span={16}>
                        <Row>
                            <Col span={20} style={{ padding: 20 }}>
                                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18}>
                                <Card title="Descrição" bordered={false} style={{ margin: 20, width: 600, height: 150 }}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis malesuada dolor eu porta. Donec id urna ac metus feugiat rutrum eget nec nibh. Maecenas in sem vel metus ullamcorper pharetra. Sed vitae erat arcu. Integer porttitor.
                                                </p>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Button type="primary" icon="download" size={'large'}>
                                    Voltar
                                    </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={5}>
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
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Comodo;