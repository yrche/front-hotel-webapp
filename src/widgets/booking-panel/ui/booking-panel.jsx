import React, {useState} from "react";
import './bookink-panel.css';
import {Button, Divider} from "../../../shared/ui/index.js";
import {RoomType} from "../../../features/select-room-type/index.js";
import {CheckDate} from "../../../features/select-check-date/index.js";

export const BookingPanel = () => {
    const [isExist, setIsExist] = useState(false);
    function checkDuplicate () {
        if (isExist === false) {

        }
        return setIsExist(true);
    }

    return (
        <div className={'wrapper-mask'}>
            <div className={'bookingPanel'}>
                <div className={'selectorGroup'}>
                    <RoomType/>
                    <Divider/>
                    <CheckDate date={setIsExist} icon={'calendar'} text={'Check-in'}/>
                    <Divider/>
                    <CheckDate date={setIsExist} icon={'calendar-2'} text={'Check-out'}/>
                    <Divider/>
                    <RoomType/>
                </div>
                <Button text={'Book Your Stay'} buttonType={'regular'}/>
            </div>
        </div>
    )
}