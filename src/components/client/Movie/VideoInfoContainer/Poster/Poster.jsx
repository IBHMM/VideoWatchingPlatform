import React from 'react';
import { FaThumbsUp, FaShare, FaPlus } from 'react-icons/fa'; 

export function Poster({ movie }) {

    return (
        <div className="flex items-center flex-col justify-between p-4 text-white rounded-lg shadow-lg">
            <img src={movie.thumbnailUrl} alt={movie.name} className="rounded-xl mb-4 w-full" />
            
            <div className="flex justify-between w-full space-x-4">
                <button className="flex items-center justify-center text-[14px] space-x-2 bg-[#24244a] py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors duration-300">
                    <FaThumbsUp className="text-white" />
                    <span>Like</span>
                </button>
                
                <button className="flex items-center justify-center text-[14px] space-x-2 bg-[#24244a] py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors duration-300">
                    <FaShare className="text-white" />
                    <span>Share</span>
                </button>
                
                <button 
                    className="flex items-center justify-center text-[14px] space-x-2 bg-[#24244a] py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors duration-300">
                    <FaPlus className="text-white" />
                    <span>Watchlist</span>
                </button>
            </div>
        </div>
    );
}
