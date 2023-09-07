import React from 'react';
import { Link } from 'react-router-dom';

function Home({ onClick }) {
    const cookTime = [
        {
            time: 20,
            image: "url(images/dishes/test-image-icon.png)"
        },
        {
            time: 30,
            image: "url(images/dishes/test-image-icon.png)"
        },
        {
            time: 40,
            image: "url(images/dishes/test-image-icon.png)"
        }
    ];

    const timeCookingRows = cookTime.map((item, i, a) => {
        return (
            <Link key={i} to="/search" onClick={() => onClick(item.time)} >
                <div className="filter-button">
                    <div className="filter-image" style={{ backgroundImage: "url(images/dishes/test-image-icon.png)" }}></div>
                    {
                        i === 0 ?
                            <div className="filter-text">Menos de {item.time} min</div>
                            :
                            i === a.length - 1 ?
                                <div className="filter-text">Más de {item.time} min</div>
                                :
                                <div className="filter-text">Entre {item.time} min y {a[i + 1].time} min</div>
                    }
                </div>
            </Link>
        );
    });

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
                    {timeCookingRows}
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

export default Home;