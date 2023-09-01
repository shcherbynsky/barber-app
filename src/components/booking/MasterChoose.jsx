import React from "react"
import { TfiAngleLeft } from "react-icons/tfi";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMaster, setChosenMaster } from "../../redux/scheduleSlice"



const MasterChoose = () => {

     

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
        dispatch(setChosenMaster(masterId)) 
    }
    
    const mastersElements = masters.length > 0 ? masters.map((master, index) => {

        return (
            <Link to="/booking/timetable" onClick={() => onMasterClick(index)} key={index} className="masters__item master">
                <div className="master__img">
                    <img src={'http://localhost:5000/' + master.imgUrl} alt="" />
                </div>
                <div className="master__name">{master.name}</div>
            </Link>
        )


    }) : []
    
    
   

    return (

        <div className={isShown ? "masters _active" : "masters"}>
            <div className="masters__title">Будть ласка, оберить майстера</div>
            <div className="masters__items">
                {mastersElements}
            </div>
            <Link to="/booking/service"  className="masters__back-btn back-btn"> <span><TfiAngleLeft /></span>повернутись</Link>
        </div>

    )
}

export default MasterChoose