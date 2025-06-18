import React from 'react';
import './theme_2.css';

export const TextLink = ({ name, onClick }) => {
    return (
        <li>
            <button className={`nav-link`} aria-label={name} onClick={onClick}>

                <span>{name}</span>
            </button>
        </li>
    );
};
