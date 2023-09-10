import React from "react"
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookedDate, setChosenMaster, setChosenTime } from "../../redux/scheduleSlice"


const TimeTable = () => {


    const [pickedTime, setPickedTime] = React.useState({hours:-1, minutes:-1})
    const [activeTimeItem, setActiveTimeItem] = React.useState(-1)
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


    const onTimeClick = (hours, minutes, index) => {

        setPickedTime({hours, minutes})
        setActiveTimeItem(index)
        
    }

    const onClickNextBtn = () => {
        const hoursItem = parseInt(pickedTime.hours < 10 ? '0' + pickedTime.hours : pickedTime.hours) 
        const minutesItem = parseInt(pickedTime.minutes < 10 ? '0' + pickedTime.minutes : pickedTime.minutes) 
        dispatch(setChosenTime({ hoursItem, minutesItem }))
    }
    const onBackClick = () => {
        dispatch(setChosenMaster(-1))
    }

    const timeElements = timeTable.map((item, index) => {
        const findItem = busyHoursArray.find(el => el.hours === item.hours && el.minutes === item.minutes) || notAvailableHoursArray.find(el => el.hours === item.hours && el.minutes === item.minutes)
        return (
            <div
                onClick={() => onTimeClick(item.hours, item.minutes, index)}
                key={index}
                className={"timetable__item" + (findItem ? " _blocked" : "") + (activeTimeItem === index ? " _active" : "")}> {item.hours + ' : ' + (item.minutes === 0 ? item.minutes + '0' : item.minutes)}
            </div>
        )
    })


    return (
        <div className="timetable animated-shift">
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

                <button onClick={onClickNextBtn} className={"timetable__next-btn btn " + (pickedTime.hours < 0 ? "_blocked" : "")} >Далі <span><TfiAngleRight /></span></button>
            </div>
            <button onClick={() => onBackClick()} className="masters__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</button>
        </div>
    )
}

export default TimeTable