import React from "react";
import './icon.css';
import sprite from "/sprite.svg";

export const Icon = ({ icon, type, size, outline }) => {
    return (
        <div className={`icon-${type}`}>
            <svg
                className={`icon-${size} ${!outline ? "bold" : "outline"}`}>
                <use href={`${sprite}#${icon}`}></use>
            </svg>
        </div>
    )
}