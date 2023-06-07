import React from 'react';
import './BackButton.css';

class BackButton extends React.Component {
    handleClick() {
        window.history.back();
    }

    render() {
        return (
            <img
                src="images/icons/back-button.png"
                className="backButton"
                onClick={() => this.handleClick()} 
                alt="Back"
            >
            </img>
        )
    } 
}

export default BackButton;