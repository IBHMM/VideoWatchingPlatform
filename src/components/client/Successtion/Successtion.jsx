import { Successtion } from "../../../constants/client.constants";
import { FaStar, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; 
import { useEffect, useRef, useState } from 'react';

export function Succession() {
    const [muted, setMuted] = useState(true); 
    const videoRef = useRef(null);

    useEffect(() => {
        const playVideoWithDelay = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current
                    .play()
                    .catch(error => {
                        console.log("Autoplay failed:", error);
                    });
            }
        }, 3000);

        return () => clearTimeout(playVideoWithDelay);
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !muted;
            setMuted(!muted);
        }
    };

    return (
        <div className="flex items-center justify-center w-full mt-[30px] max-w-[2000px]">
            <div className='flex items-center justify-between w-[90%] gap-[30px] max-[1000px]:flex-col mt-[100px]'>

                <div className="relative w-[60%] h-auto max-[1000px]:w-full">
                    <video 
                        ref={videoRef}
                        src={Successtion.video}
                        poster={Successtion.poster}
                        loop
                        muted={muted} 
                        className="w-full h-full object-contain rounded-lg shadow-lg"
                    >
                        Your browser does not support the video tag.
                    </video>

                    <button 
                        onClick={toggleMute}
                        className="absolute bottom-3 right-3 bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-colors duration-300"
                    >
                        {muted ? (
                            <FaVolumeMute className="text-white text-sm" />
                        ) : (
                            <FaVolumeUp className="text-white text-sm" />
                        )}
                    </button>
                </div>

                <div className="flex flex-col items-start justify-center w-[40%] text-white gap-[20px] max-[1000px]:w-full">
                    <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/fre_zone.png" alt="" className="w-32" />

                    <h2 className="text-2xl font-semibold mt-3">{Successtion.name}</h2>

                    <div className="flex items-center gap-[10px] mt-2 justify-start">
                        <FaStar className="text-violet-500" />
                        <span className="px-2 py-1 text-sm rounded-sm">
                            {Successtion.score} (IMDb)
                        </span>
                        <p className="text-gray-400">{Successtion.year} • {Successtion.genre}</p>
                        <p className="text-gray-400">Duration: {Successtion.duration}</p>
                    </div>

                    <p className="mt-1 text-gray-400">{Successtion.description}</p>

                    <button className="mt-4 px-7 py-3 bg-gradient-to-r from-violet-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-violet-700">
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    );
}
