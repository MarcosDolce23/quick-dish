function SearchBar({ filterText, onFilterTextChange }) {
    return (
        <div className="search-container">
            <div className="text">
                <input
                    type="text"
                    value={filterText}
                    placeholder="Busca tus recetas"
                    onChange={(e) => onFilterTextChange(e.target.value)}
                    className="input" />
            </div>
        </div>
    )
}

export default SearchBar;