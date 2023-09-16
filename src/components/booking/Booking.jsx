import React from "react"
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { setHeaderValue } from "../../redux/headerSlice"
import DatePicker from "./DatePicker"
import MasterChoose from "./MasterChoose";
import TimeTable from "./TimeTable";
import ServiceChoose from "./ServiceChoose";
import Confirm from "./Confirm";
import DatePicker2 from "./DatePicker2";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../Auth/Auth";
import Loader from "../Loader";
import { check } from "../../http/userAPI";
import { setIsAuth, setUser } from "../../redux/userSlice";

const Booking = () => {

    const dispatch = useDispatch()

    const { chosenDate, chosenService, chosenMaster, chosenTime } = useSelector(state => state.schedule)
    const { isAuth } = useSelector(state => state.user)
    // const [isLoading, setIsLoading] = React.useState(true)


    // React.useEffect(() => {
    //     try {
    //         check().then(data => {
    //             if(data) {
    //                 dispatch(setUser(data.id))
    //             dispatch(setIsAuth(true))
    //             }
                
    //         })
    //     } catch (error) {
    //         console.log('error = ', error);
    //     }
    //     setIsLoading(false)
    // }, []);

    // if (isLoading) {
    //     return <Loader />
    // }

    return (
        isAuth ?
            <div className="booking">
                {(!chosenDate.length && chosenService < 0 && chosenMaster < 0 && chosenTime.hours < 0) && <DatePicker2 />}
                {(chosenDate.length > 0 && chosenService < 0 && chosenMaster < 0 && chosenTime.hours < 0) && <ServiceChoose />}
                {(chosenDate.length > 0 && chosenService >= 0 && chosenMaster < 0 && chosenTime.hours < 0) && <MasterChoose />}
                {(chosenDate.length > 0 && chosenService >= 0 && chosenMaster >= 0 && chosenTime.hours < 0) && <TimeTable />}
                {(chosenDate.length > 0 && chosenService >= 0 && chosenMaster >= 0 && chosenTime.hours >= 0) && <Confirm />}
            </div >
            : <Auth />
    )
}
// const Booking = () => {

//     return (
//         <div className="booking">
//             <Routes >
//                 <Route path="/" element={<DatePicker2 />} />
//                 <Route path="service" element={<ServiceChoose />} />
//                 <Route path="master" element={<MasterChoose />} />
//                 <Route path="timetable" element={<TimeTable />} />
//                 <Route path="confirm" element={<Confirm />} />
//             </Routes>
//         </div >
//     ) 
// }

export default Booking