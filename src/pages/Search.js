import React from "react";
import DishesList from "../components/DishesList";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function Search({ dishes, selectDish, markAsFavorite, title }) {

    const [filterText, setFilterText] = useState('');

    return (
        <div className="main-div">
            <BackButton></BackButton>
            <div className="title">{title}</div>
            <div className="main-container">
                <SearchBar 
                    filterText={filterText} 
                    onFilterTextChange={setFilterText} />
                <DishesList
                    dishes={dishes}
                    filterText={filterText}
                    selectDish={(sel) => selectDish(sel)}
                    markAsFavorite={(fav) => markAsFavorite(fav)}
                ></DishesList>
            </div>
        </div>
    )
}

export default Search;