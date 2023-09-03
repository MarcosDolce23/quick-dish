import React from 'react';
import './BackButton.css';

function BackButton() {
    const handleClick = () => {
        window.history.back();
    }

    return (
        <img
            src="images/icons/back-button.png"
            className="backButton"
            onClick={() => handleClick()}
            alt="Back"
        >
        </img>
    )
}

export default BackButton;