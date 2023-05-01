import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
        <nav className=" navbar bg-slate-200 font-bold text-amber-700  flex flex-col sm:flex-row justify-between items-center px-4 py-2">
            <div>
                <a className="btn btn-ghost normal-case text-5xl font-extrabold ">Food Master</a>
            </div>

            <div className='text-xl text-gray-700 lg:me-20 sm:text-center flex flex-col sm:flex-row gap-4 sm:gap-10 '>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/Blog">Blog</Link>

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar lg:ms-36">
                    <div className="w-14 rounded-full">
                        <img src="/images/player-1.png" />
                    </div>


                </label>

            </div>


        </nav>



    );
};

export default Header;