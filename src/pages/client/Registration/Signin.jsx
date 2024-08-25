import React, { useEffect } from "react";
import fancy from "../../../assets/images/fancy.png";
import { useLoginMutation } from "../../../redux/api/Authentication/Login";
import { Loader } from "../../../components/client/Layout/Animation/Loader";
import { message } from "antd";
import { SetTokenToLocalStorage, TakeTokenFromLocalStorage } from "../../../utils/client/LocalStorage";

export function Signin() {
    const [Login, { data, isLoading, isError, error }] = useLoginMutation();

    useEffect(() => {
        if (isError && error) {
        message.error(error?.data?.message || "An error occurred. Please try again.");
        }
    }, [isError, error]);

    useEffect(() => {
        if (data) {
            message.success(data?.message || "Login successful!");
            SetTokenToLocalStorage(data.accessToken);
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
        <main className="flex items-center justify-between min-h-screen w-screen bg-gray-100">
        <section className="flex w-full max-w-4xl items-center justify-center">
            <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg">
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
                <input
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
                <input
                    type="password"
                    name="password"
                    id="password"
                    className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    isError ? "border-red-600" : ""
                    }`}
                    placeholder="••••••••"
                />
                </div>
                <div className="flex justify-between text-sm">
                <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 focus:outline-none"
                >
                    Forgot Password?
                </a>
                <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 focus:outline-none"
                >
                    Create Account
                </a>
                </div>
                <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                {isLoading ? <Loader /> : "Sign In"}
                </button>
            </form>
            </div>
        </section>

        <section className="flex items-center justify-center w-full h-screen">
            <div className="w-full">
            <img
                src={fancy}
                alt="Decorative background"
                className="object-cover h-screen w-full"
            />
            </div>
        </section>
        </main>
    );
}

export default Signin;
