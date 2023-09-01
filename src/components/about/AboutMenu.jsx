import React from "react"


const AboutMenu = () => {


    const menuItems = ['Інформація', 'Відгуки', 'Контакти']

    const [activeMenuItem, setActiveMenuItem] = React.useState(0)

    const menuElements = menuItems.map((item, index) => {
        return (
            <li key={index} className="about-menu__item">
                <button onClick={()=> setActiveMenuItem(index)} className={activeMenuItem === index ? 'about-menu__btn _active' : 'about-menu__btn'}>{item}</button>
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