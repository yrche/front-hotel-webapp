import React, {useState} from "react";
import './registrationForm.css';
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../../shared/model/index.js";
import {clearError} from "../../../shared/model/index.js";
import {Button, ErrorAuth} from "../../../shared/ui/index.js";
import {Validation} from "../../../shared/lib/validation/validation.jsx";
import {useNavigate} from "react-router-dom";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)
    let navigate = useNavigate();
    const [user_name, setUser_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableUserName, setDisableUserName] = useState(true);
    const [disableEmail, setDisableEmail] = useState(true);
    const [disablePassword, setDisablePassword] = useState(true);

    const updateUserName = (e) => {
        dispatch(clearError());
        const user_name = e.target.value;
        setUser_name(user_name)
    }

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

    const signup = (e) => {
        e.preventDefault();
        dispatch(registration({user_name, email, password}))
            .unwrap()
            .then((user) => {
                localStorage.setItem('token', user.accessToken);
                navigate("/");
            })
    }

    return(
        <div className={'form-container'}>
            {auth.error && (
                <ErrorAuth message={auth.error}/>
            )}
            <div className={'form-wrapper'}>
                <Validation type={"username"} placeHolder={"Your name"} onChange={updateUserName} value={user_name} onValidate={(isValid) => {
                    if (isValid) {
                        setDisableUserName(false)
                    } else {
                        setDisableUserName(true)
                    }
                }}/>
                <Validation type={"email"} placeHolder={"Your email"} onChange={updateEmail} value={email} onValidate={(isValid) => {
                    if (isValid) {
                        setDisableEmail(false)
                    } else {
                        setDisableEmail(true)
                    }
                }}/>
                <Validation type={"password"} placeHolder={"Password"} onChange={updatePassword} value={password} onValidate={(isValid) => {
                    if (isValid) {
                        setDisablePassword(false)
                    } else {
                        setDisablePassword(true)
                    }
                }}/>
            </div>
            <div className={'button-wrapper'} onClick={signup}>
                <Button buttonType={'bold'} text={'Sign in'} disabled={disableEmail || disablePassword || disableUserName}/>
            </div>
        </div>
    )
}