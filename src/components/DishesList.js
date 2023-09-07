// Import CSS
import './DishesList.css';

// Import Components
import React from "react";
import { Link } from 'react-router-dom';

function DishesList({ dishes, filterText, selectDish, markAsFavorite }) {
    const rows = [];

    dishes.forEach((dish, i) => {
        if (
            dish.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        rows.push(
            <div key={"1" + i} className="dish-card">
                <div className="main-card-dish">
                    <Link to="/search/dish" style={{ width: "100%" }} onClick={() => selectDish(dish)}>
                        <div className="second-card-dish" style={{ backgroundImage: dish.image }}></div>
                        <div className="third-card-dish">
                            <div id="name" className="h1-card">{dish.name}</div>
                            <div className="h2-card">{dish.label}</div>
                            <div className="h3-card">{dish.ingredients.join(", ")}</div>
                        </div>
                    </Link>
                    <div
                        className="plus-card-dish"
                        onClick={() => markAsFavorite(dish.name)}
                        style={dish.favorite === true ? { backgroundImage: "url(images/icons/favorite-icon-selected.svg)" } : { backgroundImage: "url(images/icons/favorite-icon-unselected.svg)" }}
                    ></div>
                </div>
            </div>
        )
    });

    return (
        <div>{rows}</div>
    );
}

export default DishesList;