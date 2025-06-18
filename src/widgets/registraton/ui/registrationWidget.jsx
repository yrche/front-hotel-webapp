import React from "react";
import './registrationWidget.css';
import {Icon} from "../../../shared/ui/index.js";
import {RegistrationForm} from "../../../features/registration/index.js";
import {Link} from "react-router-dom";

export const RegistrationWidget = () => {
    return(
        <div className={'login-wrapper'}>
            <div className={'info-container'}>
                <div className={'icon-wrapper'}>
                    <Icon icon={'profile'} color={'black'} size={'m'} type={'regular'}/>
                </div>
                <div className={'text-block'}>
                    <span className={'text-main'}>{'Create account'}</span>
                    <div className={'text-cont'}>
                    <span className={'text-second'}>{'Already have account?'}</span>
                        <Link to={'/sign-in'} className={'navigate'}>
                            <a className={'text-third'}>{'Sign in'}</a>
                        </Link>
                    </div>
                </div>
            </div>
            <RegistrationForm/>
        </div>
    )
}