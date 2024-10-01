import React, { useEffect, useState } from "react";
import './Recommended.css';
import { useFilterVideosMutation, useWatchlistMutation } from "../../../../../../redux/api/client/movie";
import { Loader } from "../../../../Layout/Animation/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../../../redux/slices/user";

function HoverContent({ movie, handleWatchList, isInWatchList }) {
  return (
    <div className={`flex flex-col items-center justify-between absolute text-white bg-[#191c32] p-4 z-50 rounded-lg w-full h-full text-[12px] hover-enter`}>
      <h3 className="text-lg font-bold">{movie.name}</h3>
      <div className="flex items-center justify-center space-x-2 text-sm">
        <span>{movie.year}</span>
        <span>•</span>
        <span>{movie.duration} min</span>
      </div>
      <p className="text-center mt-2">{movie.description}</p>
      <button className={`px-3 py-2 hover:bg-violet-900 mt-2 rounded-lg ${isInWatchList ? "bg-violet-900" : ""}`} onClick={handleWatchList}>
        + Add To My Wishlist
      </button>
    </div>
  );
}

export function Recommended({ movie }) {
  const user = useSelector(state => state.user.user);
  const [filterVideos, { data: recommendedVideos, isLoading: isLoadingRecommended, isError: isErrorRecommended }] = useFilterVideosMutation();
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
 
  const [ToggleWatchList, {isLoading: WisLoading, isSuccess: WisSuccess, isError: WisError, data: Wdata}] = useWatchlistMutation();
  const [isInWatchList, setIsInWatchList] = useState(user?.watchList.some(m => m == m?.id))
  const dispatch = useDispatch();

  const handleWatchList = () => {
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

  useEffect(() => {
    if (movie.genre && movie.quality) {
      filterVideos({
        quality: movie.quality,
      });
    }
  }, [movie.genre, movie.quality, filterVideos]);

  return (
    <div className="w-full text-white p-2 flex flex-col items-start justify-start">
      <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
      {isLoadingRecommended ? (
        <Loader />
      ) : isErrorRecommended ? (
        <p>Error loading recommended videos.</p>
      ) : (
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          {
            recommendedVideos?.slice(0, 3).map((video) => (
              <div
                key={video.id} 
                className="relative flex flex-col items-start group justify-start"
                onMouseEnter={() => setHoveredMovieId(video.id)}
                onMouseLeave={() => setHoveredMovieId(null)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.name}
                  className="rounded-lg mb-2 object-cover min-w-[100px]"
                  style={{ height: "300px", width: "100%", objectFit: "cover" }}
                />
                <h3 className="text-lg font-semibold">{video.name}</h3>
                {hoveredMovieId === video.id && (
                  <HoverContent movie={video} handleWatchList={handleWatchList} isInWatchList={isInWatchList} />
                )}
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}
