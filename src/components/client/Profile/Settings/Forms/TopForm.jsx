import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { useUpdateUserMutation } from '../../../../../redux/api/admin/user';
import { message } from 'antd';
import { Loader } from '../../../Layout/Animation/Loader';
import { CustomForm } from './Custom';

export function TopForm({ isOpen, onClose, user }) {
    const [UpdareUser, { isLoading, isError, isSuccess }] = useUpdateUserMutation();
    const [formData, setFormData] = useState({
        username: user?.username || '',
        age: user?.age || '',
        gender: user?.gender || 'None',
        thumbnail: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'thumbnail' && files.length > 0) {
            setFormData((prevState) => ({
                ...prevState,
                thumbnail: files[0],
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSave = (e) => {
        const formdata_ = new FormData();
        
        formdata_.append('username', formData.username);
        formdata_.append('age', formData.age);
        formdata_.append('gender', formData.gender);
        if (formData.thumbnail) {
            formdata_.append('picture', formData.thumbnail);
        }

        
        UpdareUser({ userId: user.id, updatedData: formdata_ });
    };

    useEffect(() => {
        if (isSuccess) {
            message.success('Profile updated successfully');
            onClose();
            setTimeout(() => {
                window.location.reload();
            }, 200)
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
            style={{zIndex : "1000"}}
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

                <div className="flex flex-col items-center mb-5">
                    <div className="relative">
                        <img
                            src={formData.thumbnail ? URL.createObjectURL(formData.thumbnail) : user?.thumbnail || 'default-profile.png'}
                            alt="Profile"
                            className="w-[80px] h-[80px] rounded-full border-[3px] border-white"
                        />
                        <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
                            <label htmlFor="thumbnailInput" className="cursor-pointer">
                                <AiOutlineEdit size={12} color="white" />
                            </label>
                            <input
                                type="file"
                                id="thumbnailInput"
                                name="thumbnail"
                                accept="image/*"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-white text-sm">Display Name *</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 rounded-lg bg-[#1E213A] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Date of Birth</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 rounded-lg bg-[#1E213A] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 rounded-lg bg-[#1E213A] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            <option value="None">None</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
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
                        {isLoading ? <Loader />  : "Save Update"}
                    </button>
                </div>
            </div>
        </div>
    );
}
