import React, { Component } from 'react';
import logo from '../images/solitaria-logo.png';
import bg from '../images/img-casa-cima.jpeg';
import './Equipe.scss';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';

import william from '../images/autores/william.jpeg';
import arthur from '../images/autores/arthur.jpeg';
import vitor from '../images/autores/vitor.jpeg';
import rafaela from '../images/autores/rafaela.jpeg';
import milena from '../images/autores/milena.jpeg';
import eduarda from '../images/autores/eduarda.jpeg';
import caroline from '../images/autores/caroline.jpeg';
import bruno from '../images/autores/bruno.jpeg';
import alceu from '../images/autores/alceu.jpeg';

class Equipe extends Component {
    render() {
        const size = 64;
        const colSpanSize = 8;

        return (
            <div className="equipe-page">
                <img className="background-image" src={bg} alt="alt"/>

                <div className="logo-outer">
                    <img className="logo-inner" src={logo} alt="logo"/>
                </div>

                <Row type="flex" justify="space-around" className="equipe-container" align="middle">
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={vitor}/>
                        <br/>
                        <span className="nome">Vitor A. Vogt - Diretor, roteirista, produtor, editor, finalizador</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={milena}/>
                        <br/>
                        <span className="nome">Milena Morais - Diretora, produtora, diretora de arte, editora</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={bruno}/>
                        <br/>
                        <span className="nome">Bruno Granata - Assistente de Direção, produtor, editor, finalizador</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={rafaela}/>
                        <br/>
                        <span className="nome">Rafaela Aline Wenzel - Atriz protagonista, produtora</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={caroline}/>
                        <br/>
                        <span className="nome">Caroline de F. Oliveira - Atriz coadjuvante, produtora</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={alceu}/>
                        <br/>
                        <span className="nome">Alceu Silva - Diretor de fotografia, Produtor</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={arthur} />
                        <br/>
                        <span className="nome">Arthur - Desenvolvedor do Site</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={william} />
                        <br/>
                        <span className="nome">William - Desenvolvedor do Site</span>
                    </Col>
                    <Col span={colSpanSize}>
                        <Avatar size={size} src={eduarda}/>
                        <br/>
                        <span className="nome">Eduarda Pereira - Desenvolvedora da Identidade Visual</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Equipe;
