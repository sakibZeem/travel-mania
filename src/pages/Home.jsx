import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
    const destinations = useLoaderData();

    return (
        <div>
            <div className="hero min-h-screen bg-hero-pattern  bg-transparent" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='hero-content flex justify-between text-white'>
                    <div className='space-y-4 w-3/4'>
                        <h1 className='text-7xl'>Cox's bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach.</p>
                        <p><Link to="/booking"><button className='btn btn-warning'>Booking <FaArrowRight /></button></Link></p>
                    </div>
                    <div className="carousel carousel-center max-w-4xl p-4 space-x-4  rounded-box">
                        {
                            destinations.map(destination => <Carousel
                                key={destination.id}
                                destination={destination}>
                            </Carousel>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;