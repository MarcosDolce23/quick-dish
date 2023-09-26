import { useTranslation } from "react-i18next";

function SearchBar({ filterText, onFilterTextChange }) {
    const { t } = useTranslation();

    return (
        <div className="search-container">
            <div className="text">
                <input
                    type="text"
                    value={filterText}
                    placeholder={t('searchBar.placeholder')}
                    onChange={(e) => onFilterTextChange(e.target.value)}
                    className="input" />
            </div>
        </div>
    )
}

export default SearchBar;