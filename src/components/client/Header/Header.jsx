import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export function Header() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className='flex items-center justify-center w-[100%] overflow-hidden'>
        <div className='flex flex-col items-center justify-center w-[90%] overflow-hidden'>
            <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={0}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    </>
  );
}
