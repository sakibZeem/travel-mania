import React from 'react';
import bg from '../../assets/images/Rectangle 26.png';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from "react-icons/si";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <nav className=' bg-green-400 bg-opacity-20 '>
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost text-xl">travelMania <SiYourtraveldottv /></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><input type="text" placeholder="Search here" className=" bg-white bg-opacity-20" /></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><button className="btn glass btn-wide btn-outline btn-warning">Login</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;