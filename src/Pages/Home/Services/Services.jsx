import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-14 md:mt-5 p-4'>
            <div className="text-center">
                <h6 className='text-xl font-bold mb-4 text-[#FF3811]'>Service</h6>
                <p className='w-full md:w-[717px] mx-auto text-[#737373] text-base font-normal'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='container mx-auto p-4 xl:p-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service =>
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    )
                }
            </div>
            <div className='mt-12 flex justify-center'>
                <Link className='px-6 py-3 rounded-lg border-[1px] border-[#FF3811] text-lg font-semibold bg-white hover:bg-[#FF3811] text-[#FF3811] hover:text-white'>More Services</Link>
            </div>
        </div>
    );
};

export default Services;