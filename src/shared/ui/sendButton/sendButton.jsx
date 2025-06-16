import React, {useEffect, useRef, useState} from 'react';
import './sendButton.css';
import sprite from "/sprite.svg";

export const SendButton = ({ name }) => {
    const ref = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timer;
        if (isAnimating && ref.current) {
            timer = setTimeout(() => {
                ref.current.classList.remove('active');
                setIsAnimating(false);
            }, 2500);
        }


        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isAnimating]);

    const addActiveClass = () => {
        if (ref.current && !isAnimating) {
            setIsAnimating(true);
            ref.current.classList.add('active');
        }
    };


    return (
        <li className={'btn-send-cont'}>
            <button className={'btn-send'} onClick={addActiveClass} ref={ref}>
                <svg
                    className="send-button">
                    <use href={`${sprite}#send`}></use>
                </svg>
                <span>{name}</span>
            </button>
        </li>
    );
};