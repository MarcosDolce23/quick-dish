import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from "../components/BackButton";
import Ingredients from "../components/Ingredients";

function Fridge({ value, ingredients, setFridge, coincidences, onChange }) {
    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        Axios({
            url: "https://dish-crud-express.onrender.com/categories/",
        })
            .then((response) => {
                setIsLoaded(true);
                setFridge(response.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(true);
            });
    });

    if (error) {
        return <div>Error</div>
    } else if (!isLoaded) {
        return <did>Loading...</did>
    } else {
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
}

export default Fridge;