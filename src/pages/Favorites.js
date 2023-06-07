import React from "react";
import BackButton from "../components/BackButton";
import DishesList from "../components/DishesList";

class Favorites extends React.Component {
    render() {
        return (
            <div className="main-div">
                <BackButton></BackButton>
                <div className="title">Favoritos</div>
                <div className="main-container">
                    <div className="search-container">
                        <div className="text">
                            <input
                                type="text"
                                placeholder="Busca tus recetas"
                                className="input"
                                onChange={(e) => this.props.filterDishes(e)}>
                            </input>
                        </div>
                    </div>
                    <div className="list">
                        <DishesList
                            dishes={this.props.dishes}
                            selectDish={(sel) => this.props.selectDish(sel)}
                            markAsFavorite={(fav) => this.props.markAsFavorite(fav)}
                        ></DishesList>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favorites;