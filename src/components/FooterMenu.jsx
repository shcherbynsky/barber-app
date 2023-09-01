import React from "react"
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { TfiCalendar, TfiUser, TfiInfoAlt, TfiBook, TfiLocationPin } from "react-icons/tfi";
import { setActiveFooterMenu } from "../redux/footerMenuSlice";
import { setHeaderValue } from "../redux/headerSlice";


const FooterMenu = () => {
    const dispatch = useDispatch()
    const {activeFooterMenu} = useSelector(state => state.footerMenu)

    const MenuItems = [{ logo: <TfiCalendar />, title: 'Запис', link:'/booking' }, { logo: <TfiUser />, title: 'Профіль', link:'/profile' }, { logo: <TfiInfoAlt />, title: 'Про нас', link:'/about' }, { logo: <TfiBook />, title: 'Мої записи', link:'/mybooking' }, { logo: <TfiLocationPin />, title: 'Контакти', link:'/contacts' }]

    
    const onMenuClick = (value, index) => {
        dispatch(setActiveFooterMenu(index))
        dispatch(setHeaderValue(value)) 
    }


    const MenuElements = MenuItems.map((item, index) => {
        return (
            <Link  key={index} to={item.link} onClick={() => onMenuClick(item.title, index)} className={activeFooterMenu === index ? 'footer__item item-footer _active' : 'footer__item item-footer'}>
                <div className="item-footer__logo">{item.logo}</div>
                <div className="item-footer__title">{item.title}</div>
            </Link>
        )
    })

    return (
        <div className="footer">
            <div className="footer__container">
                {MenuElements}
            </div>
        </div>
    )
}

export default FooterMenu