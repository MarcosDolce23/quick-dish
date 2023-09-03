import React from "react";
import BackButton from "../components/BackButton";
import DishesList from "../components/DishesList";

function Favorites({ dishes, selectDish, markAsFavorite, filterDishes }) {
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
                            onChange={(e) => filterDishes(e)}>
                        </input>
                    </div>
                </div>
                <div className="list">
                    <DishesList
                        dishes={dishes}
                        selectDish={(sel) => selectDish(sel)}
                        markAsFavorite={(fav) => markAsFavorite(fav)}
                    ></DishesList>
                </div>
            </div>
        </div>
    );
}

export default Favorites;