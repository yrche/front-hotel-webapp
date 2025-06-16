import React from 'react';
import './theme_2.css';
import sprite from '/sprite.svg';

export const TextLink = ({ name }) => {
    return (
        <li>
            <a href={''} className={`nav-link`} aria-label={name}>

                <span>{name}</span>
            </a>
        </li>
    );
};
