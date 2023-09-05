import React from "react"
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { TfiCalendar, TfiUser, TfiInfoAlt, TfiBook, TfiLocationPin } from "react-icons/tfi";
import { setActiveFooterMenu } from "../redux/footerMenuSlice";
import { setHeaderValue } from "../redux/headerSlice";
import { setChosenDate, setChosenMaster, setChosenService, setChosenTime } from "../redux/scheduleSlice";


const FooterMenu = () => {

    
    const dispatch = useDispatch()
    let {activeFooterMenu} = useSelector(state => state.footerMenu)

   const isMounted = React.useRef(false)
    
    const menuItems = [{ logo: <TfiCalendar />, title: 'Запис', link:'/booking' }, { logo: <TfiUser />, title: 'Профіль', link:'/profile' }, { logo: <TfiInfoAlt />, title: 'Про нас', link:'/about' }, { logo: <TfiBook />, title: 'Мої записи', link:'/mybooking' }, { logo: <TfiLocationPin />, title: 'Контакти', link:'/contacts' }]
    
    React.useEffect(() => {
        if (isMounted.current) {
            sessionStorage.setItem('activeFooterMenu', activeFooterMenu)
        }
        isMounted.current = true
    }, [activeFooterMenu])
        

    React.useEffect(() => {

        dispatch(setHeaderValue(menuItems[activeFooterMenu].title))
    }, [])

    
    const onMenuClick = (value, index) => {
        if (index === 0) {
            dispatch(setChosenDate(''))
            dispatch(setChosenService(-1))
            dispatch(setChosenMaster(-1))
            dispatch(setChosenTime({ hoursItem : -1, minutesItem: -1 }))   
        }
        dispatch(setActiveFooterMenu(index)) 
        dispatch(setHeaderValue(value)) 
    }
    
    // sessionStorage.setItem('activeFooterMenu', activeFooterMenu)
    
    const MenuElements = menuItems.map((item, index) => {
        return (
            <div  key={index} onClick={() => onMenuClick(item.title, index)} className={activeFooterMenu === index ? 'footer__item item-footer _active' : 'footer__item item-footer'}>
                <div className="item-footer__logo">{item.logo}</div>
                <div className="item-footer__title">{item.title}</div>
            </div>
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