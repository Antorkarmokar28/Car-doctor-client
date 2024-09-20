import React from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='bg-[#151515] mt-10 px-5 py-5'>
            <div className="container mx-auto py-28 flex flex-wrap justify-between gap-6">
                <div>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                    <p className='text-[#E8E8E8] mt-5 line-clamp-6'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                </div>
                <div className='mt-10 md:mt-0'>
                    <h5 className='text-xl text-[#E8E8E8] font-semibold'>About</h5>
                    <ul className='text-[#E8E8E8] text-sm font-normal mt-10'>
                        <li className='mb-5'><a href="#">Home</a></li>
                        <li className='mb-5'><a href="#">Service</a></li>
                        <li className='mb-5'><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                    <h5 className='text-xl text-[#E8E8E8] font-semibold'>Company</h5>
                    <ul className='text-[#E8E8E8] text-sm font-normal mt-10'>
                        <li className='mb-5'><a href="#">Why Car Doctor</a></li>
                        <li className='mb-5'><a href="#">About</a></li>
                    </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                    <h5 className='text-xl text-[#E8E8E8] font-semibold'>Support</h5>
                    <ul className='text-[#E8E8E8] text-sm font-normal mt-10'>
                        <li className='mb-5'><a href="#">Support Center</a></li>
                        <li className='mb-5'><a href="#">Feedback</a></li>
                        <li className='mb-5'><a href="#">Accesbility</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;