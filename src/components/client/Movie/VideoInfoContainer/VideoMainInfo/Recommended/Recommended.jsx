import React, { useState } from "react";
import './Recommended.css';
import { Videos } from "../../../../../../constants/client.constants";

function HoverContent({ movie, isVisible }) {
  return (
    <div className={`flex flex-col items-center justify-between absolute text-white bg-[#191c32] p-4 z-50 rounded-lg w-full h-full text-[12px] ${!isVisible ? 'hover-enter' : 'hover-leave'}`}>
      <h3 className="text-lg font-bold">{movie.name}</h3>
      <div className="flex items-center justify-center space-x-2 text-sm">
        <span>{movie.year}</span>
        <span>•</span>
        <span>{movie.duration}</span>
      </div>
      <p className="text-center mt-2">{movie.description}</p>
      <button className="px-3 py-2 border border-white hover:bg-violet-400 mt-2">
        + Add To My Wishlist
      </button>
    </div>
  );
}

export function Recommended({ movie }) {
  const recommendedMovies = Videos.filter(
    (video) =>
      (video.genre === movie.genre || video.actors.includes(movie.actors[0])) &&
      movie.id !== video.id
  );

  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  return (
    <div className="w-full text-white p-2 flex flex-col items-start justify-start">
      <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
      <div className="flex overflow-x-auto space-x-4">
        {recommendedMovies.map((video) => (
          <div
            key={video.id}
            className="relative flex flex-col items-start w-[200px] group"
            onMouseEnter={() => setHoveredMovieId(video.id)}
            onMouseLeave={() => setHoveredMovieId(null)}
          >
            <img
              src={video.poster}
              alt={video.name}
              className="rounded-lg mb-2 object-cover"
              style={{ height: "300px", width: "100%", objectFit: "cover" }}
            />
            <h3 className="text-lg font-semibold">{video.name}</h3>
            {hoveredMovieId === video.id && (
              <HoverContent movie={video} isVisible={hoveredMovieId === video.id} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
