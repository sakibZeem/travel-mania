import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-hero-pattern  bg-transparent" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='hero-content flex justify-between text-white'>
                    <div className='w-1/3'>
                        <h1 className='text-8xl'>Cox's bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to="/booking"><button className='btn btn-warning'>Booking <FaArrowRight /></button></Link>
                    </div>
                    <div>
                        <div className="carousel carousel-center max-w-4xl p-4 space-x-4  rounded-box">
                            <div className="carousel-item">
                                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;