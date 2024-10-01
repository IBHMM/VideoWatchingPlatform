import { useNavigate, useParams } from "react-router-dom";
import { useFilterVideosMutation, useGetAllVideosQuery } from "../../../../redux/api/client/movie";
import { useEffect, useState } from "react";
import MovieCard from "../../NewRelease/NewRelease";
import "./MoviesContainer.css";
import { genres, years } from "../../../../constants/client.constants";
import Skeleton from "../../Layout/Animation/Skeleton/Movie/Movies";

export function MoviesContainer() {
    const [visibleCard, setVisibleCard] = useState(null);
    const { genre, year } = useParams();
    const [currentPage, setCurrentPage] = useState(1); 
    const [sortOption, setSortOption] = useState("title"); 
    const itemsPerPage = 10; 
    const [FilterData, { isLoading, isError, isSuccess, error, data }] = useFilterVideosMutation();
    const { isLoading: AisLoading, isError: AisError, data: Adata, isSuccess: AisSuccess } = useGetAllVideosQuery();
    const navigate = useNavigate(); 

    useEffect(() => {
        if (genre !== "All") {
            FilterData({ genre, year });
        }
    }, [genre, year]);

    const allMovies = (genre !== "All" || year) ? data : Adata; 

    const sortedMovies = (movies) => {
        if (!movies) return [];

        return [...movies].sort((a, b) => {
            switch (sortOption) {
                case "views":
                    return b.view - a.view; 
                case "likes":
                    return b.like - a.like; 
                case "date":
                    return new Date(b.year) - new Date(a.year); 
                case "score":
                    return b.score.imdb - a.score.imdb; 
                default: 
                    return a.name.localeCompare(b.name); 
            }
        });
    };

    const totalPages = Math.ceil((sortedMovies(allMovies)?.length || 0) / itemsPerPage); 
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = sortedMovies(allMovies)?.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleGenreChange = (e) => {
        const selectedGenre = e.target.value;
        navigate(`/client/home/movies/${selectedGenre}/${year || ''}`);
    };

    const handleYearChange = (e) => {
        const selectedYear = e.target.value;
        navigate(`/client/home/movies/${genre || 'All'}/${selectedYear}`);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value); 
    };

    return (
        <div className="w-full flex flex-col items-center justify-start gap-3">
            <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-4">
                <p className="text-white max-sm:text-[14px]">
                    Showing results: {isSuccess || AisSuccess ? allMovies?.length : ""}
                </p>

                <div className="flex items-center justify-end gap-3">
                    <select name="genre" id="genre" className="bg-gray-800 text-white rounded-lg px-2 py-1 text-[12px]"
                        onChange={handleGenreChange} value={genre || "All"}>
                        {genres.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <select name="years" id="years" className="bg-gray-800 text-white rounded-lg px-2 py-1 text-[12px]"
                        onChange={handleYearChange} value={year || ""}>
                        {years.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <select name="sort" id="sort" className="bg-gray-800 text-white rounded-lg px-2 py-1 text-[12px]" 
                        onChange={handleSortChange} value={sortOption}>
                        <option value="title">By title</option>
                        <option value="views">By views</option>
                        <option value="likes">By likes</option>
                        <option value="date">By Date</option>
                        <option value="score">By score</option>
                    </select>
                </div>
            </div>

            <div className="grid 2xl:grid-cols-5 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-2 max-h-[1200px] overflow-y-scroll mt-5">
                {
                    isLoading || AisLoading  ? 
                        <Skeleton /> :
                    paginatedData?.map((item, index) => (
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

            <div className="pagination-controls flex justify-center items-center gap-2 mt-4">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1}
                    className="btn prev"
                >
                    «
                </button>

                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`btn page ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}
