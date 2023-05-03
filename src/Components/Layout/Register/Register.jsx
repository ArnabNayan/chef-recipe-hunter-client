import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error,setError]=useState('')

    const handleRegister=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
        console.log(name,email,photo,password)
        setError('')

        if(password.length<6){
            setError('Your password must be at least 6 characters')
            return
        }

    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register!!!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"name="name" className="input input-bordered"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"name="email" className="input input-bordered"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL"name="photo"className="input input-bordered"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password"className="input input-bordered"required />
                <label className="label">

                  <p>Already have an Account?<Link to="/login" className="label-text-alt link link-hover text-lg text-blue-500">Login</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
             
            </form>
            <p className='text-red-500 text-lg'>{error}</p>
          </div>
        </div>
      </div>
    );
};

export default Register;