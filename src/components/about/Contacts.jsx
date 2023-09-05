import React from "react";






const Contacts = () => {



    return (
        <div className="contacts animated">
            <div className="contacts__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.0043306052431!2d30.510137193737933!3d50.459402116376516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4283c75925%3A0xadc9d68be5fff59b!2sMaterial%20Hair%20Salon!5e0!3m2!1sru!2sua!4v1693897375215!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contacts__item">
                <div className="contacts__item-title">Адреса:</div>
                <div className="contacts__item-text">м. Київ, вул. Дегтярна, 7</div>      
            </div>
            <div className="contacts__item">
                <div className="contacts__item-title">Телефон:</div>
                <a href="tel:380963748302" className="contacts__item-text"> +38 096 374 83 02</a>      
            </div>
            <div className="contacts__item">
                <div className="contacts__item-title">Час роботи:</div>
                <div className="contacts__item-text">10:00 - 21:00</div>      
            </div>
        </div>
    )
}

export default Contacts