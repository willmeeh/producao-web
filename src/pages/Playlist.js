import React, { Component } from 'react';
import './Comodo.scss';
import { List, Card, Button, Col, Row } from 'antd';
import { Player } from 'video-react';

class Comodo extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Row gutter={8}>
                        <Col span={8}>
                            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis malesuada dolor eu porta. Donec id urna ac metus feugiat rutrum eget nec nibh. Maecenas in sem vel metus ullamcorper pharetra. Sed vitae erat arcu. Integer porttitor, eros quis congue molestie, lorem mi pulvinar ante, vel ultricies eros nulla id risus. In pharetra metus eget risus luctus facilisis. Mauris condimentum erat nec odio tempus posuere. Cras iaculis libero eu nisi rutrum ullamcorper. Pellentesque non semper tellus. Duis varius augue dui, at blandit tellus rhoncus sit amet. Suspendisse tortor odio, mollis non lorem in, dignissim maximus diam.
                                </p>
                            </Card>
                        </Col>
                        <Col span={16}>

                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Comodo;