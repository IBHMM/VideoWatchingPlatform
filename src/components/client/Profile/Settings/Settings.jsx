import { useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";

export function Settings() {
    const user = useSelector(state => state.user.user);

    return (
        <div className="flex items-center justify-center w-screen mt-10">
            <div className="flex flex-col w-[90%] items-center justify-start gap-10">
                <div className="flex flex-col items-start justify-start gap-5 w-full">
                    <p className="text-white text-[13px]">Personal information</p>
                    <div className="flex items-center justify-between p-5 w-full rounded-lg" style={{ background: "rgb(25, 28, 51)" }}>
                        <div className="flex items-center justify-center gap-5">
                            <img
                                src={user?.thumbnail || "default-profile.png"} 
                                className="w-[90px] h-[90px] rounded-full border-white border-[3px] p-[1px]"
                                alt={`${user?.username || "User"}'s profile`}
                            />
                            <p className="text-[130%] text-white">{user?.username || "Anonymous"}</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg hover:shadow-pink-500/50 hover:scale-105 transform transition duration-300 ease-out">
                            <AiFillEdit size={15} />
                            <span className="text-[15px]">Edit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
