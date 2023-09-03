import React from "react";
import DishesList from "../components/DishesList";
import BackButton from "../components/BackButton";

function Search({dishes, selectDish, markAsFavorite, filterDishes}) {
    return (
        <div className="main-div">
            <BackButton></BackButton>
            <div className="title">Explorar</div>
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
                <DishesList
                    dishes={dishes.sort((a, b) => a.name.localeCompare(b.name))}
                    selectDish={(sel) => selectDish(sel)}
                    markAsFavorite={(fav) => markAsFavorite(fav)}
                ></DishesList>
            </div>
        </div>
    )
}

export default Search;