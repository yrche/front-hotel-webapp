import React, {useState} from 'react';
import './button.css';

export const Button = ({text, buttonType, disabled}) => {
    return (
        <li className={'btn-cont'}>
            <button disabled={disabled} className={`btn btn-${buttonType} ${disabled && ('disabled')}`}>
                {buttonType === "underline" ? text.toUpperCase() : text}
            </button>
        </li>
    );
};