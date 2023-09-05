import React from "react"
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchService, setChosenDate, setChosenService } from "../../redux/scheduleSlice"



const ServiceChoose = () => {

    const [isShown, setIsShown] = React.useState(false)
    const [pickedService, setPickedService] = React.useState(-1)

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
        setPickedService(serviceId)
        
    }
        const serviceElements = services.map((item, index) => {
            return (
                <div onClick={() => onServiceClick(index)} key={index} className={"servicechoose__item" + (pickedService === index ? " _active" : "")}>{item.title}</div>
            )
        })
        
    const onClickNextBtn = () => {
        dispatch(setChosenService(pickedService)) 
    }
    
    const onBackClick = () => {
        dispatch(setChosenDate(''))
    }

    return (
        <>
        <div className={"servicechoose animated-shift"}>
            <div className="servicechoose__title">Будть ласка, оберить послугу: <span></span></div>
            <div className="servicechoose__items">
                {serviceElements.length === 0 ? <div className="loading"><img src="/img/preLoader.svg" /></div> : serviceElements}
            </div>
            <button onClick={onBackClick} className="servicechoose__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</button>
            <button onClick={onClickNextBtn} className={"servicechoose__next-btn btn " + (pickedService < 0 ? "_blocked" : "")} >Далі <span><TfiAngleRight /></span></button>
        </div>
        </>

    )
    // return (
    //     <>
    //     <div className={!isShown ? "servicechoose" : "servicechoose _active"}>
    //         <div className="servicechoose__title">Будть ласка, оберить послугу: <span></span></div>
    //         <div className="servicechoose__items">
    //             {serviceElements.length === 0 ? <div className="loading"><img src="/img/preLoader.svg" /></div> : serviceElements}
    //         </div>
    //         <button onClick={onBackClick} className="servicechoose__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</button>
    //     <button onClick={onClickNextBtn} className={"servicechoose__next-btn btn " + (pickedService < 0 ? "_blocked" : "")} >Далі <span><TfiAngleRight /></span></button>
    //     </div>
    //     </>

    // )
}

export default ServiceChoose