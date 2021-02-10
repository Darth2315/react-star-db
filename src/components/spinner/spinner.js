import React from 'react';
import './spinner.css';
import spinner from './spinner.svg';

const Spinner = () => {
    return (
        <img src={spinner} alt="spinner" className="spinner"/>
    )
}

export default Spinner;