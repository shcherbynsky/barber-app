import React from "react"
import { useSelector } from "react-redux";
import About from './about/About'
import Contacts from './about/Contacts'
import Auth from './Auth/Auth'
import Booking from './booking/Booking'
import MyBookings from "./my-bookings/MyBookings";
import Profile from './profile/Profile'

const Main = () => {

    const { activeFooterMenu } = useSelector(state => state.footerMenu)
  

    

    return (
        <div className="main">
            {activeFooterMenu === 0 && <Booking />}
            
            {activeFooterMenu === 1 && <Profile />}
            
            {activeFooterMenu === 2 && <About />}
            {activeFooterMenu === 3 && <MyBookings />}
            
            {activeFooterMenu === 4 && <Contacts />}
        </div>
    )
}

export default Main