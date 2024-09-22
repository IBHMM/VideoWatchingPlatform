import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Loader } from '../../../Layout/Animation/Loader';
import { useUpdateUserMutation } from '../../../../../redux/api/admin/user';

export function CustomForm({ user, type, isOpen, onClose }) {
    const [inputValue, setInputValue] = useState(user?.[type] || '');
    const [updateUser, { isLoading, isError, isSuccess }] = useUpdateUserMutation();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSave = async () => {
        const body = {
            [type]: inputValue
        };
        updateUser({ userId: user.id, updatedData: body });
    };

    useEffect(() => {
        if (isSuccess) {
            message.success('Profile updated successfully');
            onClose();
            setTimeout(() => {
                window.location.reload();
            }, 200);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            message.error('Failed to update profile, Try again later');
        }
    }, [isError]);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 p-5 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                className={`bg-[#151729] w-[350px] md:w-[450px] rounded-xl p-5 shadow-lg transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-75'}`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-lg font-semibold">Personal Information</h2>
                    <button onClick={onClose} className="text-white hover:text-gray-400 transition">
                        <AiOutlineClose size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    {type !== "phone" ? 
                        <div>
                            <label className="text-white text-sm">{type.charAt(0).toUpperCase() + type.slice(1)} *</label>
                            <input
                                type="text"
                                name={type}
                                value={inputValue}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 rounded-lg bg-[#1E213A] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div> : 
                        <div className='flex items-center mt-1 bg-[#1E213A] rounded-md'>
                            <span className="text-white text-sm p-3">+994</span>
                            <input
                                type="text"
                                name={type}
                                value={inputValue}
                                onChange={handleChange}
                                className="flex-1 p-2 rounded-lgtext-white bg-[#1E213A] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                                placeholder="Enter phone number"
                            />
                        </div>
                    }
                </div>

                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm bg-transparent border-2 border-white text-white rounded-lg hover:bg-gray-700 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-700 transition"
                    >
                        {isLoading ? <Loader /> : "Save Update"}
                    </button>
                </div>
            </div>
        </div>
    );
}
