import React from 'react';
import CarouselImg1 from '../../../assets/images/homeCarousel/1.jpg'
import CarouselImg2 from '../../../assets/images/homeCarousel/2.jpg'
import CarouselImg3 from '../../../assets/images/homeCarousel/3.jpg'
import CarouselImg4 from '../../../assets/images/homeCarousel/4.jpg'

const Carousel = () => {
    return (
        <div className="relative -z-10">
            <div className="container mx-auto">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={CarouselImg1}
                            className="w-full" />
                        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={CarouselImg2}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={CarouselImg3}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={CarouselImg4}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;