import { useState } from 'react';

export function Comments() {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => { 
        setRating(rate);
    };

    return (
        <div className="w-full flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-white text-[20px]">
                    Add a review
                </p>
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

                <div className="w-full mb-4">
                    <label htmlFor="review" className="text-gray-400">Your review *</label>
                    <textarea 
                        id="review" 
                        className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500" 
                        rows="4" 
                        placeholder="Write your review here..."
                    />
                </div>

                <div className="flex w-full gap-4 mb-4 max-[700px]:flex-col">
                    <div className="w-1/2 max-[700px]:w-full">
                        <label htmlFor="name" className="text-gray-400">Name *</label>
                        <input 
                            id="name" 
                            type="text" 
                            className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500" 
                            placeholder="Enter your name" 
                        />
                    </div>
                    <div className="w-1/2 max-[700px]:w-full">
                        <label htmlFor="email" className="text-gray-400">Email *</label>
                        <input 
                            id="email" 
                            type="email" 
                            className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500" 
                            placeholder="Enter your email" 
                        />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input 
                        type="checkbox" 
                        id="saveInfo" 
                        className="mr-2 bg-gray-800 border border-gray-600 rounded" 
                    />
                    <label htmlFor="saveInfo" className="text-gray-400">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>

                <button className="w-auto px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:opacity-90 focus:outline-none">
                    Submit
                </button>
            </div>
        </div>
    );
}
