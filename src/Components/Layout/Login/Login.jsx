/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
    
 
    return (
      <div className="hero min-h-screen  bg-base-200 mt-5">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email"name="email" className="input input-bordered"required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password"className="input input-bordered"required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>New to Food Master?<Link to="/register" className="label-text-alt link link-hover text-lg text-blue-500">Register</Link></p>
       
        
        </div>
      </div>
    </div>
    );
};

export default Login;