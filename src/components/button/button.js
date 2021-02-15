import React from 'react';
import './button.css';

const Button = ({toggleRandomPlanet}) => {
    return (
        <button className="btn btn-success"
        onClick={toggleRandomPlanet}>Toggle Random Planet</button>
    )
}

export default Button;