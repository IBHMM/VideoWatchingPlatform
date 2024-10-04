import { useEffect, useState } from 'react';
import { FaThumbsUp, FaShare, FaPlus } from 'react-icons/fa'; 
import { useDispatch, useSelector } from 'react-redux';
import { useLikemovieMutation, useWatchlistMutation } from '../../../../../redux/api/client/movie';
import { setUser } from '../../../../../redux/slices/user';
import { message } from 'antd';

export function Poster({ movie }) {

    const user = useSelector(state => state.user.user);
    const [ToggleLike, {isLoading: TisLoading, isSuccess: TisSuccess, isError: TisError, data: Tdata}] = useLikemovieMutation();
    const [isLiked, setIsLiked] = useState(user?.LikedMovies.some(m => m == m?.id));
    const [ToggleWatchList, {isLoading: WisLoading, isSuccess: WisSuccess, isError: WisError, data: Wdata}] = useWatchlistMutation();
    const [isInWatchList, setIsInWatchList] = useState(user?.watchList.some(m => m == m?.id))
    const dispatch = useDispatch();
    
    const handleLike = () => {
        if (!user) {
            message.error('Please login to like this movie');
            return;
        }
        ToggleLike({videoId: movie.id});
    };

    const handleWatchList = () => {
        if (!user) {
            message.error('Please login to add this movie');
            return;
        }
        ToggleWatchList({videoId: movie.id})
    };

    useEffect(() => {
        if (WisSuccess) {
            dispatch(setUser(Wdata));
        }
    }, [WisSuccess]);
    
    useEffect(() => {
        if (TisSuccess) {
            dispatch(setUser(Tdata));
        }
    }, [TisSuccess]);


    useEffect(() => {
        setIsLiked(user?.LikedMovies.some(m => m.id == movie.id));
        setIsInWatchList(user?.watchList.some(m => m.id == movie.id));
    }, [user]);

    const handleShare = () => {
        const videoUrl = `${window.location.origin}/movies/${movie.id}`; 
        
        if (navigator.share) {
            navigator.share({
                title: movie.name,
                text: 'Check out this movie!',
                url: videoUrl,
            }).then(() => {
                console.log('Successful share');
            }).catch((error) => {
                console.log('Error sharing', error);
            });
        } else {
            navigator.clipboard.writeText(videoUrl).then(() => {
                alert('Link copied to clipboard');
            }, (err) => {
                console.error('Could not copy text: ', err);
            });
        }
    };

    return (
        <div className="flex items-center flex-col justify-between text-white rounded-lg shadow-lg p-3">
            <img src={movie.thumbnailUrl} alt={movie.name} className="rounded-xl mb-4 w-full max-sm:w-[90%] max-sm:h-[90%]" />
            
            <div className="flex justify-between w-full space-x-4 max-sm:w-[90%]">
                <button 
                    onClick={handleLike}
                    className={`flex max-sm:text-[10px]  items-center justify-center text-[14px] space-x-2 bg-[#24244a] py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors duration-300 ${isLiked ? 'bg-violet-600' : ''}`}>
                    <FaThumbsUp className="text-white" />
                    <span>Like</span>
                </button>
                
                <button 
                    onClick={handleShare} 
                    className="flex items-center justify-center max-sm:text-[10px]  text-[14px] space-x-2 bg-[#24244a] py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors duration-300">
                    <FaShare className="text-white" />
                    <span>Share</span>
                </button>
                
                <button 
                    onClick={handleWatchList}
                    className={`flex max-sm:text-[10px]  items-center justify-center text-[14px] space-x-2 bg-[#24244a] py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors duration-300 ${isInWatchList ? 'bg-violet-600' : ''}`}>
                    <FaPlus className="text-white" />
                    <span>Watchlist</span>
                </button>
            </div>
        </div>
    );
}
