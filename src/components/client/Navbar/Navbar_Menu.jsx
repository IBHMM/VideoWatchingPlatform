import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../../assets/icons/logo.png';;

export const Navbar_Menu = () => {

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
                    <Link to={'/client/home/a'} className='hover:text-violet-500 text-[15px]' id='menu'>HOME</Link>
                    <Link to={'/client/home/movies/All'} className='hover:text-violet-500 text-[15px]' id='menu'>
                        VIDEOS
                    </Link>
                    <Link to={'/client/home/contact'} className='hover:text-violet-500 text-[15px]' id='menu'>
                        CONTACT US
                    </Link>
                    <Link to={'/client/home/about'} className='hover:text-violet-500 text-[15px]' id='menu'>
                        ABOUT US
                    </Link>
                    <Link to={"/client/home/plans"} className='subscribe-button' id='menu'>
                        Subscribe
                    </Link>
                </div>
            </div>
        </div>
    );
};