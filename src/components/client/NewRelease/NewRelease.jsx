import { NewReleased } from "../../../constants/client.constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useState } from "react";
import './newrelease.css';
import info from '../../../assets/icons/information.png'
import start from '../../../assets/icons/triangle.png'

export const NewRelease = () => {
    const [visibleCard, setVisibleCard] = useState(null);

    return (
        <div className="relative flex items-center justify-center w-full mt-20 max-w-[2000px]">
            <div className="relative flex flex-col items-start justify-center w-[90%] bg-[#00031c] gap-8 rounded-lg">
                <h1 className="font-semibold text-[16px] text-white">
                    New Release
                </h1>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    pagination={false}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        300: { slidesPerView: 2 },
                        500: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                >
                    {NewReleased.map((movie, index) => (
                        <SwiperSlide key={index} className="">
                            <MovieCard 
                                movie={movie} 
                                index={index} 
                                visibleCard={visibleCard} 
                                setVisibleCard={setVisibleCard} 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const MovieCard = ({ movie, index, visibleCard, setVisibleCard }) => {
    const isVisible = visibleCard === index;

    const handleClick = () => {
        setVisibleCard(isVisible ? null : index);
    }

    return (
        <div className="text-white group relative">
            <span 
                className='relative flex items-center justify-center' 
                onMouseEnter={handleClick}
                onMouseLeave={handleClick}
            >
                <img src={movie.poster} alt={movie.name} className='w-full h-[90%] object-cover'/>
                
                {isVisible && (
                    <div 
                        className="flex flex-col gap-[10px] items-start justify-start absolute w-full h-full informationscontainer p-2 top-0 left-0 overflow-y-auto" 
                        style={{ zIndex: "100000000", background: "rgb(25, 28, 50)" }}
                    >
                        <div className="flex items-center justify-start gap-[20px]">
                            <img src={'https://streamvid.gavencreative.com/wp-content/themes/streamvid/assets/image/imdb.png'} alt="" />
                            <div className="bg-purple-600 text-white text-[13px] font-semibold px-4 py-1 rounded-md">
                                {movie.imdb}
                            </div>
                        </div>

                        <p className="font-bold text-white text-[18px] hover:text-violet-600 cursor-pointer">{movie.name}</p>

                        <div className="flex items-center justify-start gap-[20px] w-full">
                            <span className="rounded-md bg-gray-700 text-[10px] w-[100px] h-[29px] flex items-center justify-center">
                                Tv-MA
                            </span>
                            <p className="text-sm text-gray-400 w-full">{movie.year} • {movie.duration}</p>
                        </div>

                        <p className="text-gray-400 text-sm" style={{textAlign: "start"}}>
                            {movie.description}
                        </p>

                        <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[13px] text-gray-300">Language:</span> 
                                <p className="text-[13px]">{movie.language}</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-[13px] text-gray-300">Actors:</span> 
                                <div className="flex items-start justify-start gap-1">
                                {movie.actors.map((actor, index) => (
                                    <p key={index} className="text-[13px] text-white">{actor}</p>
                                ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[13px] text-gray-300">Crew:</span> 
                                <div className="flex items-start justify-start gap-1">
                                {movie.crew.map((crewMember, index) => (
                                    <p key={index} className="text-[13px] text-white">{crewMember}</p>
                                ))}
                                </div>
                            </div>

                            <div className="flex items-start justify-start gap-2">
                                <div className="flex items-center justify-start gap-1">
                                    <div className="w-[40px] h-[40px] rounded-[50%] bg-violet-600 flex items-center justify-center">
                                        <img src={start} alt="" className="w-[10px] h-[10px]" style={{rotate: "90deg"}}/>
                                    </div>
                                    <p className="text-[13px] text-gray-300">
                                        Trailer
                                    </p>
                                </div>
                                <div className="flex items-center justify-start gap-1">
                                    <div className="w-[40px] h-[40px] rounded-[50%] bg-violet-600 flex items-center justify-center">
                                        <img src={info} alt="" className="w-[15px]"/>
                                    </div>
                                    <p className="text-[13px] text-gray-300">
                                        Details
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </span>
            <div className="mt-3 text-white flex flex-col items-start justify-between gap-[5px]">
                <h2 className="text-lg font-semibold">{movie.name}</h2>
                <p className="text-sm text-gray-400">Action • {movie.genre}</p>
            </div>
        </div>
    );
};

export default MovieCard;