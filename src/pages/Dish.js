import React from 'react';
import { useTranslation } from 'react-i18next';

import BackButton from "../components/BackButton";

function Dish({ dish, markAsFavorite }) {
    const { t, i18n } = useTranslation();
    const l = i18n.resolvedLanguage;

    const ingredients = dish.ingredients.map(item => {
        return (
            <p key={item._id} className="card-text">{item[l + 'Name']}</p>
        );
    });

    const steps = dish[l + 'Recipe'].map((item, i) => {
        return (
            <div key={"c" + i} className="div-list">
                <div className="content-item">
                    <div className="number-item">{i + 1}</div>
                </div>

                <div key={"c" + i} className="content-list">
                    <div>{item}</div>
                </div>
            </div>
        )
    });

    return (
        <div className="main-div">
            <BackButton></BackButton>
            <div>
                <img src={"/images/dishes/" + dish.headerImage} alt="Header" style={{ width: "100%" }}></img>
            </div>
            <div className="dish-body">
                <div className="dish-body-div">
                    <div className="dish-name">{dish[l + 'Name']}</div>
                    <img
                        className="img-favorite"
                        src={dish.favorite === true ? "images/icons/favorite-icon-selected.svg" : "images/icons/favorite-icon-unselected.svg"}
                        alt="Favorite"
                        onClick={() => markAsFavorite(dish.id)}
                    ></img>
                </div>
                <div className="dish-cook-time">{t('dish.cookTime')}: {dish.cookTime} minutos</div>
                <hr className="dish-hr"></hr>
                <div className="dish-ingredients">{t('dish.ingredients')}</div>
                <div>{ingredients}</div>
                <hr className="dish-hr"></hr>
                <div className="dish-ingredients">{t('dish.steps')}</div>
                <div style={{ marginTop: "15px" }}>
                    {steps}
                </div>
            </div>
        </div>
    );
}

export default Dish;