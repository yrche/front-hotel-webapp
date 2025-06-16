import React from 'react';
import {Header} from "../../../widgets/header/index.js";
import './home.css';
import {HeroSection} from "../../../widgets/hero/index.js";
import {About} from "../../../widgets/about/index.js";

export const Home = () => {
    return (
        <div className={'home'}>
            <div className={'section-container'}>
                <div className={'wrapper'}>
                    <div className={'home-container'}>
                        <Header/>
                        <HeroSection/>
                    </div>
                </div>
            </div>
            <About/>
        </div>
    );
};