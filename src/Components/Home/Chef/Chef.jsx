/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Chef = ({chef}) => {
  // eslint-disable-next-line react/prop-types
  const{id, picture,name,years_of_experience,num_of_recipes,likes}=chef;

    return (
        <>
         <div className="card w-96 bg-slate-200 shadow-xl  m-12">
  <figure><img className='w-full h-96' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold text-2xl text-slate-700">{name}</h2>
    <p className='text-lg'>Experience:{years_of_experience} years</p>
    <p className='text-lg'>Number of Recipies:{num_of_recipes}</p>
    <p className='text-lg'>Likes:{likes}</p>
    <div className="card-actions justify-start">

     <Link to={`/recipe/${id}`}> <button className="btn btn-warning text-sm text-slate-100">View Recipies</button></Link>
    </div>
  </div>
</div>   
        </>
    );
};

export default Chef;