import React, {memo, useState} from "react";
import './fromLogin.css';

export const FormLogin = memo(({ type, onChange, value, error, placeHolder }) => {
    const [isDirty, setDirty] = useState(false);

    return (
        <div className={'input-wrapper'}>
            <div className={'input-container'}>
                <input className={`input-form ${error && isDirty ? 'input-error' : ''}`}
                       type={type}
                       placeholder={placeHolder}
                       value={value}
                       name={type}
                       onChange={onChange}
                       onBlur={() => setDirty(true)}
                ></input>
            </div>
            <span className={'error-input'}>{isDirty ? (error) : ' '}</span>
        </div>
    )
})