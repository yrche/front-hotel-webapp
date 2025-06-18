import React from "react";
import './notFoundPage.css';
import {Button} from "../../../shared/ui/index.js";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return(
        <div className={'not-found-wrapper'}>
            <div className={'content-container'}>
                <span className={'error-text'}>{'404'}</span>
                <div className={'apologize-container'}>
                    <h3 className={'bold-text'}>{'Whoops!'}</h3>
                    <p className={'regular-text'}>{'We couldn’t find the page you were looking for'}</p>
                </div>
                <Link to={'/'}>
                    <Button text={'Return Home'} buttonType={'regular-black'}/>
                </Link>
            </div>
        </div>
    )
}