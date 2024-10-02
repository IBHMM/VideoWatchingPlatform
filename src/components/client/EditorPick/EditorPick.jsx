import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { EditorsPick } from '../../../constants/client.constants'; 
import { FaPlayCircle } from 'react-icons/fa'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import videourl from '../../../assets/video/successtion.mp4'; 

export default function EditorPick() {
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="relative flex items-center justify-center w-full my-24 max-w-[2000px]">
      <div className="relative flex flex-col items-start justify-center w-[90%] bg-[#00031c] gap-8 rounded-lg">
        <h1 className="font-semibold text-lg text-white mt-4">Editor's Pick</h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={false}
          className="w-full"
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
          {EditorsPick.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-between h-[300px] w-[300px] bg-[#191c33] rounded-lg overflow-hidden shadow-lg relative hover:cursor-pointer group">
                {item.isLive && (
                  <div className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] font-semibold px-2 py-1 rounded-md" style={{ zIndex: "10000000" }}>
                    LIVE
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white text-xs font-semibold px-2 py-1 rounded-md" style={{ zIndex: "10000000" }}>
                  {item.duration}
                </div>
                <div className="relative flex items-center justify-center w-full h-[200px]">
                  <img
                    src={item.poster}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-t-lg hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => openModal(item)} 
                  >
                    <FaPlayCircle className="text-white text-4xl" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center text-white w-full h-full p-4">
                  <p className="text-sm text-gray-400 mb-1 hover:text-purple-600">{item.genre}</p>
                  <p style={{ fontSize: "15px", textAlign: "start" }}>{item.name}</p>
                  <div className="flex items-center text-xs text-gray-400 mt-auto">
                    <p>{item.wiev} views</p>
                    <span className="mx-2">•</span>
                    <p>{item.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedMovie && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-[80%] max-w-[800px] rounded-lg p-4 bg-gray-400"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <video
                src={videourl} 
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
