import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyBookings } from '../../redux/userSlice'
import Auth from '../Auth/Auth'
import Loader from '../Loader'

const MyBookings = () => {

    const dispatch = useDispatch()
    const { userInfo, isAuth, isLoading, bookingData } = useSelector(state => state.user)

    const monthItems = [
        'Січня',
        'Лютого',
        'Березня',
        'Квітня',
        'Травня',
        'Червня',
        'Липня',
        'Серпня',
        'Вересня',
        'Жовтня',
        'Листопада',
        'Грудня']

    React.useEffect(() => {
        dispatch(fetchMyBookings(userInfo.id))
    }, [userInfo.id])

    const bookingElements = bookingData ? bookingData.map((item, index) => {
        const year = parseInt(item.date.split('-')[0]) 
        const month = parseInt(item.date.split('-')[1])
        const day = parseInt(item.date.split('-')[2])
        const hours = parseInt(item.time.split(':')[0])
        const minutes = item.time.split(':')[1]
        
        return (
            <div key={index} className="mybookings__item item-mybookings">
                    <div className="item-mybookings__item">
                        <div className="item-mybookings__title">Дата:</div>
                        <div className="item-mybookings__info">{day + ' ' + monthItems[month] + ' ' + year}</div>
                    </div>
                    <div className="item-mybookings__item">
                        <div className="item-mybookings__title">Час:</div>
                        <div className="item-mybookings__info">{hours + ':' + minutes}</div>
                    </div>
                    <div className="item-mybookings__item">
                        <div className="item-mybookings__title">Майстер:</div>
                        <div className="item-mybookings__info">{item.master.name}</div>
                    </div>
                    <div className="item-mybookings__item">
                        <div className="item-mybookings__title">Послуга:</div>
                        <div className="item-mybookings__info">{item.service.title}</div>
                    </div>
                    <div className="item-mybookings__item">
                        <div className="item-mybookings__title">Вартість:</div>
                        <div className="item-mybookings__info">{item.service.price} грн.</div>
                    </div>
                </div>
        )
    }) : []

    if (!isAuth) {
        return <Auth />
    }

    if (isLoading) {
        return <Loader />
    }

    return ( bookingData &&
        <div className='mybookings'>
            <h3 className="mybookings__title">Мої записи</h3>
            <div className="mybookings__body">
                {bookingElements}
            </div>
        </div>
    )
}

export default MyBookings