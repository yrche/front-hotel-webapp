import React, {memo, useRef, useState} from "react";
import './calendar.css';
import {CalendarData} from "../../scripts/index.js";
import {Icon} from "../icons/icon.jsx";

export const Calendar = memo(({ onSelect, drop }) => {
    const ref = useRef();
    const [month, setMonth] = useState(new Date().getMonth());
    const [nextYear, setNextYear] = useState(0);
    const [selectedDay, setSelectedDay] = useState({});

    let date = {
        year: new Date().getFullYear()+nextYear,
        month: month,
        day: new Date().getDate()
    }

    function plusMonth () {
        if (CalendarData(date).allMonth.indexOf(CalendarData(date).month) === 11) {
            setNextYear(nextYear + 1);
            return setMonth(0);
        }
        return setMonth(month + 1);
    }

    function minusMonth () {
        if (CalendarData(date).allMonth.indexOf(CalendarData(date).month) === 0) {
            setNextYear(nextYear - 1);
            return setMonth(11);
        }
        return setMonth(month - 1);
    }

    return (
        <div className={'calendar_container'}>
            <div onClick={() => drop(false)} ref={ref} className={'top_container'}>
                <div className={'month_container'}>
                    <span className={'month'}>{CalendarData(date).month}</span>
                    <span className={'year'}>{CalendarData(date).year}</span>
                </div>
                <div className={'buttons_container'}>
                    <div className={'to_left'} onClick={minusMonth}>
                        <Icon icon={'arrow-down'} size={'xs'} type={'regular'}/>
                    </div>
                    <div className={'to_right'} onClick={plusMonth}>
                        <Icon icon={'arrow-down'} size={'xs'} type={'regular'}/>
                    </div>
                </div>
            </div>
            <div className={'week_container'}>
                {CalendarData(date).shortWeekDays.map((name, index) => {
                    return (
                        <span
                            className={'week'}
                            key={index}>
                            {name}
                        </span>
                    )
                })}
            </div>
            <div className={'days_container'}>
                {CalendarData(date).prevDays.map((day, index) => {
                    return (
                        <span
                            onClick={() => {
                                return onSelect(Object.values(day).join('.'))
                            }}
                            className={'day prev_month_day'}
                            key={index}>
                                {day.day}
                            </span>
                    )
                })}
                {CalendarData(date).days.map((day, index) => {
                    return (
                        <span
                            onClick={() => {
                                return onSelect(Object.values(day).join('.'))
                            }}
                            className={`day ${CalendarData(date).currentDay === Object.values(day).join('.') ? "current_day" : "day"}`}
                            key={index}>
                                {day.day}
                            </span>
                    )
                })}
                {CalendarData(date).nextDays.map((day, index) => {
                    return (
                        <span
                            onClick={() => {
                                return onSelect(Object.values(day).join('.'))
                            }}
                            className={'day next_month_day'}
                            key={index}>
                                {day.day}
                            </span>
                    )
                })}
            </div>
        </div>
    )
})