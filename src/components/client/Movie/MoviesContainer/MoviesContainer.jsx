import { useParams } from "react-router-dom"
import { useFilterVideosMutation } from "../../../../redux/api/client/movie";
import { useEffect, useState } from "react";
import MovieCard from "../../NewRelease/NewRelease";
import "./MoviesContainer.css"

export function MoviesContainer() {

    const [visibleCard, setVisibleCard] = useState(null);
    const { genre, year } = useParams();
    const [FilterData, {isLoading, isError, isSuccess, error, data}] = useFilterVideosMutation();

    useEffect(() => {
        FilterData({genre, year});
    }, [genre, year]);

    return (
        <div className="w-full flex flex-col items-start justify-start gap-3">

            <div className="flex items-center justify-between w-full">
                <p className="text-white">
                    Showing results : {isSuccess ? data.length : ""}
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {
                    data?.map((item, index) => (                            
                        <div
                            onMouseEnter={() => setVisibleCard(index)}
                            onMouseLeave={() => setVisibleCard(null)}
                            key={index}
                            className="moviecards"
                        >
                            <MovieCard 
                                movie={item} index={index} setVisibleCard={setVisibleCard} visibleCard={visibleCard}
                            />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}