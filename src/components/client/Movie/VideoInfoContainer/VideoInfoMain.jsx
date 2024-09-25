import { Poster } from "./Poster/Poster";
import { VideoMainInfo } from "./VideoMainInfo/VideoMainInfo";

export function VideoInfoMain({movie}) {

    return (
        <div className="w-screen flex items-center justify-center mt-10 max-w-[2000px]">
            <div className="flex items-start justify-center w-[90%] max-[1100px]:flex-col">
                <Poster movie={movie}/>
                <VideoMainInfo movie={movie}/>
            </div>
        </div>
    )
}