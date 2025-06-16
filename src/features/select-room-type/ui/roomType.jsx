import React, {memo, useRef, useState} from "react";
import './roomType.css';
import {useClickOutside} from "../../../shared/lib/hooks/useClickOutside.js";
import {MenuList, Select} from "../../../shared/ui/index.js";

export const RoomType = () => {
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
        <div ref={menuRef} onClick={toggleOnClick} className={'room_type'}>
            <Select text={'Room'} textInfo={'Select type'} icon={'house'} title={title} drop={drop}/>
            <div className={`menu_container ${drop && "show"}`}>
                <MenuList onSelect={setTitle}/>
            </div>
        </div>
    )
}