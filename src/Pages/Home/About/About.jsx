import React from 'react';
import aboutPerson from '../../../assets/images/about_us/person.jpg';
import aboutParts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='container p-4 xl:p-0 mx-auto mt-20 md:mt-[130px]'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div className='h-48 md:h-fit'>
                    <div className='rounded-lg mr-14'>
                        <img className='w-full rounded-lg' src={aboutPerson} alt="" />
                    </div>
                    <div className='bottom-20 w-[150px] h-[150px] left-36 md:bottom-20 md:left-40 md:w-[180px] md:h-[180px] lg:w-[327px] lg:h-[322] relative lg:left-40 xl:left-72 lg:bottom-36 border-8 rounded-lg border-white'>
                        <img className='w-full' src={aboutParts} alt="" />
                    </div>
                </div>
                <div>
                    <h6 className='text-xl text-[#FF3811] font-semibold mb-5'>About Us</h6>
                    <h2 className='text-2xl md:text-[32px] lg:text-[45px] font-bold leading-tight mb-7'>We are qualified & of experience in this field</h2>
                    <p className='text-base text-[#737373] font-normal leading-7 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-base text-[#737373] font-normal leading-7 mb-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Link className='px-6 py-3 rounded-lg bg-[#FF3811] text-white font-semibold'>Get More Info</Link>
                </div>
            </div>
        </div>
    );
};

export default About;