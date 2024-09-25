import { useParams } from "react-router-dom";
import { VideoInfoMain } from "../../../../components/client/Movie/VideoInfoContainer/VideoInfoMain";
import { VideoContainer } from "../../../../components/client/Movie/VideoContainer/VideoContaner";
import { Loader } from "../../../../components/client/Layout/Animation/Loader";
import { useGetVideoByIdQuery, useFilterVideosQuery } from "../../../../redux/api/client/movie";
import { useEffect } from "react";

export function VideoMain() {
    const { movieid } = useParams();
    const { data, isLoading, isError, isSuccess } = useGetVideoByIdQuery(movieid);

    return (
        <>
            {
                data && !isLoading && !isError ? (
                    <>
                        <VideoContainer data={data} />
                        <VideoInfoMain data={data} recommendedVideos={recommendedVideos} />
                    </>
                ) : <Loader />
            }
        </>
    );
}
