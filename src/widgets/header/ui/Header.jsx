import React from 'react';
import './header.css';
import {Logo, Button, TextLink} from "../../../shared/ui/index.js";



export const Header = () => {
    const links = ['Home', 'Suites', 'About', 'Gallery', 'Contact'];

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
                        <TextLink name={'Login'}/>
                    </ul>
                    <ul>
                        <Button text={'Chose suite'} buttonType={'opacity'}/>
                    </ul>
                </div>
            </nav>
        </header>
    );
};