import React, {useState} from "react";
import './loginForm.css';
import {useDispatch, useSelector} from "react-redux";
import {clearError, login} from "../model/auth.js";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updateEmail = (e) => {
        dispatch(clearError());
        const email = e.target.value;
        setEmail(email)
    }

    const updatePassword = (e) => {
        dispatch(clearError());
        const password = e.target.value;
        setPassword(password);
    }

    const signIn = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }))
            .unwrap()
            .then((user) => {
                console.log("Login successful", user);
                localStorage.setItem('token', user.accessToken);
            })
    }

    return(
        <div className={'form-container'}>
            <input className={'input'} type={'email'} value={email} name={'email'} content={'email'} onChange={updateEmail}></input>
            <input className={'input'} type={'password'} value={password} name={'password'} onChange={updatePassword}></input>
            <button onClick={signIn}>{'login'}</button>
            {auth.error && (
                <span>{auth.error}</span>
            )}
        </div>
    )
}