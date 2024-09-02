import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';

export function TrendingMovies() {
    return (
        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col  items-start justify-start w-[90%] mt-[30px] gap-[30px]'>
                <h1 className="font-semibold text-[16px] text-white">
                    Trending Movies
                </h1>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="h-full"
                >
                    <SwiperSlide>
                        <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/the_post-288x400.jpg" alt="" className='max-w-[288px]'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/the_post-288x400.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/the_post-288x400.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/the_post-288x400.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/the_post-288x400.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/the_post-288x400.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/the_post-288x400.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
