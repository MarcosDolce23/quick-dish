import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="main-div">
                <div className="main-container">
                    <div className="header-home">Qué cocino</div>
                    <div className="sub-header">Elabora tus recetas con lo que tengas a mano</div>
                    <Link to="/fridge">
                        <img src="images/my-refrigerator.png" alt="My refrigerator" style={{ width: "100%" }}></img>
                    </Link>
                    <div className="header-filter">Tiempo de elaboración</div>
                    <div className="sub-header">Recetas ordenadas por el tiempo de su elaboración</div>
                    <div className="filter-container">
                        <Link to="/search" onClick={() => this.props.onClick(20)} >
                            <div className="filter-button">
                                <div className="filter-image" style={{ backgroundImage: "url(images/dishes/test-image-icon.png)" }}></div>
                                <div className="filter-text">Menos de 20 min</div>
                            </div>
                        </Link>
                        <Link to="/search" onClick={() => this.props.onClick(30)}>
                            <div className="filter-button">
                                <div className="filter-image" style={{ backgroundImage: "url(images/dishes/test-image-icon.png)" }}></div>
                                <div className="filter-text">Entre 20 y 40 min</div>
                            </div>
                        </Link>
                        <Link to="/search" onClick={() => this.props.onClick(40)}>
                            <div className="filter-button">
                                <div className="filter-image" style={{ backgroundImage: "url(images/dishes/test-image-icon.png)" }}></div>
                                <div className="filter-text">Más de 40 min</div>
                            </div>
                        </Link>
                    </div>
                    <div className="header-filter">Veganas</div>
                    <div className="sub-header">Recetas elaboradas sin productos de origen animal</div>
                    <div className="filter-container">
                        <div className="filter-button">
                            <div className="filter-image"></div>
                            <div className="filter-text">Nombre de receta Lorem Ipsum</div>
                        </div>
                        <div className="filter-button">
                            <div className="filter-image"></div>
                            <div className="filter-text">Nombre de receta Lorem Ipsum</div>
                        </div>
                        <div className="filter-button">
                            <div className="filter-image"></div>
                            <div className="filter-text">Nombre de receta Lorem Ipsum</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;