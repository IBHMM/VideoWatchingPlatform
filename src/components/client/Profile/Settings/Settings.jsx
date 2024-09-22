import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillEdit, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TopForm } from './Forms/TopForm'; 
import { CustomForm } from './Forms/Custom';

export function Settings() {
    const [isTopFormOpen, setIsTopFormOpen] = useState(false); 
    const [isCustomFormOpen, setIsCustomFormOpen] = useState(false); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [type, setType] = useState("");
    const user = useSelector(state => state.user.user);

    const handleEditClick = () => {
        setIsTopFormOpen(true); 
    };

    const handleCloseForm = () => {
        setIsTopFormOpen(false); 
    };   

    const handleCustomForm = (type) => {
        setType(type);
        setIsCustomFormOpen(true);
    }

    return (
        <div className="flex items-center justify-center w-screen mt-10">
            <div className="flex flex-col w-[90%] items-center justify-start gap-10">
                <div className="flex flex-col items-start justify-start gap-5 w-full">
                    <p className="text-white text-[12px]">Personal Information</p>
                    <div className="flex items-center justify-between p-5 w-full rounded-lg" style={{ background: "rgb(25, 28, 51)" }}>
                        <div className="flex items-center justify-center gap-5">
                            <img
                                src={user?.thumbnail || "default-profile.png"} 
                                className="w-[80px] h-[80px] rounded-full border-white border-[3px] p-[1px]"
                                alt={`${user?.username || "User"}'s profile`}
                            />
                            <p className="text-[110%] text-white">{user?.username || "Anonymous"}</p>
                        </div>
                        <button
                            onClick={handleEditClick} 
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transform transition duration-300 ease-out hover:from-purple-600 hover:to-indigo-700"
                        >
                            <AiFillEdit size={15} />
                            <span className="text-[12px]">Edit</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 w-full">
                    <p className="text-white text-[12px]">Account and Security</p>
                    <div className="flex flex-col items-center justify-between p-5 w-full rounded-lg" style={{ background: "rgb(25, 28, 51)" }}>
                        
                        <div className="w-full flex items-center justify-between p-3">
                            <div className="flex items-center gap-5">
                                <p className="text-[14px] text-white">Name</p>
                                <p className="text-[14px] text-white">{user?.name || "Anonymous"}</p>
                            </div>
                            <button className="text-[80%] text-white hover:gray-400" onClick={() => handleCustomForm("name")}>Change</button>
                        </div>
                        <hr className="w-[99%] border-gray-500" />
                        
                        <div className="w-full flex items-center justify-between p-3">
                            <div className="flex items-center gap-5">
                                <p className="text-[14px] text-white">Email</p>
                                <p className="text-[14px] text-white">{user?.email || "user@example.com"}</p>
                            </div>
                            <button className="text-[80%] text-white hover:gray-400" onClick={() => handleCustomForm("email")}>Change</button>
                        </div>
                        <hr className="w-[99%] border-gray-500" />
                        
                        <div className="w-full flex items-center justify-between p-3">
                            <div className="flex items-center gap-5">
                                <p className="text-[14px] text-white">Phone</p>
                                <p className="text-[14px] text-white">{user?.phone || "Not updated"}</p>
                            </div>
                            <button className="text-[80%] text-white hover:gray-400" onClick={() => handleCustomForm("phone")}>
                                {user?.phone ? "Change" : "Add"}
                            </button>
                        </div>
                        <hr className="w-[99%] border-gray-500" />
                        
                        <div className="w-full flex items-center justify-between p-3">
                            <div className="flex items-center gap-5">
                                <p className="text-[14px] text-white">Password</p>
                                <p className="text-[14px] text-white">{isPasswordVisible ? user?.password : "***************"}</p>
                                <button onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="text-[80%] text-white hover:gray-400">
                                    {!isPasswordVisible ? <AiOutlineEyeInvisible size={16} /> : <AiOutlineEye size={16} />}
                                </button>
                            </div>
                            <Link 
                                to={"/client/registration/forget/email"} 
                                className="text-[80%] text-white hover:gray-400"
                                onClick={() => localStorage.setItem("emailfromprofile", user?.email)}
                            >
                                Change
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            {isTopFormOpen && (
                <TopForm
                    isOpen={isTopFormOpen}
                    onClose={handleCloseForm}
                    user={user}
                />
            )}

            {
                isCustomFormOpen && (
                    <CustomForm
                        isOpen={isCustomFormOpen}
                        onClose={() => setIsCustomFormOpen(false)}
                        user={user}
                        type={type}
                    />
                )
            }
        </div>
    );
}
