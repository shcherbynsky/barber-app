import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveAboutMenuItem } from "../../redux/headerSlice"


const AboutMenu = () => {

    const menuItems = ['Інформація', 'Відгуки', 'Контакти']
    
    const dispatch = useDispatch()

    let {activeAboutMenuItem} = useSelector(state => state.header)

    const isMounted = React.useRef(false)
    
    React.useEffect(() => {
        if (isMounted.current) {
            sessionStorage.setItem('activeAboutMenuItem', activeAboutMenuItem)
        }
        isMounted.current = true
    }, [activeAboutMenuItem])
    const menuElements = menuItems.map((item, index) => {
        return (
            <li key={index} className="about-menu__item">
                <button onClick={()=> dispatch(setActiveAboutMenuItem(index))} className={activeAboutMenuItem === index ? 'about-menu__btn _active' : 'about-menu__btn'}>{item}</button>
            </li>
        )
    })


    return (
        <div className="about-menu">
            <ul className="about-menu__list">
                {menuElements}
            </ul>
        </div>
    )
}

export default AboutMenu