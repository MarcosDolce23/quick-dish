// Import CSS
import './DishesList.css';

// Import Components
import React from "react";
import { Link } from 'react-router-dom';

function DishesList({ dishes, selectDish, markAsFavorite }) {
    return (
        <div>
            {dishes.map((item, i) => {
                return (
                    <div key={"1" + i} className="dish-card">
                        <div className="main-card-dish">
                            <Link to="/search/dish" style={{ width: "100%" }} onClick={() => selectDish(item)}>
                                <div className="second-card-dish" style={{ backgroundImage: item.image }}></div>
                                <div className="third-card-dish">
                                    <div id="name" className="h1-card">{item.name}</div>
                                    <div className="h2-card">{item.label}</div>
                                    <div className="h3-card">{item.ingredients.join(", ")}</div>
                                </div>
                            </Link>
                            <div
                                className="plus-card-dish"
                                onClick={() => markAsFavorite(item.name)}
                                style={item.favorite === true ? { backgroundImage: "url(images/icons/favorite-icon-selected.svg)" } : { backgroundImage: "url(images/icons/favorite-icon-unselected.svg)" }}
                            ></div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}

export default DishesList;