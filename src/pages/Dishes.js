import React from 'react';
import DishesList from "../components/DishesList";
import BackButton from "../components/BackButton";

class Dishes extends React.Component {
    render() {

        const ingredients = this.props.ingredients.map(item => {
            return (
                <p key={item} className="card-text" onClick={() => this.props.handleInputChange(item)} >{item}
                    <div style={{ backgroundImage: "url(images/icons/delete-icon-x.png)" }} className="delete-icon"></div>
                </p>
            );
        });

        return (
            <div className="main-div" style={{ paddingBottom: "40%" }}>
                <BackButton></BackButton>
                <div className="title">Mi Refrigerador</div>
                <div className="main-container">
                    <img src="images/icons/delete-icon.svg" alt="delete" className="delete-image" onClick={() => this.props.resetIngredients()}></img>
                    <div className="card-dishes">
                        {ingredients}
                    </div>
                    <DishesList
                        dishes={this.props.dishes}
                        selectDish={(sel) => this.props.selectDish(sel)}
                        markAsFavorite={(fav) => this.props.markAsFavorite(fav)}
                    ></DishesList>
                </div>
            </div>
        )

    }
}

export default Dishes;