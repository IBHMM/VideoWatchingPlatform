import { useParams } from "react-router-dom"
import { VideoContainer } from "../../../../components/client/Movie/VideoContainer/VideoContaner";
import { Videos } from "../../../../constants/client.constants";
import { VideoInfoMain } from "../../../../components/client/Movie/VideoInfoContainer/VideoInfoMain";

export function VideoMain() {

    const { movieid } = useParams();
    const movie = Videos.filter((video) => video.id == movieid);

    return (
       <>
            <VideoContainer url={movie[0].video}/>
            <VideoInfoMain movie={movie[0]}/>
       </>
    )
}