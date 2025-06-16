import React, {memo} from "react";
import './menuList.css';

export const MenuList = memo(({ onSelect }) => {
    const roomTypes = ['King', 'Royal', 'Luxury'];
    return (
        <div className={'menu_wrapper'}>
            <div className={'menu'}>
                {roomTypes.map((name, index) => (
                    <span
                        onClick={() => onSelect(name)}
                        className={'nameType'}
                        key={index}>
                        {name}
                    </span>
                ))}
            </div>
        </div>
    )
})