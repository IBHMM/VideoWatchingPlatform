import { useEffect, useState } from "react";
import {
  FaHeart,
  FaHistory,
  FaCrown,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { message } from "antd";
import { useLogoutMutation } from "../../../redux/api/Authentication";
import { Link } from "react-router-dom";

const ProfileDropDown = ({ image, username }) => {
  const [logout, { isLoading, isError, isSuccess }] = useLogoutMutation();
  const [isProfileVisible, setProfileVisible] = useState(false);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setProfileVisible(false);
    }, 20000);
  };

  useEffect(() => {
    if (window.screenY > 1000) {
      setProfileVisible(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.reload(); 
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error("Failed to logout"); 
    }
  }, [isError]);

  return (
    <div
      className="relative rounded-md"
      style={{ zIndex: "100000000" }}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        alt="profile"
        className="w-7 h-7 rounded-full mx-auto cursor-pointer"
        onMouseEnter={() => setProfileVisible(true)}
      />

      {isProfileVisible && (
        <div
          className="absolute right-0 mt-2 w-48 text-white shadow-lg transition-opacity duration-300 rounded-lg"
          style={{
            background: "rgba(0, 3, 28, 0.9)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderImage:
              "linear-gradient(145deg, #9e61ff 10%, rgba(142, 97, 255, 0.2) 40%, #9e61ff 90%) 1",
            backdropFilter: "blur(8px)",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(158, 97, 255, 0.3)",
          }}
          onMouseLeave={() => setProfileVisible(false)}
          onMouseEnter={() => setProfileVisible(true)}
        >
          <div className="p-4 text-center border-b border-violet-600">
            <img
              src={image}
              alt="profile"
              className="w-10 h-10 rounded-full mx-auto"
            />
            <p className="mt-2 font-semibold text-base">{username}</p>
          </div>
          <ul className="text-left text-sm">
            <li className="flex items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <FaHeart className="mr-2" /> Favorites
            </li>
            <li className="flex items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <FaHistory className="mr-2" /> History
            </li>
            <li className="flex items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <FaCrown className="mr-2" /> Subscription
            </li>
            <li className="flex items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <Link to={"/client/home/profile"} className="flex items-center justify-center">
                <FaUser className="mr-2" /> My Profile
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <FaCog className="mr-2" /> Settings
            </li>
            <li
              className="flex items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
