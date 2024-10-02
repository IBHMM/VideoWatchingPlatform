import React from 'react';

const MovieSkeleton = () => {
  return (
    <div className="p-4 space-y-8 text-white w-[90%] mt-10">
      <div className="w-full h-[500px] md:h-[500px] bg-gray-700 animate-pulse rounded-lg"></div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[200px] h-[300px] bg-gray-700 animate-pulse rounded-lg"></div>
        <div className="flex-1 space-y-4">
          <div className="w-2/3 h-8 bg-gray-600 animate-pulse rounded-lg"></div>
          <div className="w-full h-6 bg-gray-600 animate-pulse rounded-lg"></div>
          <div className="w-1/2 h-5 bg-gray-600 animate-pulse rounded-lg"></div>
          <div className="w-full h-5 bg-gray-600 animate-pulse rounded-lg"></div>
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-600 animate-pulse rounded-lg"></div>
            <div className="w-full h-4 bg-gray-600 animate-pulse rounded-lg"></div>
            <div className="w-3/4 h-4 bg-gray-600 animate-pulse rounded-lg"></div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="w-20 h-8 bg-gray-700 animate-pulse rounded-lg"></div>
            <div className="w-20 h-8 bg-gray-700 animate-pulse rounded-lg"></div>
            <div className="w-20 h-8 bg-gray-700 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full h-[150px] bg-gray-700 animate-pulse rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSkeleton;
