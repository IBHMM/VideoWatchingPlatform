import { useSelector } from "react-redux";
import { FaCrown } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";

export function Profile() {
  const user = useSelector((state) => state.user.user);

  return (
    <main className="flex flex-col items-start justify-between w-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-[2000px]" style={{ background: "rgb(25, 28, 51)" }}> 
        <div className="flex flex-col items-start justify-between w-[90%] max-sm:w-full">
          <div className="flex items-center justify-start gap-5 w-full p-10">
            <img
              src={user?.thumbnail}
              className="w-[60px] h-[60px] rounded-full border-white border-[3px] p-[1px]"
              alt={`${user?.username}'s profile`}
            />
            <p className="text-[130%] text-white">{user?.username}</p>

              {
                user?.subscription == "free" ? 
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-4 py-2 rounded-lg ml-5">
                  <FaCrown className="text-yellow-400" /> {"Upgrade"} 
                </button> :
                user?.subscription == "diamond" ?
                <IoDiamondOutline style={{color: "aqua", fontSize: "25px"}} className=' animate-bounce'/> : 
                <MdOutlineWorkspacePremium style={{color: "gray", fontSize: "25px"}} className=' animate-bounce' />
              }
          </div>

          <div className="flex items-center justify-start gap-8 w-full px-10">
            <NavLink
              to="/client/home/profile/favourite"
              className={({ isActive }) =>
                `text-white text-[13px] pb-1 ${isActive ? "border-b-2 border-purple-500" : "hover:text-purple-500"}`
              }
            >
              Favorites
            </NavLink>

            <NavLink
              to="/client/home/profile/history"
              className={({ isActive }) =>
                `text-white text-[13px] pb-1 ${isActive ? "border-b-2 border-purple-500" : "hover:text-purple-500"}`
              }
            >
              History
            </NavLink>

            <NavLink
              to="/client/home/profile/watchlist"
              className={({ isActive }) =>
                `text-white text-[13px] pb-1 ${isActive ? "border-b-2 border-purple-500" : "hover:text-purple-500"}`
              }
            >
              Watchlist
            </NavLink>

            <NavLink
              to="/client/home/profile/settings"
              className={({ isActive }) =>
                `text-white text-[13px] pb-1 ${isActive ? "border-b-2 border-purple-500" : "hover:text-purple-500"}`
              }
            >
              Settings
            </NavLink>
          </div>
        </div>
      </div>
        <Outlet />
    </main>
  );
}
