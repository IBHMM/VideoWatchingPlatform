import React, { useEffect, useState } from 'react';
import { useAddCommentMutation, useDeleteCommentMutation, useToggleCommentLikeMutation, useUpdateCommentMutation } from '../../../../../../redux/api/client/movie';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { AiFillEdit, AiFillDelete, AiFillDislike, AiFillLike } from 'react-icons/ai'; 
import { Loader } from '../../../../Layout/Animation/Loader';

export function Comments({ movie }) {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [edit, setEdit] = useState(null); 
    const [editRating, setEditRating] = useState(0);
    const [editReviewText, setEditReviewText] = useState('');
    const user = useSelector(state => state.user.user);
    const [commenterror, setCommentError] = useState(false);
    
    const [AddComment, { isLoading, isError, isSuccess }] = useAddCommentMutation();
    const [deleteComment, { isLoading: DisLoading }] = useDeleteCommentMutation();
    const [updateComment, { isLoading: UisLoading, isSuccess: UisSuccess }] = useUpdateCommentMutation();
    const [TComments, { isLoading: CisLoading, isSuccess: CisSuccess, isError: CisError }] = useToggleCommentLikeMutation();

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user) {
            message.error("Please login to submit a review");
            setRating(0);
            setReviewText('');
            return;
        }

        if (rating === 0 || !reviewText) {
            setCommentError(true);
            setTimeout(() => {
                setCommentError(false);
            }, 500);
            return;
        }

        const review = {
            content: reviewText,
            score: rating.toString(),
        };

        try {
            await AddComment({ videoId: movie.id, commentData: review }).unwrap();
            setRating(0);
            setReviewText('');
        } catch (error) {
            console.error("Failed to submit comment: ", error);
        }
    };

    const handleDelete = (reviewId) => {
        deleteComment({ videoId: movie.id, commentId: reviewId });
    };

    const handleEditStart = (review) => {
        setEdit(review._id);
        setEditRating(parseInt(review.comment.score, 10));
        setEditReviewText(review.comment.content);
    };

    const handleEditCancel = () => {
        setEdit(null);
        setEditRating(0);
        setEditReviewText('');
    };

    const handleEditSave = async (reviewId) => {
        updateComment({ videoId: movie.id, commentId: reviewId, content: editReviewText, score: editRating.toString() });
    };

    const handleEditRating = (rate) => {
        setEditRating(rate);
    };

    const handleToggleLike = (review, isLiking) => {
        if (!user) {
            message.error("Please login to like/dislike a review");
            return;
        }
        if (isLiking && review.comment.likedusers.some(u => u.id == user?.id)) return;
        if (!isLiking && review.comment.dislikedusers.some(u => u.id == user?.id)) return;  

        console.log(isLiking && review.comment.likedusers.some(u => u.id == user?.id));
        console.log(!isLiking && review.comment.dislikedusers.some(u => u.id == user?.id));

        const cridentials = {videoId : movie.id, commentId : review._id, isLiking};
        TComments(cridentials);
    }

    useEffect(() => {
        setEdit(null); 
    }, [UisSuccess])

    return (
        <div className="w-full flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-white text-[20px]">Add a review</p>
                <p className="text-[14px] text-gray-400">
                    Your email address will not be published. Required fields are marked *
                </p>
            </div>

            <div className="w-full flex flex-col items-start justify-start mt-4">
                <div className="flex mb-4 items-center">
                    <span className="text-gray-400 mr-2">Your rating</span>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                onClick={() => handleRating(i + 1)}
                                className={`w-6 h-6 cursor-pointer ${rating >= i + 1 ? 'text-violet-700' : 'text-gray-400'} fill-current`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                            </svg>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="w-full mb-4">
                        <label htmlFor="review" className="text-gray-400">Your review *</label>
                        <textarea
                            id="review"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                            rows="4"
                            placeholder="Write your review here..."
                        />
                    </div>
                    <div className='flex w-full items-center justify-between max-md:flex-col gap-5'>
                        <div className="w-full mb-4">
                            <label htmlFor="name" className="text-gray-400">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                value={user?.name || ''}
                                className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                                disabled
                            />
                        </div>

                        <div className="w-full mb-4">
                            <label htmlFor="email" className="text-gray-400">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                value={user?.email || ''}
                                className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                                disabled
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`w-auto px-6 py-2 ${isLoading ? 'bg-gray-500' : 'bg-gradient-to-r from-purple-500 to-indigo-500'} text-white rounded-lg hover:opacity-90 focus:outline-none`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>

                    {commenterror ? <p className='text-red-500 mt-5'>You hav to give both score and reviewtext for submiting comment</p> : <></>}
                </form>

                <div className="mt-10 w-full max-h-[400px] overflow-y-scroll">
                    <h3 className="text-xl font-bold text-white mb-4">Reviews</h3>
                    {movie?.reviews.map((review, index) => (
                        <div key={index} className="mb-6 p-4 rounded-lg text-white max-h-[300px] overflow-y-scroll">
                            <div className="flex items-start space-x-4 flex-col p-3 gap-5">
                                <div className='flex items-center justify-start gap-5 w-full'>
                                    <img
                                        src={review.user.thumbnail}
                                        alt={`${review.user.username}'s avatar`}
                                        className="w-20 h-20 rounded-full"
                                    />
                                    <div className='flex items-start justify-between w-full'>
                                        <div className='flex items-start justify-between gap-3'>
                                            <div className="flex items-start mb-1 flex-col">
                                                <span className="text-xl font-semibold">{review.user.username}</span>
                                                <span className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
                                                <div className="flex items-center mb-2 mt-4">
                                                    {!edit ?  [...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-4 h-4 ${review.comment?.score >= i + 1 ? 'text-violet-700' : 'text-gray-400'} fill-current`}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                        >
                                                            <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                                                        </svg>
                                                    )) : 
                                                        <div className="flex items-center mt-4">
                                                            {[...Array(5)].map((_, i) => (
                                                            <svg
                                                                    key={i}
                                                                    onClick={() => handleEditRating(i + 1)}
                                                                    className={`w-6 h-6 cursor-pointer ${editRating >= i + 1 ? 'text-violet-700' : 'text-gray-400'} fill-current`}
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                >
                                                                <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                                                            </svg>  
                                                    ))}
                                                        </div>
                                                }
                                                </div>
                                            </div>
                                        </div>
                                        {user?.email === review.user.email && (
                                            <div className="flex items-center space-x-3">
                                                <AiFillEdit
                                                    className="text-violet-500 cursor-pointer"
                                                    onClick={() => handleEditStart(review)}
                                                />
                                                {DisLoading ? <Loader /> : <AiFillDelete
                                                    className="text-violet-700 cursor-pointer"
                                                    onClick={() => handleDelete(review._id)}
                                                />}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between w-full flex-col">
                                    {edit === review._id ? (
                                        <>
                                            <textarea
                                                value={editReviewText}
                                                onChange={(e) => setEditReviewText(e.target.value)}
                                                className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                                                rows="4"
                                            />
                                            <div className="flex items-center space-x-4 mt-4">
                                                <button
                                                    onClick={() => handleEditSave(review._id)}
                                                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:opacity-90"
                                                >
                                                    {UisLoading ? <Loader /> : "Save"}
                                                </button>
                                                <button
                                                    onClick={handleEditCancel}
                                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:opacity-90"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <div>{review.comment?.content}</div>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 mt-4">
                                    <AiFillLike
                                        className={`cursor-pointer ${review.comment.likedusers.some(u => u.id == user?.id) ? 'text-violet-700' : 'text-gray-400'}`}
                                        onClick={() => handleToggleLike(review, true)}
                                    />
                                    <span>{review.comment.likedusers.length}</span>

                                    <AiFillDislike
                                        className={`cursor-pointer ${review.comment.dislikedusers.some(u => u.id == user?.id) ? 'text-violet-700' : 'text-gray-400'}`}
                                        onClick={() => handleToggleLike(review, false)}
                                    />
                                    <span>{review.comment.dislikedusers.length}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
