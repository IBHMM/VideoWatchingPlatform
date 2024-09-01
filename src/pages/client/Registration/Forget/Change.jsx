import { useNavigate } from 'react-router-dom';
import { Input, message } from "antd";
import { useChangeMutation } from "../../../../redux/api/Authentication";
import { useEffect } from "react";
import { Loader } from '../../../../components/client/Layout/Animation/Loader';

export const Change = () => {
    const [ChangePassword, { isLoading, isError, isSuccess }] = useChangeMutation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPassword = formData.get('newPassword');
        const confirmPassword = formData.get('confirmPassword');

        if (newPassword !== confirmPassword) {
            message.error("Passwords do not match. Please try again.");
            return;
        }
        const email = localStorage.getItem('email');
        localStorage.removeItem('email');

        ChangePassword({ password: newPassword, email });
    }

    useEffect(() => {
        if (isSuccess) {
            message.success("Password changed successfully.");
            navigate(`/client/registration/signin`);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            message.error("Failed to change password. Please try again.");
        }
    }, [isError]);

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Change Password
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className='flex items-center justify-center'>
                    <Input.Password
                        name="newPassword"
                        id="newPassword"
                        required
                        placeholder="New Password"
                        className="w-full flex mt-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <Input.Password
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        placeholder="Confirm Password"
                        className="w-full flex mt-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                    {isLoading ? <Loader /> : "Change Password"}
                </button>
            </form>
        </>
    );
};
