import { useParams } from "react-router-dom";
import { VideoInfoMain } from "../../../../components/client/Movie/VideoInfoContainer/VideoInfoMain";
import { VideoContainer } from "../../../../components/client/Movie/VideoContainer/VideoContaner";
import { Loader } from "../../../../components/client/Layout/Animation/Loader";
import { useGetVideoByIdQuery } from "../../../../redux/api/client/movie";
import MovieSkeleton from "../../../../components/client/Layout/Animation/Skeleton/Video/Video";

export function VideoMain() {
    const { movieid } = useParams();
    const { data, isLoading, isError, isSuccess, refetch } = useGetVideoByIdQuery(movieid);

    return (
        <>
            {
                data && !isLoading && !isError ? (
                    <>
                        <VideoContainer movie={data} />
                        <VideoInfoMain movie={data} refetch={refetch} />
                    </>
                ) : <MovieSkeleton />
            }
        </>
    );
}
