import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import React, { useContext, useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { RiMenu3Line } from 'react-icons/ri';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <nav className='w-full drop-shadow-md px-8 py-3 shadow-md bg-white'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <ul className='hidden lg:flex gap-5 text-lg font-semibold'>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    {
                        user?.email ? <li><Link to="/bookings">My Bookings</Link></li> : ''
                    }
                </ul>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-4 items-center'>
                        <MdOutlineShoppingBag className='text-2xl hover:text-[#FF3811] delay-100' />
                        <IoMdSearch className='text-2xl hover:text-[#FF3811]' />
                    </div>
                    <Link className='hidden lg:block px-7 py-4 rounded text-[#FF3811] border-spacing-1 border-2 border-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white  delay-100'>Appointment</Link>
                    <RiMenu3Line onClick={() => setIsOpenMenu(!isOpenMenu)} className='text-2xl lg:hidden' />
                    {/* avatar */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><RxAvatar className='text-xl bold text-[#FF3811]' /></div>
                        <ul tabIndex={0} className="dropdown-content mt-6 menu bg-white rounded-box z-[1] w-28 p-2 shadow">
                            {
                                user?.email ? <li><Link onClick={handleSignOut}>Sign out</Link></li>
                                    :
                                    <li><Link to="/signin">Sign In</Link></li>
                            }
                        </ul>
                    </div>
                </div>

                <div className={`absolute lg:hidden z-50 p-10 top-24 left-0 bg-white w-full font-semibold transform transition-transform gap-6 text-lg ${isOpenMenu ? "block" : "hidden"}`}
                    style={{ transition: "transform 0.3s ease, opacity 0.3s ease " }}
                >
                    <ul className="list-none mb-4">
                        <li className='mb-3'><Link to="/">Home</Link></li>
                        <li className='mb-3'><a href="#">About</a></li>
                        <li className='mb-3'><a href="#">Services</a></li>
                        <li className='mb-3'><a href="#">Blog</a></li>
                        <li className='mb-3'><a href="#">Contact</a></li>
                        {
                            user?.email ? <li><Link to="/bookings">My Bookings</Link></li> : ''
                        }
                    </ul>
                    <Link to="/signin" className='block w-44 lg:hidden px-7 py-4 rounded text-[#FF3811] border-spacing-1 border-2 border-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white delay-100'>Appointment</Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><RxAvatar className='text-xl bold text-[#FF3811]' /></div>
                        <ul tabIndex={0} className="dropdown-content mt-6 menu bg-white rounded-box z-[1] w-28 p-2 shadow">
                            {
                                user?.email ? <li><Link onClick={handleSignOut}>Sign out</Link></li>
                                    :
                                    <li><Link to="/signin">Sign In</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;