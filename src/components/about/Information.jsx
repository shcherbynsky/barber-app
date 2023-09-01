import React from "react"
import Slider from "./Slider"

// register Swiper custom elements

const Information = () => {

    return (
        <div className="information">
            <div className="information__slider slider swiper">

                <Slider />
                {/* <swiper-container className="slider__wrapper swiper-container">
                    <swiper-slide className="slider__slide swiper-slide">
                        <img src="img/slider/1.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide className="slider__slide swiper-slide">
                        <img src="img/slider/2.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide className="slider__slide swiper-slide">
                        <img src="img/slider/3.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide className="slider__slide swiper-slide">
                        <img src="img/slider/4.jpg" alt="" />
                    </swiper-slide>
                </swiper-container> */}
            </div>
            <div className="information__content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt quo accusantium et nisi, laborum ducimus explicabo voluptatum, unde nam nihil eum assumenda laudantium expedita odio consectetur, quisquam ipsum itaque?
                Aliquam aut, ut maiores ullam ipsam minima natus facilis facere consequuntur ratione! Nesciunt nemo molestiae minima repellat provident vitae similique, laborum quasi, nulla a tempora, officiis laudantium. Natus, pariatur beatae?
                Iste ducimus sequi sunt quasi vero possimus ipsam optio architecto quisquam? Mollitia at totam fugit similique nulla fuga quia, in quidem placeat doloribus reprehenderit blanditiis. Dicta cupiditate eum magni est.</p>
            </div>
        </div>
    )
}

export default Information