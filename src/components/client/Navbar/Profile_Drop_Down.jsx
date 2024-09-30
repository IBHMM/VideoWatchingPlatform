import { useEffect } from "react";
import { Menu, Dropdown, Avatar, message } from "antd";
import {
  FaHeart,
  FaHistory,
  FaCrown,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useLogoutMutation } from "../../../redux/api/Authentication";
import { Link } from "react-router-dom";

const ProfileDropDown = ({ image, username }) => {
  const [logout, { isLoading, isError, isSuccess }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      logout();
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

  const menu = (
    <Menu
      style={{background : "rgba(0,3,28,0.9)"}}
      className="bg-[rgba(0,3,28,0.9)] border-2 border-transparent rounded-lg 
        backdrop-blur-lg border-gradient-to-r from-violet-500 to-transparent 
        p-2 shadow-lg transition-opacity duration-300"
      items={[
        {
          key: '1',
          label: (
            <span className="flex text-white items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <Link className="flex items-center justify-start" to={"/client/home/profile/favourite"}>
                <FaHeart className="mr-2" /> Favorites
              </Link>
            </span>
          ),
        },
        {
          key: '2',
          label: (
            <span className="flex text-white items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <Link className="flex items-center justify-start" to={"/client/home/profile/history"}>
                <FaHistory className="mr-2" /> History
              </Link>
            </span>
          ),
        },
        {
          key: '3',
          label: (
            <span className="flex text-white items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <Link className="flex items-center justify-start"  to={"/client/home/plans"}>
                <FaCrown className="mr-2" /> Subscription
              </Link>
            </span>
          ),
        },
        {
          key: '4',
          label: (
            <span className="flex text-white items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg">
              <Link className="flex items-center justify-start" to={"/client/home/profile/settings"} >
                <FaUser className="mr-2" /> My Profile
              </Link>
            </span>
          ),
        },
        {
          key: '6',
          label: (
            <span className="flex text-white items-center px-4 py-2 hover:text-violet-500 transition-all cursor-pointer rounded-lg" onClick={handleLogout}>
              <FaSignOutAlt className="mr-2" /> Logout
            </span>
          ),
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div className="relative cursor-pointer" style={{zIndex: "100000000000", color: "white"}}>
        <Avatar src={image} size={32} className="mx-auto cursor-pointer" />
      </div>
    </Dropdown>
  );
};

export default ProfileDropDown;
