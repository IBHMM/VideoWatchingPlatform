import { Categories as categories } from "../../../constants/client.constants";
import { Swiper, SwiperSlide } from "swiper/react";

export const Categories = () => {


    return (
        <div className="relative flex items-center justify-center w-full my-10 max-w-[2000px]">
            <div className="relative flex flex-col items-start justify-center w-[90%] bg-[#00031c] gap-8 rounded-lg">
                <h1 className="font-semibold text-lg text-white mt-4">Editor's Pick</h1>
                
                <Swiper
                    spaceBetween={10}
                    freeMode={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
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
                        },
                        1280: {
                            slidesPerView: 8,
                            spaceBetween: 40,
                        }
                    }}
                >
                    {
                        categories.map((item, index) => (
                            <SwiperSlide key={index} className="hover:bg-violet-600 rounded-xl p-0 m-0">
                                <div className="flex items-center justify-center min-w-full h-[33px] rounded-xl" 
                                     style={{background : "rgba(255, 255, 255, 0.1)", fontSize : "15px"}}>
                                    <p className="text-white">{item.value}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
