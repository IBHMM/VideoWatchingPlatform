import { useNavigate } from 'react-router-dom';
import { Input, message } from "antd";
import { useGetcodeMutation } from "../../../../redux/api/Authentication";
import { useEffect } from "react";
import { Loader } from '../../../../components/client/Layout/Animation/Loader';

export const FEmail = () => {

    const [GetCode, {data, isLoading, isError, isSuccess}] = useGetcodeMutation();
    const navigate = useNavigate();
    const email = localStorage.getItem('emailfromprofile');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        GetCode({email});
    }

    useEffect(() => {
        if (isSuccess) {
            message.success("Check your email for verification code.");
            localStorage.setItem('email', data.email);
            localStorage.removeItem("emailfromprofile")
            navigate(`/client/registration/forget/verify`);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            message.error("Failed to send verification code. Please try again later.");
        }
    }, [isError])

    return (
        <>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Verify Email!
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={email ? email : ""}
                            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                                isError ? "border-red-600" : ""
                            }`}
                            placeholder="you@example.com"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                        {isLoading ? <Loader /> : "Get Code"}
                    </button>
            </form>
        </>
    )
}