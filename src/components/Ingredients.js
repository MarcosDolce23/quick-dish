// Import Components
import React from "react";

function Ingredients({ value, ingredients, onChange }) {

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
            {ingredients.sort((a, b) => a.name.localeCompare(b.name)).map((item, i) => {
                return (
                    <div key={"1" + i} className="dropdown">
                        <div id={"drop" + i} onClick={(e) => this.collapsible(e)} className="dropbtn">
                            <div id={"drop" + i} className="image-dropdown" style={{ backgroundImage: item.image }}></div>
                            <div id={"drop" + i} className="text-dropdown">{item.name}</div>
                            <div id={"drop" + i} className="arrow-dropdown" style={{ backgroundImage: "url(images/fridge/Arrow.png)" }}></div>
                        </div>
                        <div id="collapsible" className="dropdown-content">
                            {item.ingredients.sort().map((ingredient, i, arr) => {
                                return (
                                    <div key={"C1" + i} className="light">
                                        <label>
                                            <span name={ingredient} className="name-label">{ingredient}</span>
                                            <input
                                                type="checkbox"
                                                id={ingredient}
                                                name={ingredient}
                                                value={ingredient}
                                                className="input-checkbox"
                                                onChange={() => onChange(ingredient)}
                                                checked={value.includes(ingredient)}
                                            ></input>
                                            <span className="design"></span>
                                            <span className="text-ingredients" name={ingredient}>{ingredient}</span>

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