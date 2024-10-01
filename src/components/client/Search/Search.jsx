import { useState } from 'react';
import { useFilterVideosMutation } from '../../../redux/api/client/movie';
import { Loader } from '../Layout/Animation/Loader';
import search_ from '../../../assets/icons/search.png';
import { Link } from 'react-router-dom';

export function Search({ setOpen }) {
  const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false); 
  const [FilterMovies, { isLoading, isError, isSuccess, data }] = useFilterVideosMutation(); 

  useState(() => {
    setTimeout(() => setIsVisible(true), 10); 
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search.trim()) {
      await FilterMovies({ name: search.trim().toLocaleLowerCase() });
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.id !== 'main') {
      setIsVisible(false); 
      setTimeout(() => setOpen(false), 300); 
    }
  };

  return (
    <div 
      className={`w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-opacity-85 bg-[#00031C] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      onClick={handleClickOutside}
      style={{ zIndex: "100000" }}
    >
      <div 
        className={`max-w-[700px] min-w-[250px] max-h-[500px] w-[80%] bg-[#00031C] p-10 rounded-lg relative transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-75'}`} 
        id='main'
      >
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full" id='main'>
          <input
            id='main'
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search movie"
            className="flex-grow bg-gray-800 text-white p-2 rounded-md outline-none"
          />
          {isLoading ? <Loader /> : (
            <img
              src={search_} 
              alt="" 
              className='w-[23px] h-[23px] cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90' 
            />
          )}
        </form>

        <div className="mt-4 overflow-y-auto max-h-[400px]" id='main'>
          {isLoading && <p className="text-white">Loading...</p>}
          {isError && <p className="text-red-500">Error fetching movies!</p>}
          {isSuccess && data?.length > 0 && (
            <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2" id='main'>
              {data.map((movie) => (
                <Link to={`/client/home/video/${movie.id}`} key={movie.id} className="flex flex-col items-center text-white">
                  <img src={movie.thumbnailUrl} alt={movie.name} className="object-cover rounded-md" />
                  <p className="font-semibold text-[13px]">{movie.name}</p>
                  <p>{movie.year} · {movie.duration}</p>
                </Link>
              ))}
            </div>
          )}
          {isSuccess && data?.length === 0 && (
            <p className="text-white" id='main'>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
