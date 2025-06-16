import React from 'react';
import './button.css';

export const Button = ({text, buttonType}) => {
    return (
        <li className={'btn-cont'}>
            <button className={`btn-${buttonType}`}>
                {buttonType === "underline" ? text.toUpperCase() : text}
            </button>
        </li>
    );
};