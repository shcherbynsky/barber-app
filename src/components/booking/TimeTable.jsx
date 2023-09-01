import React from "react"
import { TfiAngleLeft } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setHeaderValue } from "../../redux/headerSlice"
import { fetchBookedDate, fetchData, setChosenTime } from "../../redux/scheduleSlice"
import DatePicker from "./DatePicker"


const TimeTable = () => {

    const dispatch = useDispatch()
    const { startHours, startMinutes, endHours, endMinutes, chosenMaster, chosenDate, busyHours, services, chosenService } = useSelector(state => state.schedule)

    React.useEffect(() => {
        dispatch(fetchBookedDate({ masterId: chosenMaster + 1, date: chosenDate }))
    }, [])

    // building busy hours

    let busyHoursArray = []

    busyHours.forEach(element => {
        let iterationCount = element.duration / 15
        let hours = element.hours
        let minutes = element.minutes

        for (let i = 0; i < iterationCount; i++) {
            busyHoursArray.push({ hours, minutes })
            minutes += 15
            if (minutes === 60) {
                minutes = 0
                hours += 1
            }
        }
    });

    // building non available hours before next booking

    let notAvailableHoursArray = []
    busyHours.forEach(element => {
        let iterationCount = services[chosenService].duration / 15
        let hours = element.hours
        let minutes = element.minutes

        for (let i = 1; i < iterationCount; i++) {
            minutes -= 15
            if (minutes < 0) {
                minutes = 45
                hours -= 1
            }

            notAvailableHoursArray.push({ hours, minutes })

        }
    });

    // building non available hours before closed time

    // let hours = endHours
    // let minutes = endMinutes
    // let iterationCount = services[chosenService].duration / 15

    // for (let i = 1; i < iterationCount; i++) {
    //     minutes -= 15
    //     if (minutes < 0) {
    //         minutes = 45
    //         hours -= 1
    //     }
    //     if (!notAvailableHoursArray.find(obj => obj.hours === hours && obj.minutes === minutes)) {
    //         notAvailableHoursArray.push({hours, minutes})
    //     }

    // }


    // building timetable

    let timeTable = []


    let iterationCount = services[chosenService].duration / 15
    let hours = startHours
    let minutes = startMinutes
    let lastBookingHours = endHours
    let lastBookingMinutes = endMinutes
    // find last time to booking before closed

    for (let i = 1; i <= iterationCount; i++) {
        lastBookingMinutes -= 15
        if (lastBookingMinutes < 0) {
            lastBookingMinutes = 45
            lastBookingHours -= 1
        }
    }


    while (hours <= lastBookingHours) {
        if (hours === lastBookingHours && minutes === lastBookingMinutes + 15) {
            break
        }
        if (!busyHoursArray.find(obj => obj.hours === hours && obj.minutes === minutes) && !notAvailableHoursArray.find(obj => obj.hours === hours && obj.minutes === minutes)) {
            timeTable.push({ hours, minutes })
        }
        minutes += 15
        if (minutes === 60) {
            minutes = 0
            hours++
        }
    }


    const onTimeClick = (hours, minutes) => {
        const hoursItem = hours < 10 ? '0' + hours : hours
        const minutesItem = minutes < 10 ? '0' + minutes : minutes
        dispatch(setChosenTime({ hoursItem, minutesItem }))
    }

    const timeElements = timeTable.map((item, index) => {
        const findItem = busyHoursArray.find(el => el.hours === item.hours && el.minutes === item.minutes) || notAvailableHoursArray.find(el => el.hours === item.hours && el.minutes === item.minutes)
        return (
            <Link to='/booking/confirm'
                onClick={() => onTimeClick(item.hours, item.minutes)}
                key={index}
                className={findItem ? "timetable__item _blocked" : "timetable__item"}> {item.hours + ' : ' + (item.minutes === 0 ? item.minutes + '0' : item.minutes)} </Link>
        )
    })


    return (
        <div className="timetable">
            <div className="timetable__body">
                {
                    timeElements.length ?
                        <>
                            <div className="timetable__title">Будь ласка, оберить зручний час:</div>
                            <div className="timetable__items">
                                {timeElements}
                            </div>
                        </>

                        : <div className="timetable__error">Вибачте, на цей день запису немає <span>😢</span></div>
                }


            </div>
            <Link to="/booking/master" className="masters__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</Link>
        </div>
    )
}

export default TimeTable