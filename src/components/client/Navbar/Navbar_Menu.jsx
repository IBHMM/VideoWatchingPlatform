import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../../assets/icons/logo.png';
import { useEffect, useState } from 'react';
import arrow from '../../../assets/icons/arrow.png';
import { Features } from './Navbar';

export const Navbar_Menu = ({ setMenu }) => {
    const [featuresVisible, setFeaturesVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.id !== 'menu' || e.target.id == "menu_") {
                setMenu(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='navbar_menu absolute top-0 left-0 animate-open' id='menu'>
            <div className='navbar_div gap-[50px]' id='menu'>
                <Link to={'/client/home'} className="flex items-center justify-start gap-[1px] cursor-pointer" id='menu'>
                    <img src={logo} alt="Flicky Logo" className='w-[70px] h-[60px]' id='menu' />
                    <p className='text-[30px] text-white font-semibold' id='menu'>
                        FLICKY
                    </p>
                </Link>

                <div className='flex flex-col items-start justify-start gap-[30px] text-white ml-[20px] font-bold cursor-pointer' id='menu'>
                    <Link to={'/client/home'} className='hover:text-violet-500 text-[15px]' id='menu'>HOME</Link>
                    <div 
                        className='hover:text-violet-500 flex items-center justify-start gap-[0px] text-[15px]'
                        onClick={() => setFeaturesVisible(!featuresVisible)}
                        id='menu'
                    >
                        FEATURES 
                        <img src={arrow} alt="" className='hover:text-violet-500 w-[23px] h-[23px] mt-[-2px]' id='menu' />
                    </div>
                    {featuresVisible && <Features id='menu' />}
                    <div className='hover:text-violet-500 text-[15px]' id='menu'>
                        VIDEOS
                    </div>
                    <div className='hover:text-violet-500 text-[15px]' id='menu'>
                        CONTACT US
                    </div>
                    <div className='hover:text-violet-500 text-[15px]' id='menu'>
                        ABOUT US
                    </div>
                    <button className='subscribe-button' id='menu'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};
