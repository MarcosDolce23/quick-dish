import React from "react";
import DishesList from "../components/DishesList";
import BackButton from "../components/BackButton";
import { useState } from "react";

function Search({ dishes, selectDish, markAsFavorite }) {

    const [search, setSearch] = useState(dishes);

    const filterDishes = (e) => {
        if (!e)
            return dishes;

        let filter = e.target.value.toUpperCase();
        setSearch(dishes.filter( a => a.name.toUpperCase().indexOf(filter) > -1 ));
    };

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
                    // dishes={dishes.sort((a, b) => a.name.localeCompare(b.name))}
                    dishes={search}
                    selectDish={(sel) => selectDish(sel)}
                    markAsFavorite={(fav) => markAsFavorite(fav)}
                ></DishesList>
            </div>
        </div>
    )
}

export default Search;