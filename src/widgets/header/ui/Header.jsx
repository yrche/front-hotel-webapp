import React from 'react';
import './header.css';
import {Logo, Button, TextLink, Icon} from "../../../shared/ui/index.js";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../../shared/model/index.js";

export const Header = () => {
    const links = ['Home', 'Suites', 'About', 'Gallery', 'Contact'];
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const auth = useSelector((state) => state.auth)

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
            .unwrap()
            .then(() => {
                localStorage.removeItem('token');
                navigate("/sign-in");
            })
    }

    return (
        <header className={'headerMenu'}>
            <nav className={'navContainer'}>
                <div className={'logo'}>
                    <Logo/>
                </div>
                <div className={'left-container'}>
                    <ul className={'linkGroup'}>
                        {links.map((link, index) => (
                            <TextLink key={index} name={link}/>
                        ))}
                    </ul>
                    <ul className={'login-link'}>
                        {auth.isLoggedIn ? (
                                <TextLink name={'Logout'} onClick={handleLogout}/>
                            ) :
                            (
                                <Link to={'/sign-in'}>
                                    <TextLink name={'Sign in'}/>
                                </Link>
                            )}
                    </ul>
                    {auth.isLoggedIn && (<ul className={'login-link'}>
                        <Icon icon={'profile'} type={'round'} size={'s'} outline={true}/>
                    </ul>)}
                    <ul>
                        <Button text={'Chose suite'} buttonType={'opacity'}/>
                    </ul>
                </div>
            </nav>
        </header>
    );
};