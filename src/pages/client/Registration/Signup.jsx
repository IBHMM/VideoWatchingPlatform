import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../../redux/api/Authentication";
import { Loader } from "../../../components/client/Layout/Animation/Loader";
import { Input, message } from "antd";
import { useEffect } from "react";

export function Signup() {
    
    const [Register, {data, isLoading, isError, error, isSuccess}] = useSignupMutation();
    const navigation = useNavigate();

    useEffect(() => {
        if (data) {
            message.success(data?.message || "Login successful!");
        }
    }, [data]);

    useEffect(() => {
        if (isSuccess) {
            navigation('/client/registration/signin')
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError && error) {
            message.error(
                error?.data?.message || "An error occurred. Please try again."
            );
        }
    }, [isError, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const credentials = {
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name"),
            surname: formData.get("surname"),
            username: formData.get("username"),
            age: Number(formData.get("age")),
        };
        Register(credentials);
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Welcome !
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                                isError ? "border-red-600" : ""
                            }`}
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex-1">
                        <label
                            htmlFor="surname"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Surname
                        </label>
                        <Input
                            type="text"
                            name="surname"
                            id="surname"
                            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                                isError ? "border-red-600" : ""
                            }`}
                            placeholder="Your Surname"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                            isError ? "border-red-600" : ""
                        }`}
                        placeholder="Your Username"
                    />
                </div>
                <div>
                    <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Age
                    </label>
                    <Input
                        min={0}
                        type="number"
                        name="age"
                        id="age"
                        className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                            isError ? "border-red-600" : ""
                        }`}
                        placeholder="Your Age"
                    />
                </div>
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
                        className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                            isError ? "border-red-600" : ""
                        }`}
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <Input.Password
                        name="password"
                        id="password"
                        className={`mt-1  w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                            isError ? "border-red-600" : ""
                        }`}
                        placeholder="••••••••"
                    />
                </div>
                <div className="flex justify-between text-sm">
                    <Link
                        to="/client/registration/signin"
                        className="text-blue-600 hover:text-blue-500 focus:outline-none"
                    >
                        I already have an Account
                    </Link>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                    {isLoading ? <Loader /> : "Sign Up"}
                </button>
            </form>
        </>
  );
}
