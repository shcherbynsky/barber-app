import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom'
import { booking, fetchMaster, fetchService, setServices, setChosenTime } from "../../redux/scheduleSlice"



const Confirm = () => {

    const { chosenDate, chosenService, chosenMaster, chosenTime, masters, services } = useSelector(state => state.schedule)
    const dispatch = useDispatch()



    const onConfirmClick = () => {
        const serviceId = chosenService + 1
        const masterId = chosenMaster + 1
        const hours = chosenTime.hours
        const minutes = chosenTime.minutes
        const duration = services[chosenService].duration
        // console.log({chosenDate, hours, minutes, serviceId, duration, masterId});
        dispatch(booking({ date: chosenDate, hours, minutes, serviceId, duration, masterId }))
    }

    const onBackClick = () => {
        dispatch(setChosenTime({ hoursItem : -1, minutesItem: -1 }))
    }

    return (
        <div className="confirm animated-shift">
            <div className="confirm__body">
                <div className="confirm__title">Ви хочете зробити запис, будь ласка, перевірте данні:</div>
                <div className="confirm__content">
                    <span>Дата: {chosenDate}</span>
                    <span>Час: {chosenTime.hours} : {chosenTime.minutes}</span>
                    <span>Послуга: {services[chosenService].title}</span>
                    <span>Вартість: {services[chosenService].price}</span>
                    <span>Майстер: {masters[chosenMaster].name}</span>
                </div>
                <div className="confirm__buttons">
                    {/* <Link onClick={() => dispatch(setServices([]))} to='/booking' className="confirm__btn btn">Повернутись</Link> */}
                </div>


            </div>
            <div onClick={() => onConfirmClick()} className="confirm__btn btn">Записатись</div>
            <button onClick={() => onBackClick()} className="servicechoose__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</button>
        </div>
    )
}

export default Confirm