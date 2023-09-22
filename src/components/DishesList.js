// Import CSS
import './DishesList.css';

// Import Components
import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function DishesList({ dishes, filterText, selectDish, markAsFavorite }) {
    const { i18n } = useTranslation();
    const l = i18n.resolvedLanguage;

    const rows = [];

    dishes.forEach((dish, i) => {
        if (
            dish[l + 'Name'].toLowerCase().indexOf(
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
                            <div id="name" className="h1-card">{dish[l + 'Name']}</div>
                            <div className="h2-card">{dish[l + 'Label']}</div>
                            <div className="h3-card">{dish.ingredients.map(ingredient => ingredient[l + 'Name']).join(', ')}</div>
                        </div>
                    </Link>
                    <div
                        className="plus-card-dish"
                        onClick={() => markAsFavorite(dish.id)}
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