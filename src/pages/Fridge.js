import React from "react";
import { Link } from 'react-router-dom';
import BackButton from "../components/BackButton";
import Ingredients from "../components/Ingredients";

function Fridge({value, ingredients, ingredientsCount, onChange}) {
    return (
        <div className="main-div">
            <BackButton></BackButton>
            <div className="title">Refrigerador</div>
            <div className="main-container">
                <Ingredients
                    value={value}
                    ingredients={ingredients}
                    onChange={(beverage) => onChange(beverage)}
                ></Ingredients>
            </div>
            <div className="dishes-button">
                {ingredientsCount > 0 ? <div className="counter">{ingredientsCount}</div> : null}
                <Link to='/fridge/dishes'>
                    <img src="images/icons/inbox.svg" alt="Dishes"></img>
                </Link>
            </div>
        </div>
    );
}

export default Fridge;