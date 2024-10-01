import { BiPhoneCall } from "react-icons/bi";
import { SlCalender, SlLocationPin } from "react-icons/sl";

const ContactBox = () => {
    return (
        <div className='container mt-20 md:mt-[130px] mx-auto flex flex-wrap justify-evenly bg-[#151515] px-6 md:px-[72px] py-24 rounded-lg'>
            <div className='flex gap-5 items-center'>
                <div>
                    <SlCalender className="text-8 md:text-[40px] text-[#FF3811]" />
                </div>
                <div>
                    <p className='text-base font-medium text-white'>We are open monday-friday</p>
                    <h5 className='text-lg font-medium md:text-2xl md:font-bold text-white'>7:00 am - 9:00 pm</h5>
                </div>
            </div>
            <div className='flex gap-5 items-center mt-5 md:mt-0'>
                <div>
                    <BiPhoneCall className="text-8 md:text-[40px] text-[#FF3811]" />
                </div>
                <div>
                    <p className='text-base font-medium text-white'>Have a question?</p>
                    <h5 className='text-lg font-medium md:text-2xl md:font-bold text-white'>+2546 251 2658</h5>
                </div>
            </div>
            <div className='flex gap-5 items-center mt-5 lg:mt-0'>
                <div>
                    <SlLocationPin className="text-8 md:text-[40px] text-[#FF3811]" />
                </div>
                <div>
                    <p className='text-base font-medium text-white'>Need a repair? our address</p>
                    <h5 className='text-lg font-medium md:text-2xl md:font-bold text-white'>Liza Street, New York</h5>
                </div>
            </div>
        </div>
    );
};

export default ContactBox;