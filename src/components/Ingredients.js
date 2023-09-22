// Import Components
import React from "react";
import { useTranslation } from 'react-i18next';

function Ingredients({ value, ingredients, onChange }) {
    const { i18n } = useTranslation();
    const l = i18n.resolvedLanguage;

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    const collapsible = (e) => {
        let drop = document.getElementById(e.target.id);
        let content = drop.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    return (
        <div className="fridge-container">
            {ingredients.sort((a, b) => a[l + 'Name'].localeCompare(b[l + 'Name'])).map((item, i) => {
                return (
                    <div key={"1" + i} className="dropdown">
                        <div id={"drop" + i} onClick={(e) => collapsible(e)} className="dropbtn">
                            <div id={"drop" + i} className="image-dropdown" style={{ backgroundImage: item.image }}></div>
                            <div id={"drop" + i} className="text-dropdown">{item[l + 'Name']}</div>
                            <div id={"drop" + i} className="arrow-dropdown" style={{ backgroundImage: "url(images/fridge/Arrow.png)" }}></div>
                        </div>
                        <div id="collapsible" className="dropdown-content">
                            {item.ingredients.map((ingredient, i, arr) => {
                                return (
                                    <div key={"C1" + i} className="light">
                                        <label>
                                            <span name={ingredient[l + 'Name']} className="name-label">{ingredient[l + 'Name']}</span>
                                            <input
                                                type="checkbox"
                                                id={ingredient._id}
                                                name={ingredient[l + 'Name']}
                                                value={ingredient._id}
                                                className="input-checkbox"
                                                onChange={() => onChange(ingredient)}
                                                checked={value.some(i => i._id === ingredient._id)}
                                            ></input>
                                            <span className="design"></span>
                                            <span className="text-ingredients" name={ingredient[l + 'Name']}>{ingredient[l + 'Name']}</span>
                                        </label>
                                        {i < arr.length - 1 ? <hr className="line"></hr> : null}
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Ingredients;