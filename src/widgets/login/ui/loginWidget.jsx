import React from "react";
import './loginWidget.css';
import {LoginForm} from "../../../features/login/index.js";
import {Icon} from "../../../shared/ui/index.js";
import {Link} from "react-router-dom";

export const LoginWidget = () => {
    return(
        <div className={'login-wrapper'}>
            <div className={'info-container'}>
                <div className={'icon-wrapper'}>
                    <Icon icon={'sign-in'} color={'black'} size={'m'} type={'regular'}/>
                </div>
                <div className={'text-block'}>
                    <span className={'text-main'}>{'Sign in with email'}</span>
                    <div className={'text-cont'}>
                    <span className={'text-second'}>{'First time here?'}</span>
                        <Link to={'/sign-up'} className={'navigate'}>
                            <a className={'text-third'}>{'Sign up for free'}</a>
                        </Link>
                    </div>
                </div>
            </div>
            <LoginForm/>
        </div>
)
}