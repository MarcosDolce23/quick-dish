import React from "react";
import DishesList from "../components/DishesList";
import BackButton from "../components/BackButton";

class Search extends React.Component {
    render() {
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
                                onChange={(e) => this.props.filterDishes(e)}>
                            </input>
                        </div>
                    </div>
                    <DishesList
                        dishes={this.props.dishes.sort((a, b) => a.name.localeCompare(b.name))}
                        selectDish={(sel) => this.props.selectDish(sel)}
                        markAsFavorite={(fav) => this.props.markAsFavorite(fav)}
                    ></DishesList>
                </div>
            </div>
        )
    }
}

export default Search;