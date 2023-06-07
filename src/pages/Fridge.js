import React from "react";
import { Link } from 'react-router-dom';
import BackButton from "../components/BackButton";
import Ingredients from "../components/Ingredients";

class Fridge extends React.Component {
    render() {
        return (
            <div className="main-div">
                <BackButton></BackButton>
                <div className="title">Refrigerador</div>
                <div className="main-container">
                    <Ingredients
                        value={this.props.value}
                        ingredients={this.props.ingredients}
                        onChange={(beverage) => this.props.onChange(beverage)}
                    ></Ingredients>
                </div>
                <div className="dishes-button">
                    {this.props.ingredientsCount > 0 ? <div className="counter">{this.props.ingredientsCount}</div> : null}
                    <Link to='/fridge/dishes'>
                        <img src="images/icons/inbox.svg" alt="Dishes"></img>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Fridge;