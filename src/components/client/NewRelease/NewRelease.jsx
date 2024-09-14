import { NewReleased } from "../../../constants/client.constants"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FaPlay } from 'react-icons/fa'; 

export const NewRelease = () => {

    return (
        <div className='relative flex items-center justify-center w-full mb-[100px] mt-[30px]'>
            <div className='relative flex flex-col items-start justify-start w-[90%] bg-[rgb(0, 3, 28)] gap-[30px]'>
                <h1 className="font-semibold text-[16px] text-white">
                    New Release
                </h1>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    pagination={false}
                    className="w-[110%]"
                    breakpoints={{
                        0:   {slidePreview: 2},
                        300: { slidesPerView: 2},
                        500: { slidesPerView: 2},
                        640: { slidesPerView: 3},
                        768: { slidesPerView: 4},
                        1024: { slidesPerView: 5},
                        1280: { slidesPerView: 6},
                    }}
                >
                    {NewReleased.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

const MovieCard = ({ movie }) => {
    return (
        <div className="text-white group relative">
            <span className='relative flex items-center justify-center'>
                <img src={movie.poster} alt={movie.name} className='w-full h-[90%] object-conver'/>
                
                <div className="flex flex-col gap-[10px] items-start justify-start absolute w-[400px] h-full overflow-y-scroll left-[100%]" style={{zIndex: "100000000", background: "rgb(25, 28, 50)"}}>
                    <div className="flex items-center justify-start gap-[20px]">
                        <img src={'https://streamvid.gavencreative.com/wp-content/themes/streamvid/assets/image/imdb.png'} alt="" />
                        <div className="bg-purple-600 text-white text-[10px] font-semibold px-2 py-1 rounded-md">
                            {
                                movie.imdb
                            }
                        </div>
                    </div>

                    <p className="font-bold text-white text-[18px] hover:text-violet-600 cursor-pointer">{movie.name}</p>

                    <div className="flex items-center justify-start gap-[20px] w-full">
                        <span className="px-[15px] py-[5px] rounded-md bg-gray-700 text-[10px]">
                            Tv-MA
                        </span>
                        <p className="text-sm text-gray-400">{movie.year} • {movie.genre}</p>
                    </div>

                </div>
            </span>
            <div className="mt-3 text-white flex flex-col items-start justify-between gap-[5px]">
                <h2 className="text-lg font-semibold">{movie.name}</h2>
                <p className="text-sm text-gray-400">Action • {movie.genre}</p>
            </div>
        </div>
    );
};
