import React, { useEffect } from "react";
import { useLoginMutation } from "../../../redux/api/Authentication";
import { Loader } from "../../../components/client/Layout/Animation/Loader";
import { Input, message } from "antd";
import {
  SetTokenToLocalStorage,
} from "../../../utils/client/LocalStorage";
import { Link, useNavigate } from "react-router-dom";

export function Signin() {
    const [Login, { data, isLoading, isError, error, isSuccess }] = useLoginMutation();

    useEffect(() => {
        if (isError && error) {
        message.error(
            error?.data?.message || "An error occurred. Please try again."
        );
        }
    }, [isError, error]);

    useEffect(() => {
        if (isSuccess) {
            window.location = '/client/home';
        }
    }, [isSuccess])

    useEffect(() => {
        if (data) {
            message.success(data?.message || "Login successful!");
            SetTokenToLocalStorage(data.accessToken, "aToken");
            SetTokenToLocalStorage(data.refreshToken, "rToken");
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const credentials = {
        email: formData.get("email"),
        password: formData.get("password"),
        };
        Login(credentials);
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Welcome Back!
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
                    type="password"
                    name="password"
                    id="password"
                    className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                        isError ? "border-red-600" : ""
                    }`}
                    placeholder="••••••••••••"
                    />
                </div>
                <div className="flex justify-between text-sm">
                    <Link
                        to="/client/registration/forget/email"
                        className="text-blue-600 hover:text-blue-500 focus:outline-none"
                    >
                        Forgot Password?
                    </Link>
                    <Link
                        to="/client/registration/signup"
                        className="text-blue-600 hover:text-blue-500 focus:outline-none"
                    >
                        Create Account
                    </Link>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                    {isLoading ? <Loader /> : "Sign In"}
                </button>
            </form>
        </>
    );
}

export default Signin;
