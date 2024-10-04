import { Outlet } from "react-router-dom";
import fancy from "../../../assets/images/fancy.png";
import "./Registration.css";

export function Registration() {

    return (
        <main className={`flex items-center justify-between min-h-screen w-screen bg-gray-100 registration`}>
            <section className="flex w-full max-w-4xl items-center justify-center">
                <div className={`w-full max-w-md p-10 bg-white rounded-lg shadow-lg`}>
                    <Outlet />
                </div>
            </section>

            <section className="flex items-center justify-center w-full h-screen max-[900px]:hidden">
                <div className="w-full">
                <img
                    src={fancy}
                    alt="Decorative background"
                    className="object-cover h-screen w-full"
                />
                </div>
            </section>
        </main>
    )
}