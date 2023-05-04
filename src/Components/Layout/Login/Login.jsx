/* eslint-disable react/prop-types */

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle,FaGithub } from "react-icons/fa";


const Login = () => {
  const provider=new GoogleAuthProvider()
  const githubProvider=new GithubAuthProvider()
  const {login,googleSignIn,githubSignIn}=useContext(AuthContext)
 
  const navigate=useNavigate();
  const location=useLocation();

  const from=location.state?.from?.pathname||'/';

  const handleLogin=event=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
   
   login(email,password)
   .then(result=>{
    const loggedUser=result.user
    console.log(loggedUser)
    navigate(from,{replace:true})
   })
   .catch(error=>{
    console.log(error)
   })
 
  }

  const handleGoogleSignIn=()=>{
    googleSignIn(provider)
    .then(result=>{
     const googleUser=result.user
     console.log(googleUser)
     navigate(from,{replace:true})
    })
     .catch(error=>{
       console.log(error.message)
     })
  }

  const handleGithubSignIn=()=>{
    githubSignIn(githubProvider)
    .then(result=>{
      const githubUser=result.user
      console.log(githubUser)
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

    return (
      <div className="hero min-h-screen  bg-base-200 mt-5">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email"name="email" className="input input-bordered"  required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password"className="input input-bordered" required />
            </div>
       
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className='label-text-alt link link-hover text-sm text-center'>or sign in with</p>
            <div className='mx-auto flex gap-4'>
               <p onClick={handleGoogleSignIn}className=" text-xl"><FaGoogle className='text-blue-600 '></FaGoogle></p>
             <p onClick={handleGithubSignIn} className=" text-xl"><FaGithub></FaGithub></p>
             </div>
          </form>
     
          <p>New to Food Master?<Link to="/register" className="label-text-alt link link-hover text-lg text-blue-500">Register</Link></p>
     
        
        
        </div>
      </div>
    </div>
    );
};

export default Login;