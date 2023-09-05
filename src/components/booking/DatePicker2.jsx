import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { setChosenDate } from "../../redux/scheduleSlice";

const DatePicker2 = () => {
    // const { chosenDate} = useSelector(state => state.schedule)
    const dispatch = useDispatch()



    const monthNames = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
    ]

    const days = [
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб',
        'нд'
    ]

    let currentDate = new Date()
    let date
    // const setDate = (year, month, day) => {
    //     currentDate = new Date(year, month - 1, day)
    // }
    // setDate(2023, 10, 17)

    const getDayNumber = () => {
        let dayNumber = date.getDay()
        if (dayNumber === 0) {
            dayNumber = 7
        }
        return dayNumber

    }

    const [activeDate, setActiveDate] = React.useState(-1)
    const [thisMonth, setThisMonth] = React.useState(currentDate.getMonth())
    const [thisYear, setThisYear] = React.useState(currentDate.getFullYear())

    const [pickedDate, setPickedDate] = React.useState('')

    // --------------thisMonthDays

    let thisMonthDays = []

    date = new Date(thisYear, thisMonth, 1)
    while (date.getMonth() === thisMonth) {
        thisMonthDays.push({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() })
        date.setDate(date.getDate() + 1)
    }


    // --------------prevMonthDays

    let prevMonthDays = []

    date = new Date(thisYear, thisMonth, 1)
    const firstDayNumberOfMonth = getDayNumber()
    date.setDate(0)
    for (let i = 0; i < firstDayNumberOfMonth - 1; i++) {
        prevMonthDays.push({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() })
        date.setDate(date.getDate() - 1)
    }
    prevMonthDays.reverse()



    // // // --------------nextMonthDays

    let nextMonthDays = []
    date = new Date(thisYear, thisMonth + 1, 1)
    const nextMonthDaysNumber = 7 * 6 - prevMonthDays.length - thisMonthDays.length
    for (let i = 0; i < nextMonthDaysNumber; i++) {
        nextMonthDays.push({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() })
        date.setDate(date.getDate() + 1)
    }






    const onDateClick = (year, month, day, index) => {
        setActiveDate(index)
        const yearItem = year
        const monthItem = month < 10 ? '0' + (month + 1) : month + 1
        const dayItem = day < 10 ? '0' + day : day
        const date = yearItem + '-' + monthItem + '-' + dayItem
        setPickedDate(date)
    }


    const allDays = [...prevMonthDays, ...thisMonthDays, ...nextMonthDays]



    const daysElements = allDays.map((item, index) => {
        return (

            item.year ?
                <div key={index}
                    onClick={() => onDateClick(item.year, item.month, item.day, index)}
                    className={(
                        item.month < currentDate.getMonth()
                            || item.month < thisMonth
                            || (item.month === currentDate.getMonth() && item.day < currentDate.getDate())
                            || item.month > currentDate.getMonth() && item.day > currentDate.getDate() - 1
                            || item.month > thisMonth
                            ? "datepicker__item _blocked"
                            :
                            (
                                "datepicker__item "
                                + (item.month === currentDate.getMonth() && currentDate.getDate() === item.day ? "_this-day " : "")
                                + (index === activeDate ? "_active" : "")
                            )



                    )}>

                    {item.day}
                </div>
                :
                <div key={index}></div>
        )
    })


    const dayNames = days.map((day, index) => <div key={index} className="datepicker__day">{day}</div>)

    const onClickNextMonthBtn = () => {
        setThisMonth(thisMonth + 1)
    }
    const onClickPrevMonthBtn = () => {
        setThisMonth(thisMonth - 1)
    }

    const onClickNextBtn = () => {
        dispatch(setChosenDate(pickedDate))
    }

    return (
        <>

            <div className="datepicker animated">
                <div className="datepicker__header">
                    <button onClick={onClickPrevMonthBtn} className={currentDate.getMonth() === thisMonth ? "datepicker__btn datepicker__btn-prev _blocked" : "datepicker__btn datepicker__btn-prev"}><TfiAngleLeft /></button>
                    <div className="datepicker__title">{monthNames[thisMonth]} {thisYear}</div>
                    <button onClick={onClickNextMonthBtn} className={currentDate.getMonth() + 1 === thisMonth ? "datepicker__btn datepicker__btn-next _blocked" : "datepicker__btn datepicker__btn-next"}><TfiAngleRight /></button>

                </div>
                <div className="datepicker__days">
                    {dayNames}
                </div>
                <div className="datepicker__body">
                    {daysElements}
                </div>
                <button onClick={onClickNextBtn} className={"datepicker__next-btn btn " + (!pickedDate.length ? "_blocked" : "")} >Далі <span><TfiAngleRight /></span></button>
            </div>

        </>
    )
}

export default DatePicker2