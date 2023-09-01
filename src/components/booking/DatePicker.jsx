import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { setChosenDate } from "../../redux/scheduleSlice";

const DatePicker = () => {
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


    const [thisMonth, setThisMonth] = React.useState(new Date().getMonth())
    const [thisYear, setThisYear] = React.useState(new Date().getFullYear())

    const todayMonth = new Date().getMonth()

    let date = new Date(thisYear, thisMonth)

    let thisMonthDays = []
    function thisMonthDaysCreator() {
        // --------------thisMonthDays

        date.setDate(1)
        while (date.getMonth() === thisMonth) {
            thisMonthDays.push({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() })
            date.setDate(date.getDate() + 1)
        }
    }
    thisMonthDaysCreator()

    // --------------prevMonthDays
    let prevMonthDays = []
    date = new Date(thisYear, thisMonth)
    date.setDate(1)
    const firstDayNumberOfWeek = date.getDay()
    date.setDate(-firstDayNumberOfWeek + 2)
    const prevMonth = date.getMonth()
    while (date.getMonth() === prevMonth) {
        prevMonthDays.push('')
        date.setDate(date.getDate() + 1)
    }


    // --------------nextMonthDays
    let nextMonthDays = []
    date = new Date(thisYear, thisMonth)
    const nextMonthDaysNumber = 7 * 6 - prevMonthDays.length - thisMonthDays.length
    date.setDate(thisMonthDays.length + 1)
    const nextMonth = date.getMonth()
    for (let i = 0; i < nextMonthDaysNumber; i++) {
        nextMonthDays.push('')
        date.setDate(date.getDate() + 1)
    }



    date = new Date()


    const onDateClick = (year, month, day) => {
        const yearItem = year
        const monthItem = month < 10 ? '0' + (month + 1) : month + 1
        const dayItem = day < 10 ? '0' + day : day
        const date = yearItem + '-' + monthItem + '-' + dayItem
        dispatch(setChosenDate(date))
    }


    const allDays = [...prevMonthDays, ...thisMonthDays, ...nextMonthDays]
    const daysElements = allDays.map((item, index) => {
        return (
            item.year ?
                <Link to="service" key={index}
                    onClick={() => onDateClick(item.year, item.month, item.day)}
                    className={((todayMonth === thisMonth && date.getDate() > item.day) || (todayMonth < thisMonth && date.getDate() <= item.day) ? "datepicker__item _blocked" :
                        (date.getDate() === item.day ? "datepicker__item _this-day" : "datepicker__item"))}>
                    {item.day}
                </Link>
                :
                <div key={index}></div>
        )
    })

    const dayNames = days.map((day, index) => <div key={index} className="datepicker__day">{day}</div>)

    const onClickNextBtn = () => {
        setThisMonth(thisMonth + 1)
    }
    const onClickPrevBtn = () => {
        setThisMonth(thisMonth - 1)
    }

    return (
        <>
            <div className="datepicker">
                <div className="datepicker__header">
                    <button onClick={onClickPrevBtn} className={thisMonth === todayMonth ? "datepicker__btn datepicker__btn-next _blocked" : "datepicker__btn datepicker__btn-next"}><TfiAngleLeft /></button>
                    <div className="datepicker__title">{monthNames[thisMonth]} {thisYear}</div>
                    <button onClick={onClickNextBtn} className={thisMonth > todayMonth ? "datepicker__btn datepicker__btn-next _blocked" : "datepicker__btn datepicker__btn-next"}><TfiAngleRight /></button>

                </div>
                <div className="datepicker__days">
                    {dayNames}
                </div>
                <div className="datepicker__body">
                    {daysElements}
                </div>
            </div>

            {/* {
                serviceElements ?
            <div className={chosenDate.year > 0 ? "servicechoose _active" : "servicechoose"}>
                <div className="servicechoose__title">Будть ласка, оберить послугу<span> на {chosenDate.day}.{chosenDate.month/10 > 1 ? (parseInt(chosenDate.month) +1 ) : '0' + (parseInt(chosenDate.month) +1 )}.{chosenDate.year}</span></div>
                <div className="servicechoose__items">
                    {serviceElements}
                </div>
                <button onClick={() => dispatch(setChosenDate({year:0, month:0, day:0}))} className="servicechoose__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</button>
            </div>
            : <div>Loading</div>
            } */}

            {/* <div className={chosenService >= 0 ? "masters _active" : "masters"}>
                <div className="masters__title">Будть ласка, оберить майстера</div>
                <div className="masters__items">
                    {mastersElements}
                </div>
                <button onClick={() => dispatch(setChosenService(-1))} className="masters__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</button>
            </div> */}

        </>
    )
}

export default DatePicker