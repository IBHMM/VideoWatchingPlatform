import { useParams } from "react-router-dom";
import { VideoInfoMain } from "../../../../components/client/Movie/VideoInfoContainer/VideoInfoMain";
import { VideoContainer } from "../../../../components/client/Movie/VideoContainer/VideoContaner";
import { Loader } from "../../../../components/client/Layout/Animation/Loader";
import { useGetVideoByIdQuery } from "../../../../redux/api/client/movie";

export function VideoMain() {
    const { movieid } = useParams();
    const { data, isLoading, isError, isSuccess } = useGetVideoByIdQuery(movieid);

    return (
        <>
            {
                data && !isLoading && !isError ? (
                    <>
                        <VideoContainer movie={data} />
                        <VideoInfoMain movie={data} />
                    </>
                ) : <Loader />
            }
        </>
    );
}
