import React, {memo} from "react";
import './select.css';
import {Icon} from "../icons/icon.jsx";

export const Select = ({text, textInfo, icon, title, drop}) => {
    return (
        <div className={'main_container'}>
            <div className={'wrap_container'}>
                <Icon icon={icon} size={'s'} type={'round'} outline={true}/>
                <div className={`text_field`}>
                    <section className={'selector'}>
                        <div className={'selector_wrapper'}>
                            <p className={'text_heading'}>{text}</p>
                            <p className={'text_selector'}>{title === '' ? textInfo : title}</p>
                        </div>
                    </section>
                </div>
                <div
                    className={`arrow_down ${drop ? "rotate" : "normal"}`}>
                    <Icon icon={'arrow-down'} type={'regular'} size={'xs'}/>
                </div>
            </div>
        </div>
    )
}