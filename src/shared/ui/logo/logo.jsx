import React from 'react';
import './logo.css';
import sprite from "/sprite.svg";

export const Logo = () => {
    return (
        <li>
            <svg className={'logo'}>
                <use href={`${sprite}#MarinaBaySands-logo`}></use>
            </svg>
        </li>
    );
};