import React from 'react';
import { Link, NavLink } from 'react-router';

const Navber = () => {
    const linkList = <>
        <li><NavLink to={"/"} className={({ isActive }) => `mr-2 ${isActive ? "text-green-500 border border-green-500" : ""}`}>Home</NavLink></li>
        <li><NavLink to={"/listed-books"} className={({ isActive }) => `mr-2 ${isActive ? "text-green-500 border border-green-500" : ""}`}>Listed Books</NavLink></li>
        <li><NavLink to={"/pages-to-read"} className={({ isActive }) => `mr-2 ${isActive ? "text-green-500 border border-green-500" : ""}`}>Pages to read</NavLink></li>
    </>
    return (
        <nav className=' max-w-7xl mx-auto shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {linkList};
                        </ul>
                    </div>
                    <a className=" text-2xl font-bold">Book Vibe </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {linkList};
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn bg-green-400 text-white">Sign In</a>
                    <a className="btn bg-sky-400 text-white">Sign Up</a>
                </div>
            </div>
       </nav>
    );
};

export default Navber;