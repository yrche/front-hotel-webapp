import React, {useRef, useState} from "react";
import './checkDate.css';
import {useClickOutside} from "../../../shared/lib/hooks/useClickOutside.js";
import {Calendar, Select} from "../../../shared/ui/index.js";

export const CheckDate = ({ icon, text }) => {
    const [title, setTitle] = useState('');
    const menuRef = useRef(null);
    const [drop, setDrop] = useState(false);
    useClickOutside(menuRef, () => {
        if (drop) setDrop(false);
    })

    const toggleOnClick = () => {
        setDrop((prev) => {
            return !prev;
        })
    }

    return (
        <div ref={menuRef} onClick={toggleOnClick} className={'check_date'}>
            <Select text={text} textInfo={'Select date'} icon={icon} title={title} drop={drop}/>
            <div className={'menu_mask'}>
                <div className={`calendar_wrapper ${drop && "show"}`}>
                    <Calendar onSelect={setTitle} drop={setDrop}/>
                </div>
            </div>
        </div>
    )
}