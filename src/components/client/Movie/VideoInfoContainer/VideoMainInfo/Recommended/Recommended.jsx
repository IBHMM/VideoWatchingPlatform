import React, { useEffect, useState } from "react";
import './Recommended.css';
import { useFilterVideosMutation } from "../../../../../../redux/api/client/movie";
import { Loader } from "../../../../Layout/Animation/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';

function HoverContent({ movie }) {
  return (
    <div className={`flex flex-col items-center justify-between absolute text-white bg-[#191c32] p-4 z-50 rounded-lg w-full h-full text-[12px] hover-enter`}>
      <h3 className="text-lg font-bold">{movie.name}</h3>
      <div className="flex items-center justify-center space-x-2 text-sm">
        <span>{movie.year}</span>
        <span>•</span>
        <span>{movie.duration} min</span>
      </div>
      <p className="text-center mt-2">{movie.description}</p>
      <button className="px-3 py-2 hover:bg-violet-900 mt-2 rounded-lg">
        + Add To My Wishlist
      </button>
    </div>
  );
}

export function Recommended({ movie }) {
  const [filterVideos, { data: recommendedVideos, isLoading: isLoadingRecommended, isError: isErrorRecommended }] = useFilterVideosMutation();
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    if (movie.genre && movie.quality) {
      filterVideos({
        quality: movie.quality,
      });
    }
  }, [movie.genre, movie.quality, filterVideos]);

  return (
    <div className="w-full text-white p-2 flex flex-col items-start justify-start max-w-[1300px]">
      <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
      {isLoadingRecommended ? (
        <Loader />
      ) : isErrorRecommended ? (
        <p>Error loading recommended videos.</p>
      ) : (
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 6,
              spaceBetween: 20,
            }
          }}
        >
          {recommendedVideos?.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="relative flex flex-col items-start w-[200px] group"
                onMouseEnter={() => setHoveredMovieId(video.id)}
                onMouseLeave={() => setHoveredMovieId(null)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.name}
                  className="rounded-lg mb-2 object-cover"
                  style={{ height: "300px", width: "100%", objectFit: "cover" }}
                />
                <h3 className="text-lg font-semibold">{video.name}</h3>
                {hoveredMovieId === video.id && (
                  <HoverContent movie={video}/>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
