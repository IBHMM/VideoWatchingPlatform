import { Successtion } from "../../../constants/client.constants";
import { FaStar } from 'react-icons/fa'; 

export function Succession() {
    return (
        <div className="flex items-center justify-center w-full mt-[30px]">
            <div className='flex items-center justify-between w-[90%] mt-[30px] gap-[30px] max-[1000px]:flex-col'>
                <video 
                    src={Successtion.video} 
                    controls={true}
                    loop
                    className="w-[60%] h-full object-contain max-[1000px]:w-full"
                >
                    Your browser does not support the video tag.
                </video>

                <div className="flex flex-col items-start justify-center text-white w-full gap-[30px] ml-[30px]">
                    <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/fre_zone.png" alt="" />

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
    )
}
