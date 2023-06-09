import React from 'react';
import BackButton from "../components/BackButton";

class Dish extends React.Component {
    render() {

        const ingredients = this.props.dish.ingredients.map(item => {
            return (
                <p key={item} className="card-text">{item}</p>
            );
        });

        return (
            <div className="main-div">
                <BackButton></BackButton>
                <div>
                    <img src={this.props.dish.headerImage} alt="Header" style={{ width: "100%" }}></img>
                    <div className="title-home">Dish</div>
                </div>
                <div className="dish-body">
                    <div className="dish-body-div">
                        <div className="dish-name">{this.props.dish.name}</div>
                        <img
                            className="img-favorite"
                            src={this.props.dish.favorite === true ? "images/icons/favorite-icon-selected.svg" : "images/icons/favorite-icon-unselected.svg"}
                            alt="Favorite"
                            onClick={() => this.props.markAsFavoriteDish(this.props.dish.name)}
                        ></img>
                    </div>
                    <div className="dish-cook-time">Tiempo estimado de elaboración: {this.props.dish.cookTime} minutos</div>
                    <hr className="dish-hr"></hr>
                    <div className="dish-ingredients">Ingredientes</div>
                    <div>{ingredients}</div>
                    <hr className="dish-hr"></hr>
                    <div className="dish-ingredients">Preparación 1 porción</div>
                    <div style={{ marginTop: "15px" }}>
                        {this.props.dish.recipe.map((item, i) => {
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
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dish;