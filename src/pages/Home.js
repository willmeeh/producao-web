import React, { Component } from 'react';
import image from '../images/img-casa-cima.jpeg';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <img className="house-external" src={image} alt="fuck"/>
            </div>
        );
    }
}

export default Home;
