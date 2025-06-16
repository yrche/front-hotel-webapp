import React from 'react';
import './heroSection.css';
import sprite from "/sprite.svg";
import {BookingPanel} from "../../booking-panel/index.js";

export const HeroSection = ({  }) => {
    return (
        <div className={'heroSection'}>
            <div className={'hero-cont'}>
                <p className={'text'}>{'Your Ultimate Destination for Unimaginable Gataways'}</p>
                <p className={'text2'}>{'Charming spaces, thoughtful details, and warm hospitality—your perfect stay starts here, recharge, and dive into the city\'s energy'}</p>
            </div>
            <BookingPanel/>
        </div>
    );
};