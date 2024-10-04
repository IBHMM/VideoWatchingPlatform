import person from '../../../assets/icons/person.png';
import logo from '../../../assets/icons/logo.png';
import menu_ from '../../../assets/icons/menu.svg';
import { Link } from 'react-router-dom';
import search from '../../../assets/icons/search.png';
import { useSelector } from 'react-redux';
import './navbar.css';
import { useState } from 'react';
import { Navbar_Menu } from './Navbar_Menu';
import { Btn_main } from '../Layout/Items/Buttons/Btn_main';
import ProfileDropDown from './Profile_Drop_Down';
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Search } from '../Search/Search';

export function Navbar() {
    const user = useSelector(store => store.user.user);
    const [open, setOpen] = useState(false);
    const [Profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false); 

    return (
        <nav className="flex w-screen items-center justify-center pt-3 pb-3 max-w-[2000px]" style={{ background: "rgb(0, 3, 28)" }}>
            <main className='flex items-center justify-between max-[500px]:w-[95%] w-[90%]'>
                {menu && <Navbar_Menu setMenu={setMenu} />}
                <div className='flex items-center justify-start gap-[30px]'>
                    <Link to={'/client/home/a'} className="flex items-center justify-start gap-[1px] cursor-pointer">
                        <img src={logo} alt="" className='mr-1' />
                        <p className='text-[30px] text-white font-semibold max-[500px]:text-[20px]'>
                            FLICKY
                        </p>
                    </Link>
                    <div className='flex items-center justify-start gap-[20px] text-white  font-bold cursor-pointer max-[1030px]:hidden'>
                        <Link to={'/client/home/a'} className='hover:text-violet-500 text-[12px]'>HOME</Link>
                        <Link to={"/client/home/movies/All"} className='hover:text-violet-500 text-[12px]'>
                            VIDEOS
                        </Link>
                        <Link to={'/client/home/contact'} className='hover:text-violet-500 text-[12px]'>
                            CONTACT US
                        </Link>
                        <Link to={'/client/home/about'} className='hover:text-violet-500 text-[12px]'>
                            ABOUT US
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-[20px]'>
                    <img
                        onClick={() => setOpen(true)}
                        src={search} alt="" 
                        className='w-[23px] h-[23px] cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90' 
                    />
                    {open && <Search setOpen={setOpen} />}
                    <div className='flex items-center justify-center gap-[5px]'>
                        {user == undefined ? 
                            <Link to={'/client/registration/signin'} className='flex items-center justify-center gap-[5px] cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90'>
                                <p className='text-white text-[12px] font-semibold'>Login</p>
                                <img src={person} alt="" className='w-[27px] h-[27px]' />
                            </Link> :
                            <ProfileDropDown image={user.thumbnail} username={user.username}/>
                        }
                    </div>
                    <img 
                        onClick={() => setMenu(!menu)}  
                        src={menu_} 
                        id='menu_'
                        alt="" 
                        className='w-[20px] h-[20px] cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90 hidden max-[1030px]:flex' 
                    />
                    {
                        (user?.subscription == "free" || !user) ? 
                        <Link className='max-[1030px]:hidden' to={"/client/home/plans"}>
                            <Btn_main text={"Subscribe"}/>
                        </Link> : 
                        user?.subscription == "diamond" ?
                        <IoDiamondOutline style={{color: "aqua", fontSize: "25px"}} className=' animate-bounce'/> : 
                        <MdOutlineWorkspacePremium style={{color: "gray", fontSize: "25px"}} className=' animate-bounce' />
                    }
                </div>
            </main>
        </nav>
    );
}

