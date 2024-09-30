import { FaHistory } from "react-icons/fa";
import { FcDislike } from "react-icons/fc";
import { FaRegListAlt } from "react-icons/fa";

export function Empty({ title = "No Data Available", description = "There is nothing to display at the moment." }) {

    const i = title.toLocaleLowerCase().trim().includes('history') ? <FaHistory /> : title.toLocaleLowerCase().trim().includes('favourite') ? <FcDislike /> : <FaRegListAlt />;

    return (
        <div className="w-full h-[600px] flex flex-col items-center justify-center space-y-4">
            <div className="text-white text-6xl animate-bounce">
                {i}
            </div>
            <h2 className="text-2xl font-semibold text-white">
                {title}
            </h2>
            <p className="text-base text-gray-400 text-center max-w-md">
                {description}
            </p>
        </div>
    );
}
