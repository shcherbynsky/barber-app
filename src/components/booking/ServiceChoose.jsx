import React from "react"
import { TfiAngleLeft } from "react-icons/tfi";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchService, setChosenService } from "../../redux/scheduleSlice"



const ServiceChoose = () => {

    const [isShown, setIsShown] = React.useState(false)

    const {services} = useSelector(state => state.schedule)
    const dispatch = useDispatch()

    React.useEffect( () => {
        dispatch(fetchService()) 
        setTimeout(() => {
            setIsShown(true)
        })

        return () => {
            setIsShown(false)
        }
            
        
    }, [])

    const onServiceClick = (serviceId) => {
        dispatch(setChosenService(serviceId)) 
    }
        const serviceElements = services.map((item, index) => {
            return (
                <Link to="/booking/master" onClick={() => onServiceClick(index)} key={index} className="servicechoose__item">{item.title}</Link>
            )
        })
        
    
        

    return (

        <div className={!isShown ? "servicechoose" : "servicechoose _active"}>
            <div className="servicechoose__title">Будть ласка, оберить послугу: <span></span></div>
            <div className="servicechoose__items">
                {serviceElements.length === 0 ? <div className="loading"><img src="/img/preLoader.svg" /></div> : serviceElements}
            </div>
            <Link to="/booking" className="servicechoose__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</Link>
        </div>

    )
}

export default ServiceChoose