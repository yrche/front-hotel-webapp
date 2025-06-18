import React, {memo} from "react";
import './icon.css';
import sprite from "/sprite.svg";

export const Icon = memo(({ icon, type, size, outline, color }) => {
    return (
        <div className={`icon-${type}`}>
            <svg
                className={`icon-${size} ${!outline ? "bold" : "outline"} ${color}`}>
                <use href={`${sprite}#${icon}`}></use>
            </svg>
        </div>
    )
})