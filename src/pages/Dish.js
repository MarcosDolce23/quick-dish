import React from 'react';
import { useTranslation } from 'react-i18next';

import BackButton from "../components/BackButton";

function Ingredients({ dish, l }) {

    const ingredients = [];

    dish.ingredients.map(item => {
        ingredients.push(
            <p key={item._id} className="card-text">{item[l + 'Name']}</p>
        );
    });

    return ingredients;
}

function Quantities({ dish, l }) {

    const quantities = [];

    dish[l + 'Quantities'].map((item, i) => {
        quantities.push(
            <div key={"c" + i} className="div-list">
                <div key={"c" + i} className="content-list">
                    <div>{item}</div>
                </div>
            </div>
        )
    });

    return quantities;
}

function Steps({ dish, l }) {

    const steps = [];

    dish[l + 'Recipe'].map((item, i) => {
        steps.push(
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

    return steps;
}

function Dish({ dish, markAsFavorite }) {
    const { t, i18n } = useTranslation();
    const l = i18n.resolvedLanguage;

    if (!dish)
        return (
            <div className="main-div">
                <BackButton></BackButton>
            </div>
        )
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
                <div>
                    <Ingredients dish={dish} l={l} />
                </div>
                <hr className="dish-hr"></hr>
                <div className="dish-ingredients">{t('dish.quantities')}</div>
                <div style={{ marginTop: "15px" }}>
                    <Quantities dish={dish} l={l} />
                </div>
                <hr className="dish-hr"></hr>
                <div className="dish-ingredients">{t('dish.steps')}</div>
                <div style={{ marginTop: "15px" }}>
                    <Steps dish={dish} l={l} />
                </div>
            </div>
        </div>
    );
}

export default Dish;