import React, { useEffect, useState } from 'react';
import Chef from './Chef/Chef';

const Home = () => {
  const [chefs,setChefs]=useState([]);

  useEffect(()=>{
    fetch('https://b7a10-chef-recipe-hunter-server-side-arnab-nayan-arnabnayan.vercel.app/chefs')
    .then(res=>res.json())
    .then(data=>setChefs(data))
  },[])
    return (
      <>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-screen  ">
        
          
          <div
                className="bg-cover backdrop-brightness-20 bg-center h-screen w-full"
                style={{
                    backgroundImage:
                        "url('https://www.theblakeimage.com.au/wordpress/wp-content/uploads/2017/03/mrj-restaurant-hr-.jpg')",
                }}
            >  <div className="w-full h-full  items-center 
        bg-slate-700/30 backdrop-brightness-75">

               <div className='pt-60'> 
                <h1 className='flex justify-center items-center text-5xl lg:text-7xl text-yellow-200 font-bold '>Delicious Menu </h1></div>
                    <p className='text-4xl text-white text-center mt-10 font-serif'>Find your delicious food from us</p>
                    <p className='text-3xl text-yellow-400 font-semibold text-center mt-10>20% offer'>20% Offer is Available now </p>
                </div>
            </div>

         
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
          
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative  w-full h-screen">
        <div
                className="bg-cover backdrop-brightness-20 bg-center h-screen w-full"
                style={{
                    backgroundImage:
                        "url('https://www.theblakeimage.com.au/wordpress/wp-content/uploads/2017/03/mrj-restaurant-hr-15.jpg')",
                }}
            >  <div className=" w-full h-full  items-center 
        bg-slate-700/30 backdrop-brightness-75">

               <div className='pt-60'> 
               <h1 className='flex justify-center items-center text-5xl lg:text-7xl text-yellow-200 font-bold '>Tasty and Fresh Food </h1></div>
                    <p className='text-4xl text-white text-center mt-10 font-serif'>Find tasty and fresh food from us</p>
                    <p className='text-3xl text-yellow-400 font-semibold text-center mt-10>20% offer'>20% Offer is Available now </p>
                </div>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <div
                className="bg-cover backdrop-brightness-20 bg-center h-screen w-full"
                style={{
                    backgroundImage:
                        "url('https://www.theblakeimage.com.au/wordpress/wp-content/uploads/2017/03/mrj-restaurant-hr-4.jpg')",
                }}
            >  <div className="w-full h-full  items-center 
        bg-slate-700/30 backdrop-brightness-75">

               <div className='pt-60'> 
               <h1 className='flex justify-center items-center text-5xl lg:text-7xl text-yellow-200 font-bold '>Delicious  </h1></div>
               <h1 className='flex justify-center items-center text-6xl lg:text-8xl text-yellow-200 font-bold '>Breakfast  </h1>
                    <p className='text-4xl text-white text-center mt-10 font-serif'>Enjoy your delicious Breakfast here</p>
                    <p className='text-3xl text-yellow-300 font-semibold text-center '>20% Offer is Available now </p>
                </div>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
      </div>
      <hr />
      <div>

        <h2 className='mt-16 text-center text-5xl text-amber-500 font-bold'>About Our Chefs</h2><hr />
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-10'>
          {
            chefs.map(chef=><Chef key={chef.id}chef={chef}></Chef>)
          }
        </div>
      </div>
      <hr />
      <h2 className='mt-16 text-center text-5xl text-amber-500 font-bold'>Some Popular Recipe</h2>
     
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-200 lg:mt-10 lg:p-12'>
       
      <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://cdn.tasteatlas.com//images/dishes/c7492357d5cd4e9690236c9d4e81e182.jpg?w=905&h=510" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-orange-600">Amish Chicken</h1>
      <p className="py-6">Amish chicken is a traditional American poultry dish. It is made with a combination of chicken, flour, garlic powder, heavy cream, paprika, water, salt, and pepper. The chicken is dredged in flour and seasonings, and it is then covered with a combination of cream and water.</p>
     <h2 className='text-xl text-white font-bold bg-orange-400 text-center p-5 m-5'>Price:$100</h2>
    </div>
  </div>
</div>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://cdn.tasteatlas.com//images/dishes/b88e6a442b994fedae75aa54a26a79dc.jpg?w=905&h=510" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-orange-600">Varuval</h1>
      <p className="py-6">Varuval is a traditional Indian dish originating from Chettinad. It consists of spicy dry-fried pieces of chicken such as breasts or drumsticks. In order to prepare it, the masala spices such as cinnamon, cloves, fennel, coriander, cardamom, cumin, red chili, and black peppercorns are roasted in a pan until fragrant, then crushed or ground.</p>
      <h2 className='text-xl text-white font-bold bg-orange-400 text-center p-5 m-5'>Price:$100</h2>
    </div>
  </div>
</div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://cdn.tasteatlas.com//images/dishes/73ed81a724434af289eadeba5f24525c.jpg?w=905&h=510" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-orange-600">Ayam Bakar</h1>
      <p className="py-6">Ayam bakar is a traditional chicken dish originating from Indonesia, but it’s also popular in Malaysia. In order to prepare charcoal-grilled chicken, the meat is first simmered in a pot with bumbu or rempah spices, and the sauce is then reduced to a paste that’s applied to the chicken pieces before grilling.</p>
      <h2 className='text-xl text-white font-bold bg-orange-400 text-center p-5 m-5'>Price:$70</h2>
    </div>
  </div>
</div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://cdn.tasteatlas.com//images/dishes/54fc63f836bf4786a04ef1d08c90a9c3.jpg?w=905&h=510" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-orange-600">Chicken Divan</h1>
      <p className="py-6">Chicken divan is a rich casserole made with chicken pieces, almonds, broccoli, and Mornay or hollandaise sauce. In the 1950s, it was the signature dish of a New York restaurant called the Divan Parisienne, hence the name.The inventor of the dish is a chef named Anthony Lagasi, who received an award from the New York Chatham Hotel for his creation.</p>
      <h2 className='text-xl text-white font-bold bg-orange-400 text-center p-5 m-5'>Price:$120</h2>
    </div>
  </div>
</div>

</div>
<h2 className='mt-16 text-center text-5xl text-amber-500 font-bold'>About Us</h2>
<div className='flex flex-col lg:flex-row justify-around mt-20 bg-slate-300 p-10'><hr></hr>

  <div className='text-center mt-10'>
    <h2 className=' text-3xl text-center'>History</h2>
    <h2 className='text-center text-7xl'> About us</h2>
    <p className='font-serif mt-9'>Food master is a online food shop where customer can get his <br></br>favourite food,order his favourite food and we send<br></br> the food to the customer within one hour</p>
  </div>
  <div>
    <img src="https://media.licdn.com/dms/image/C4E12AQElxELpie5_Mg/article-cover_image-shrink_600_2000/0/1520043109307?e=2147483647&v=beta&t=2rieZ_1fyy_X4A44JL4Ei6dUylJEhH1VFZboNgnfep0" alt="" />
  </div>
</div>
   


      </>
    );
};

export default Home;