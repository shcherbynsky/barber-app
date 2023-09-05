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
import { useSelector } from "react-redux";

const Booking = () => {
    const { chosenDate, chosenService, chosenMaster, chosenTime } = useSelector(state => state.schedule)
    return (
        <div className="booking">
                {(!chosenDate.length && chosenService < 0 && chosenMaster < 0 && chosenTime.hours < 0) && <DatePicker2 />}
                {(chosenDate.length > 0 && chosenService < 0 && chosenMaster < 0 && chosenTime.hours < 0) && <ServiceChoose />}
                {(chosenDate.length > 0 && chosenService >= 0 && chosenMaster < 0 && chosenTime.hours < 0) && <MasterChoose />}
                {(chosenDate.length > 0 && chosenService >= 0 && chosenMaster >= 0 && chosenTime.hours < 0) && <TimeTable />}
                {(chosenDate.length > 0 && chosenService >= 0 && chosenMaster >= 0 && chosenTime.hours >= 0) && <Confirm />}
        </div >
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