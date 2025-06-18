import React from "react";
import './error.css';

export const ErrorAuth = ({ message }) => {
    return(
        <div className={'error-container'}>
            <span className={'error'}>{message}</span>
        </div>
    )
}