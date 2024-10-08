import { Swiper, SwiperSlide } from 'swiper/react';
import { PopularGenres as populargenres } from "../../../constants/client.constants";
import 'swiper/css'; 

export function PopularGenres () {

    return (
        <div className="relative flex items-center justify-center w-full my-24 max-w-[2000px]">
            <div className="relative flex flex-col items-start justify-center w-[90%] bg-[#00031c] gap-8 rounded-lg">
                
                <h1 className="font-semibold text-lg text-white mt-4">Popular Genres</h1>

                <Swiper
                    freeMode={true}
                    slidesPerView={6}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        }
                    }}
                >
                    {
                        populargenres.map((genre, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <img src={genre.image} alt={genre.name} className="w-full h-full rounded-md hover:scale-105 transition-all duration-300 " />
                                <div className="absolute text-white text-lg font-semibold px-2 py-1 rounded-b-md">
                                    {genre.name}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                
            </div>
        </div>
    )
}
