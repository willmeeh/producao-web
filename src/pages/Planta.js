import React, { Component } from 'react';
import './Planta.scss';
import { COMODOS } from './Comodo';
import { withRouter, Redirect } from 'react-router-dom'
import ImageMapper from 'react-image-mapper';

const image = 'https://raw.githubusercontent.com/willmeeh/producao-web/master/src/images/comodos.png'

// import "../node_modules/video-react/dist/video-react.css"; // import css
class Planta extends Component {

    state = {
        redirectTo: null,
        hoveredArea: null
    }

    handleComodoClick = ({ name }) => {
        this.setState({ redirectTo: name });
    }

    enterArea = (area) => {
        this.setState({ hoveredArea: area });
    }
    
    leaveArea = (area) => {
        this.setState({ hoveredArea: null });
    }
    
    getTipPosition = (area) => {
        return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
    }

    render() {
        const MAP = {
            name: "my-map",
            areas: [ // CimaEsquerdo, BaixoEsquerdo, BaixoDir, CimaDir
                { name: "cozinha", shape: "poly", coords: [71,70, 71,259, 136,259, 136,70], preFillColor: "rgba(2,23,131,.4)", fillColor: "rgba(2,23,131,.7)" },
                { name: "sala-jantar", shape: "poly", coords: [136,71, 136,260, 287,257, 287,71], preFillColor: "rgba(88,208,88,.4)", fillColor: "rgba(88,208,88,.7)" },
                { name: "sala-estar", shape: "poly", coords: [136,259, 136,405, 287,405, 287,259], preFillColor: "rgba(208,88,180,.4)", fillColor: "rgba(208,88,180,.7)" },
                { name: "quarto-monique", shape: "poly", coords: [7,259, 7,405, 134,405, 134,259], preFillColor: "rgba(221,182,100,.4)", fillColor: "rgba(221,182,100,.7)" },
                { name: "quarto-nene", shape: "poly", coords: [287,119, 287,259, 492,257, 492,119], preFillColor: "rgba(100,154,221,.4)", fillColor: "rgba(100,154,221,.7)" },
                { name: "quarto-teresa", shape: "poly", coords: [287,260, 287,459, 421,458, 421,260], preFillColor: "rgba(130,100,221,.4)", fillColor: "rgba(130,100,221,.7)" },
            ]
        }

        if (this.state.redirectTo) {
            return <Redirect to={`/comodo/${this.state.redirectTo}`}/>;
        }

        return (
            <div className="planta-page">
                <img className="background-image" src={"https://willmeeh.github.io/producao-web/static/media/img-casa-cima.f163ecff.jpeg"} alt="alt"/>
                <div className="planta">
                    <ImageMapper
                        className="image-responsive"
                        onClick={this.handleComodoClick} src={image} map={MAP}
                        onMouseEnter={area => this.enterArea(area)}
                        onMouseLeave={area => this.leaveArea(area)}
                    />
                    {
                        this.state.hoveredArea &&
                        <span className="tooltip"
                            style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
                            { this.state.hoveredArea && COMODOS[this.state.hoveredArea.name].name}
                        </span>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Planta);
