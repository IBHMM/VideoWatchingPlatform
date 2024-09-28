import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { genres, years } from "../../../../constants/client.constants";
import { useGetAllVideosQuery } from "../../../../redux/api/client/movie";

export function MoviesMain() {
    const { year, genre } = useParams();
    const { isLoading, isError, error, data, isSuccess } = useGetAllVideosQuery();
    const topMovies = data?.slice(0, 5);

    return (
        <div className="flex w-screen items-center justify-center mt-10">
            <div className="flex flex-col w-[90%] items-start justify-between gap-10">
                
                <div className="flex flex-col items-start justify-start gap-5">
                    <p className="text-[200%] text-white font-bold">
                        {genre ? genre : "Movies"}
                    </p>
                    <div className="flex items-start justify-center gap-1 text-gray-400 text-[14px]">
                        <NavLink className="hover:text-violet-600 transition-all duration-300" to={"/client/home/a"}>
                            Home
                        </NavLink>
                        /
                        <NavLink className="hover:text-violet-600 transition-all duration-300" to={"/client/home/movies"}>
                            Movies
                        </NavLink>
                        <span>{genre ? "/" : ""}</span>
                        <NavLink className="hover:text-violet-600 transition-all duration-300" to={`/client/home/movies/${genre}`}>
                            {genre && genre}
                        </NavLink>
                    </div>
                </div>

                <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col items-start justify-start gap-5 max-w-[300px]">
                        
                        <div className="flex flex-col items-start justify-center gap-1">
                            <p className="text-[150%] text-white font-bold mb-5">Genres</p>
                            {genres.map((g, index) => (
                                <div key={index}>
                                    <NavLink
                                        className="text-white text-[15px] hover:text-violet-600 transition-all duration-300"
                                        key={index}
                                        to={`/client/home/movies/${g}`}
                                    >
                                        {g}
                                    </NavLink>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-start justify-start gap-3">
                            <p className="text-[150%] text-white font-bold mb-5">Movies by year</p>
                            <div className="flex flex-wrap items-start justify-start gap-3">
                                {years.map((y, index) => (
                                    <NavLink
                                        className={({ isActive }) =>
                                            `text-white text-[15px] py-1 px-3 bg-[#191c33] hover:bg-violet-600 transition-all duration-300 ${
                                                isActive ? "bg-violet-600" : ""
                                            }`
                                        }
                                        key={index}
                                        to={`/client/home/movies/${genre}/${y}`}
                                    >
                                        {y}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start gap-3 mt-8">
                            <p className="text-[150%] text-white font-bold mb-5">Top 5 Movies</p>
                            {isLoading && <p>Loading top movies...</p>}
                            {isError && <p>Error loading top movies: {error.message}</p>}
                            {isSuccess && topMovies && topMovies.length > 0 && (
                                <div className="text-white">
                                    {topMovies.map((movie, index) => (
                                        <Link to={`/client/home/video/${movie.id}`}
                                      key={index} className="flex items-center justify-start gap-2 mb-3">
                                            <img src={movie.thumbnailUrl} alt={movie.name} className="w-12 h-16 object-cover"/>
                                            <div className="flex flex-col">
                                                <p className="font-bold">{movie.name}</p>
                                                <p className="text-[12px] text-gray-400">{movie.year}</p>
                                                <p className="text-[12px] text-violet-500">
                                                    {movie.genre.split(",").map((g, i) => (
                                                        <span key={i} className="mr-1">
                                                            {g}
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    );
}
