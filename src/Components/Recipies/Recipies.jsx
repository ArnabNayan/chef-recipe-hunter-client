import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Recipies = () => {
    const {id}=useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/chefs/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Recipies;