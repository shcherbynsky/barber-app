import React from "react"
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { setHeaderValue } from "../../redux/headerSlice"
import DatePicker from "./DatePicker"
import MasterChoose from "./MasterChoose";
import TimeTable from "./TimeTable";
import ServiceChoose from "./ServiceChoose";
import Confirm from "./Confirm";

const Booking = () => {
    
    return (
        <div className="booking">
            <Routes >
                <Route path="/" element={<DatePicker />} />
                <Route path="service" element={<ServiceChoose />} />
                <Route path="master" element={<MasterChoose />} />
                <Route path="timetable" element={<TimeTable />} />
                <Route path="confirm" element={<Confirm />} />
            </Routes>
        </div >
    ) 
}

export default Booking