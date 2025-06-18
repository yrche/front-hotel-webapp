import React from "react";
import './registration.css';
import {RegistrationWidget} from "../../../widgets/registraton/index.js";

export const Registration = () => {
    return (
        <div className={'login-page-container'}>
            <div className={'mask'}>
                <div className={'login-container registration-container'}>
                    <RegistrationWidget/>
                </div>
                <div className={'logo-wrapper'}>
                    <img src={'../../../../public/Logo.png'} alt={''}></img>
                </div>
            </div>
        </div>
    )
}