import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CgBookmark } from "react-icons/cg";

const Booking = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className="hero min-h-screen bg-hero-pattern  bg-transparent " >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='hero-content flex justify-between text-white'>
                    <div className='w-1/2 space-y-4'>
                        <h1 className='text-7xl'>Cox's bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    </div>
                    <form className="card-body bg-white rounded-md shadow-xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" placeholder="origin" className="input text-black font-medium bg-white input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" placeholder="destination" className="input text-black font-medium bg-white input-bordered" required />
                        </div>
                        <div className="form-control flex justify-between">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <input type="date" name="from" id="" className='input'/>
                        </div>
                        <div className="form-control flex justify-between">
                            <label className="label">
                                <span className="label-text">To</span>
                            </label>
                            <input type="date" name="to" id=""  className='input '/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Start Booking <CgBookmark /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;