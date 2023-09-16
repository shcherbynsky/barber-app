import React from "react"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import About from "./about/About"
import Contacts from "./about/Contacts"
import Auth from "./Auth/Auth"
import Booking from "./booking/Booking"
import FooterMenu from "./FooterMenu"
import Header from "./Header"
import Main from "./Main"
import Profile from "./profile/Profile"



const UserPart = () => {

    return (
        <>
            <Header />

            <Main />

            <FooterMenu />
        </>
    )
}

export default UserPart