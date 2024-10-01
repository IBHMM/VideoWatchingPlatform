import { Swiper, SwiperSlide } from 'swiper/react';
import { TrendingMoviesData } from '../../../constants/client.constants';
import { FaPlay } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useWatchlistMutation } from '../../../redux/api/client/movie';
import { useEffect, useState } from 'react';


export const TrendingMovies = () => {

    const user = useSelector(state => state.user.user);
    const [ToggleWatchList, {isLoading: WisLoading, isSuccess: WisSuccess, isError: WisError, data: Wdata}] = useWatchlistMutation();
    const [isInWatchList, setIsInWatchList] = useState(user?.watchList.some(m => m == m?.id))
    const dispatch = useDispatch();
  
    const handleWatchList = (movie) => {
      ToggleWatchList({videoId: movie.id})
    };
  
    useEffect(() => {
        if (WisSuccess) {
            dispatch(setUser(Wdata));
        }
    }, [WisSuccess]);
  
    useEffect(() => {
      setIsInWatchList(user?.watchList.some(m => m.id == movie.id));
    }, [user]);

    return (
        <div className="relative flex items-center justify-center w-full max-w-[2000px]">
            <div className="relative flex flex-col items-start justify-center w-[90%] bg-[#00031c] gap-8 rounded-lg">
                <h1 className="font-semibold text-[16px] text-white">
                    Trending
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
                    {TrendingMoviesData.map((movie, index) => (
                        <SwiperSlide key={index} className="">
                            <MovieCard 
                                movie={movie} 
                                isInWatchList={isInWatchList}
                                handleWatchList={handleWatchList}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const MovieCard = ({ movie, isInWatchList, handleWatchList }) => {
    return (
        <div className="text-white group relative">
            <span className='relative flex items-center justify-center'>
                <img src={movie.poster} alt={movie.name} className='w-full h-[90%] object-conver'/>
                <FaPlay className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl hover:text-violet-400' />
                <button 
                    onClick={() => handleWatchList(movie)}
                    className={`w-[95%] py-2 px-10 absolute bottom-[5px] bg-[rgba(255,255,255, 0.1)] backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] hover:bg-violet-500 rounded-md ${isInWatchList ? "bg-violet-500" : ""}`}>
                    Add to My List
                </button>
            </span>
            <div className="mt-3 text-white flex flex-col items-start justify-between gap-[5px]">
                <h2 className="text-lg font-semibold">{movie.name}</h2>
                <p className="text-sm text-gray-400 max-[500px]:text-[11px]">Duration: {movie.duration}</p>
                <p className="text-sm text-gray-400 max-[500px]:text-[11px]">{movie.year} • {movie.genre}</p>
            </div>
        </div>
    );
};
