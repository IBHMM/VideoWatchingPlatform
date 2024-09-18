import './MegaSales.css'
import { megasales } from '../../../constants/client.constants'
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export function MegaSales() {
    return (
        <div className="relative flex items-center justify-center w-full p-8 fade-in">
            <div className="relative flex items-center justify-center w-[100%] gap-8 rounded-lg p-6 shadow-lg container max-[900px]:flex-wrap max-[900px]:items-center max-[900px]:justify-center fade-in-up">
                
                <div className='flex flex-col items-center justify-center gap-2 min-h-[100%] min-[900px]:w-[50%] fade-in-up'>
                    <p className='newsales font-bold text-[15px] px-3 py-1 text-white rounded-md'>
                        MEGA SALE
                    </p>
                    <p className='text-white text-[40px] font-bold'>
                        MOVIES & TV
                    </p>
                    <p className='text-white text-[16px]'>
                        Save On Over
                    </p>
                    <p className='text-white text-[20px]'>
                        200 Movies & TV Shows
                    </p>
                </div>
 
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="background-none fade-in-up"
                >
                    {
                        megasales.map((item, index) => (
                            <SwiperSlide key={index} className="flex flex-col items-center justify-center relative min-w-[200px] fade-in-up">
                                <img 
                                    src={item.image} 
                                    alt={`Image of ${item.header}`} 
                                    className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300" 
                                    loading="lazy" 
                                />
                                <div className='flex flex-col items-start justify-center absolute bottom-[30px] left-[30px]'>
                                    <p className="text-white font-bold text-lg">{item.header}</p>
                                    <p className="text-gray-400 text-sm">{item.code}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <img 
                    src={"https://streamvid.gavencreative.com/wp-content/uploads/2023/02/photo-lovely.png"} 
                    alt="Lovely promotional image"
                    loading="lazy"
                    className="max-w-[400px] max-[900px]:w-[250px] fade-in-up"
                />
            </div>
        </div>
    )
}
