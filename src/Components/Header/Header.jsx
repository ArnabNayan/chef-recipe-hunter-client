import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>
       logOut()
       .then(result=>{})
       .catch(error=>console.error(error))

       const location=useLocation();
       const activeClass = "text-blue-500 font-bold";
    return (
       
        <nav className=" navbar bg-slate-200 font-bold text-amber-700  flex flex-col sm:flex-row justify-between items-center px-4 py-2">
            <div>
                <a className="btn btn-ghost normal-case text-5xl font-extrabold ">Food Master</a>
            </div>

            <div className='text-xl text-gray-700 lg:me-20 sm:text-center flex flex-col sm:flex-row gap-4 sm:gap-10 '>
                <Link to="/" className={
            location.pathname === "/"
              ? `${activeClass} underline`
              : "no-underline"
          }>Home</Link>
                <Link to="/login"  className={
            location.pathname === "/login"
              ? `${activeClass} underline`
              : "no-underline"
          }>Login</Link>
                <Link to="/Blog"className={
            location.pathname === "/Blog"
              ? `${activeClass} underline`
              : "no-underline"
          }>Blog</Link>
                {user &&  <><button onClick={handleLogOut}>Signout</button><img className="w-14 rounded-full lg:ms-36" src="/images/player-1.png" /></>}
            </div>
        </nav>



    );
};

export default Header;