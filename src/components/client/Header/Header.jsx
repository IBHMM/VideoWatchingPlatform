import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import { headerCarousel } from '../../../constants/client.constants'; 

export function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='relative flex items-center justify-center w-full mb-[100px] mt-[30px]'>
      <div className='relative flex flex-col items-center justify-center w-[90%] bg-[rgb(0, 3, 28)]'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
          className="mySwiper"
        >
          {headerCarousel.map((slide, index) => (
            <SwiperSlide key={index} className="relative min-h-[300px] ">
              <img src={slide.poster} alt={`Slide ${index}`} className="w-full min-h-[300px]" />

              <div className="absolute bottom-0 left-20 h-full flex flex-col items-center space-y-4 justify-center gap-[20px]">
                <p className={`text-white text-2xl max-[700px]:text-xl font-semibold ${activeIndex === index ? 'animate-slide-in' : ''}`}>
                  Words digital primer
                </p>
                <img
                  src={slide.logo}
                  alt={`Logo ${index}`}
                  className={`logo ${activeIndex === index ? 'animate-slide-in' : ''}`} 
                />
                <button className={`custom-button ${activeIndex === index ? 'animate-slide-in' : ''}`} >
                  Streaming Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
