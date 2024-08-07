import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { IoSearch, IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, onClick, children }) => (
    <NavLink to={to} className="text-white hover:text-gray-200" onClick={onClick}>
        {children}
    </NavLink>
);
const handleLogOut =() =>{
    localStorage.clear();
    window.location.reload()
}

const MobileMenu = ({ isOpen, toggleMenu }) => (
    isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
                {["movie", "tvshows", "people"].map((item) => (
                    <NavLinkItem key={item} to={`./${item}`} onClick={toggleMenu}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavLinkItem>
                ))}
                {["Discussion", "Leaderboard", "Support", "API"].map((item) => (
                    <a key={item} href="#" className="text-gray-600 hover:text-gray-800">
                        {item}
                    </a>
                ))}
            </nav>
        </div>
    )
);

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [localStorageData, setLocalStorageData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("logindetail");
        if (data) {
            try {
                setLocalStorageData(JSON.parse(data));
            } catch (error) {
                console.error('Error parsing localStorage data', error);
            }
        }
    }, []);

    return (
        <header className="bg-black shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className='flex'>
                    <NavLink to="./">
                        <img className='lg:w-2/3 md:w-2/3 hidden sm:block' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                    </NavLink>
                    <nav className="hidden md:flex space-x-3 font-semibold w-2/3">
                        {["movie", "tvshows", "people"].map((item) => (
                            <NavLinkItem key={item} to={`./${item}`}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </NavLinkItem>
                        ))}
                        <NavLinkItem to="#" onClick={() => setIsOpen(!isOpen)}>More</NavLinkItem>
                    </nav>
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        <IoMenu className="w-6 h-6 text-2xl" />
                    </button>
                    <MobileMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
                </div>
                <div className='flex justify-around'>
                    <NavLink to="./" className='block lg:hidden md:hidden'>
                        <img className='w-1/4' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' />
                    </NavLink>
                    <div className='text-white flex items-center lg:px-20 md:px-2 sm:p-2 gap-4'>
                        <FaPlus className='lg:text-xl md:text-xl sm:text-xl' />
                        <RiEnglishInput className='bg-black border border-white rounded-sm p-1 text-2xl hidden sm:block' />
                        {localStorageData ? 
                            <div className='flex gap-4 items-center'>
                                <p className='text-lg'>{localStorageData.username}</p>
                                <button onClick={()=>handleLogOut()} className='text-lg font-bold'  > Log Out</button>
                            </div>
                         : 
                            <div className='flex gap-3'>
                                <NavLink to='/loginform' className='text-lg font-bold'>Login</NavLink>
                                <NavLink to='/signupform' className='text-lg font-bold'>Join TMDB</NavLink>
                            </div>
                        }
                        <IoSearch className='text-xl' />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
