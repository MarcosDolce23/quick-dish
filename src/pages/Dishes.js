import React from 'react';
import { useTranslation } from 'react-i18next';

import DishesList from "../components/DishesList";
import BackButton from "../components/BackButton";

const IngredientsList = (ingredients) => {
    ingredients.map(item => {
        return (
            <div key={item._id} className="card-text" onClick={() => toggleIngredients(item)} >{item[l + 'Name']}
                <div style={{ backgroundImage: "url(images/icons/delete-icon-x.png)" }} className="delete-icon"></div>
            </div>
        );
    });
}

function Dishes({ ingredients, dishes, selectDish, markAsFavorite, toggleIngredients, resetIngredients }) {
    const { t, i18n } = useTranslation();
    const l = i18n.resolvedLanguage;

    return (
        <div className="main-div" style={{ paddingBottom: "40%" }}>
            <BackButton></BackButton>
            <div className="title">{t('dishes.title')}</div>
            <div className="main-container">
                <img src="images/icons/delete-icon.svg" alt="delete" className="delete-image" onClick={() => resetIngredients()}></img>
                <div className="card-dishes">
                    <IngredientsList ingredients={ingredients} />
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