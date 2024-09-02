import React, { useEffect, useState } from 'react';
import { FaUsers, FaUserTie, FaFilm, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import './sidebar.css';
import { useLogoutMutation } from '../../../../redux/api/Authentication';

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [logout, {isSuccess, isError}] = useLogoutMutation();
    const location = useLocation();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        if (window.innerWidth <= 700) {
        setIsOpen(false);
        }
    };

  const handleLogout = async () => {
    try {
        logout();
    } catch {
        message.error('Logout failed. Please try again.');
    }
  };

  useEffect(() => {
    if (isError) {
        message.error('Logout failed. Please try again.');
    }

    if (isSuccess) {
        localStorage.removeItem('aToken');
        localStorage.removeItem('rToken');
        message.success('Logout successful.');
        navigate('/client/registration/signin');
    }
  }, [isSuccess, isError])

  return (
    <>
      <div className={`sidebar ${isOpen ? '' : 'closed'} fixed`}>
        <div className="text-center text-2xl font-bold mb-8">
          <span className="text-gray-400">My</span> Admin
        </div>

        <div className="flex flex-col space-y-6">
          <div onClick={handleClose}>
            <SidebarItem
              icon={<FaTachometerAlt />}
              text="Dashboard"
              to="/admin/dashboard"
              isActive={location.pathname === '/admin/dashboard'}
            />
          </div>
          <div onClick={handleClose}>
            <SidebarItem
              icon={<FaUsers />}
              text="Users"
              to="/admin/users"
              isActive={location.pathname === '/admin/users'}
            />
          </div>
          <div onClick={handleClose}>
            <SidebarItem
              icon={<FaUserTie />}
              text="Actors"
              to="/admin/actors"
              isActive={location.pathname === '/admin/actors'}
            />
          </div>
          <div onClick={handleClose}>
            <SidebarItem
              icon={<FaFilm />}
              text="Movies"
              to="/admin/movies"
              isActive={location.pathname === '/admin/movies'}
            />
          </div>
        </div>

        <div className="mt-auto absolute bottom-[50px]">
          <button className="logout-btn flex items-center gap-[10px] ml-[15px] hover:text-red-500 hover:scale-105 transition-all duration-150 active:scale-110" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className={`toggle-btn`} onClick={toggleSidebar}>
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>
    </>
  );
}

function SidebarItem({ icon, text, to, isActive }) {
  return (
    <Link to={to} className={`sidebar-item ${isActive ? 'active' : ''}`}>
      {icon}
      <span>{text}</span>
    </Link>
  );
}
