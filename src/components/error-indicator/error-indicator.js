import React from 'react';
import './error-indicator.css';
import star from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={star} alt='Death Star'/>
            <br/>
            <span className='boom'>BOOM!</span>
            <br/>
            <span>
                something has gone terribly wrong
            </span>
            <br/>
            <span>
                (but we already sent droid to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator;