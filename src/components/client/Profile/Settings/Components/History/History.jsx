import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../../../NewRelease/NewRelease';
import { useEffect, useState } from 'react';
import { useUpdateUserMutation } from '../../../../../../redux/api/admin/user';
import { Empty } from '../Empty';
import { Button, message } from 'antd';
import { setUser } from '../../../../../../redux/slices/user';

export function History() {
    const user = useSelector(state => state.user.user);
    const [visibleCard, setVisibleCard] = useState(null);
    const [updateUser, { isLoading, isError, isSuccess, data }] = useUpdateUserMutation();
    const dispatch = useDispatch();

    const handleClearHistory = async () => {
        try {
            updateUser({userId : user.id, updatedData : {History : []}});
            message.success('History cleared successfully!');
        } catch (error) {
            message.error('Failed to clear history.');
        }
    };

    useEffect(() => {
        if (isSuccess && data.user) {
            dispatch(setUser(data.user))
        }
    }, [isSuccess]);

    return (
        <div className='w-screen flex flex-col items-center justify-center min-h-[500px]'>
            {user?.History?.length > 0 && (
                <div className="flex justify-end w-[90%] mb-4">
                    <Button 
                        onClick={handleClearHistory}
                        loading={isLoading}
                        className="bg-violet-800 text-white mt-5 hover:scale-105 transition-all duration-300 border-none"
                    >
                        Clear History
                    </Button>
                </div>
            )}

            {
                user?.History?.length === 0 ? 
                    <Empty title={"You have no history"} /> : 
                    <div className="grid 2xl:grid-cols-6 gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 max-h-[1200px] overflow-y-scroll mt-5 w-[90%]">
                        {user?.History.map((item, index) => (
                            <div key={index}>
                                <MovieCard 
                                    movie={item} 
                                    index={index} 
                                    setVisibleCard={setVisibleCard} 
                                    visibleCard={visibleCard} 
                                />
                            </div>
                        ))}
                    </div>
            }

            {/* Error Handling */}
            {isError && (
                <p className="text-red-500 mt-4">Failed to update history, please try again.</p>
            )}
        </div>
    );
}
