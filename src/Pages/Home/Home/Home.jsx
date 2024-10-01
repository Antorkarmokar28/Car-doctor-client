import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Services from '../Services/Services';
import ContactBox from '../ContactBox/ContactBox';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Services></Services>
            <ContactBox></ContactBox>
        </div>
    );
};

export default Home;