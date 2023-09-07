import React from 'react';
import { useTranslation } from 'react-i18next';

import DishesList from "../components/DishesList";
import BackButton from "../components/BackButton";

function Dishes({ ingredients, dishes, selectDish, markAsFavorite, handleInputChange, resetIngredients }) {
    const { t } = useTranslation();

    const ingredientsList = ingredients.map(item => {
        return (
            <div key={item} className="card-text" onClick={() => handleInputChange(item)} >{item}
                <div style={{ backgroundImage: "url(images/icons/delete-icon-x.png)" }} className="delete-icon"></div>
            </div>
        );
    });

    return (
        <div className="main-div" style={{ paddingBottom: "40%" }}>
            <BackButton></BackButton>
            <div className="title">{t('dishes.title')}</div>
            <div className="main-container">
                <img src="images/icons/delete-icon.svg" alt="delete" className="delete-image" onClick={() => resetIngredients()}></img>
                <div className="card-dishes">
                    {ingredientsList}
                </div>
                <DishesList
                    dishes={dishes}
                    filterText={''}
                    selectDish={(sel) => selectDish(sel)}
                    markAsFavorite={(fav) => markAsFavorite(fav)}
                ></DishesList>
            </div>
        </div>
    )
}

export default Dishes;