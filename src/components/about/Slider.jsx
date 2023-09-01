import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade } from 'swiper/modules';




const Slider = () => {
    return (
        <>
          <Swiper
            effect={'fade'}
            modules={[EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="img/slider/5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/slider/6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/slider/7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/slider/8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/slider/9.jpg" />
            </SwiperSlide>
          </Swiper>
        </>
      );
}

export default Slider