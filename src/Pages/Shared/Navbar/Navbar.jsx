import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import React, { useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <nav className='w-full drop-shadow-md px-8 py-3 shadow-md bg-white'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <ul className='hidden lg:flex gap-5 text-lg font-semibold'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-4 items-center'>
                        <MdOutlineShoppingBag className='text-2xl hover:text-[#FF3811] delay-100' />
                        <IoMdSearch className='text-2xl hover:text-[#FF3811]' />
                    </div>
                    <Link className='hidden lg:block px-7 py-4 rounded text-[#FF3811] border-spacing-1 border-2 border-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white  delay-100'>Appointment</Link>
                    <RiMenu3Line onClick={() => setIsOpenMenu(!isOpenMenu)} className='text-2xl lg:hidden' />
                </div>
                
                <div className={`absolute flex flex-col items-center top-24 left-0 bg-white w-full font-semibold transform transition-transform gap-6 text-lg ${isOpenMenu ? "hidden" : "block"}`} 
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
                >
                    <ul className="list-none">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <Link className='block lg:hidden px-7 py-4 rounded text-[#FF3811] border-spacing-1 border-2 border-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white delay-100'>Appointment</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;