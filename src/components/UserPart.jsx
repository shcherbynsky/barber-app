import React from "react"
import { useSelector } from "react-redux"
import About from "./about/About"
import Contacts from "./about/Contacts"
import Booking from "./booking/Booking"
import FooterMenu from "./FooterMenu"
import Header from "./Header"
import Profile from "./profile/Profile"



const UserPart = () => {

    const {activeFooterMenu} = useSelector(state => state.footerMenu)
    return (
        <>
            <Header />
            <div className="main">
                {activeFooterMenu === 0 && <Booking />}
                {activeFooterMenu === 1 && <Profile />}
                {activeFooterMenu === 2 && <About />}
                {activeFooterMenu === 4 && <Contacts />}
            </div>
            <FooterMenu />
        </>

    )
}

export default UserPart