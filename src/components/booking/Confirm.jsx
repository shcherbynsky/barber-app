import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom'
import { booking, fetchMaster, fetchService, setServices, setChosenTime, setIsBookingSuccessful, setChosenDate, setChosenMaster, setChosenService } from "../../redux/scheduleSlice"
import Loader from "../Loader";



const Confirm = () => {

    const { chosenDate, chosenService, chosenMaster, chosenTime, masters, services, isBookingSuccessful, isLoading } = useSelector(state => state.schedule)
    const { userInfo } = useSelector(state => state.user)
    const dispatch = useDispatch()




    const onConfirmClick = () => {
        const time = `${chosenTime.hours}:${chosenTime.minutes}`
        const userId = userInfo.id
        const serviceId = chosenService + 1
        const masterId = chosenMaster + 1
        // const hours = +chosenTime.hours
        // const minutes = +chosenTime.minutes
        const duration = services[chosenService].duration
        dispatch(booking({ date: chosenDate, time, serviceId, userId, duration, masterId }))
    }

    const onBackClick = () => {
        dispatch(setChosenTime({ hoursItem: -1, minutesItem: -1 }))
    }
    
    const onCloseBtnClick = () => {
        dispatch(setIsBookingSuccessful(false))
        dispatch(setChosenTime({ hoursItem: -1, minutesItem: -1 }))
        dispatch(setChosenService(-1))
        dispatch(setChosenDate(''))
        dispatch(setChosenMaster(-1))    
    }

    if (isLoading) {
        return <Loader />
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
            {isBookingSuccessful &&
                <div className="confirm__popup confirm-popup popup animated">
                    <div className="confirm-popup__body popup__body">
                        <p className="confirm-popup__text">
                            Вітаємо! Ви записани!!
                        </p>
                        <button onClick={onCloseBtnClick} className="confirm-popup__btn btn">Закрити</button>
                    </div>
                </div>}
        </div>

    )
}

export default Confirm