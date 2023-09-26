import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import BackButton from "../components/BackButton";
import Ingredients from "../components/Ingredients";

function Fridge({value, ingredients, coincidences, onChange}) {
    const { t } = useTranslation();

    return (
        <div className="main-div">
            <BackButton></BackButton>
            <div className="title">{t('fridge.title')}</div>
            <div className="main-container">
                <Ingredients
                    value={value}
                    ingredients={ingredients}
                    onChange={(ingredient) => onChange(ingredient)}
                ></Ingredients>
            </div>
            <div className="dishes-button">
                {coincidences.length > 0 ? <div className="counter">{coincidences.length}</div> : null}
                <Link to='/fridge/dishes'>
                    <img src="images/icons/inbox.svg" alt="Dishes"></img>
                </Link>
            </div>
        </div>
    );
}

export default Fridge;