import React from "react"
import AboutMenu from "./about/AboutMenu"
import { useSelector } from "react-redux"


const Header = () => {
    
    const {headerValue} = useSelector(state => state.header)
    const {activeFooterMenu} = useSelector(state => state.footerMenu)




    return (
        <div className="header">
            <div className="header__container">
                <img src="img/banner.jpg" alt="" className="header__bg" />
                <div className="header__body">
                    <h3 className="header__category-value">{headerValue}</h3>
                    <h1 className="header__title">MATERIAL</h1>
                </div>
            {activeFooterMenu === 2 && <AboutMenu />}
            </div>
        </div>
    )
}

export default Header