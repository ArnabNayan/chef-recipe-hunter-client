import React, { useEffect, useState } from 'react';
import Login from '../Layout/Login/Login';

const Blog = () => {
    const [recipic,setRecipic]=useState([])
  
   {
    useEffect(()=>{
        fetch('/public/sample.json')
        .then(res=>res.json())
        .then(data=>setRecipic(data))
    },[])
   }
  

    
    return (
        <div>
          {
            recipic.map(recipics=><Login key={recipics.id}recipics={recipics}></Login>)
          }
        </div>
    );
};

export default Blog;