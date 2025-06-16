import React from "react";
import './about.css';
import {Button} from "../../../shared/ui/index.js";

export const About = () => {
    return (
        <div className={'about-container'}>
            <div className={'section-about'}>
                <div className={'text-section'}>
                    <div className={'text-area'}>
                        <h1 className={'heading'}>{'THE LAND OF LUXURY'}</h1>
                        <p className={'description'}>{'Rising above the Singapore skyline, Marina Bay Sands is a landmark destination in the heart of the vibrant city district. Discover a world of endless possibility, where luxury unfolds at every turn.\n' +
                            '\n' +
                            'Watch the evolution of our iconic destination through our new brand campaign film, created in collaboration with renowned director Celine Song.'}</p>
                    </div>
                    <Button text={'Discover more'} buttonType={'underline'}/>
                </div>
                <div className={'photo-container'}>
                    <div className={'photo-section'}>

                    </div>
                </div>
            </div>
        </div>
    )
}