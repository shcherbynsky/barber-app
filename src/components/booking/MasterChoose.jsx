import React from "react"
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMaster, setChosenMaster, setChosenService } from "../../redux/scheduleSlice"



const MasterChoose = () => {

     
    const [pickedMaster, setPickedMaster] = React.useState(-1)
    const [isShown, setIsShown] = React.useState(false)

    const { masters } = useSelector(state => state.schedule)
    const dispatch = useDispatch()

    React.useEffect(() => {

        dispatch(fetchMaster())
        setTimeout(() => {
            setIsShown(true)
        })

        return () => {
            setIsShown(false)
        }


    }, [])

    const onMasterClick = (masterId) => {
        setPickedMaster(masterId)
         
    }

    const onClickNextBtn = () => {
        dispatch(setChosenMaster(pickedMaster))
    }
    const onBackClick = () => {
        dispatch(setChosenService(-1))
    }
    
    const mastersElements = masters.length > 0 ? masters.map((master, index) => {
        return (
            <div onClick={() => onMasterClick(index)} key={index} className={"masters__item master" + (pickedMaster === index ? " _active" : "")}>
                <div className="master__img">
                    <img src={master.imgUrl} alt="" />
                </div>
                <div className="master__name">{master.name}</div>
            </div>
        )


    }) : []
    
    
   

    return (
        mastersElements.length === 0 ? <div className="loading"><img src="/img/preLoader.svg" /></div> :
        <div className={"masters animated-shift"}>
            <div className="masters__title">Будть ласка, оберить майстера</div>
            <div className="masters__items">
                {mastersElements}
            </div>
            <button onClick={onBackClick}  className="masters__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</button>
            <button onClick={onClickNextBtn} className={"masters__next-btn btn " + (pickedMaster < 0 ? "_blocked" : "")} >Далі <span><TfiAngleRight /></span></button>
        </div>

    )
}

export default MasterChoose