import React from 'react';

const Home = () => {
    return (
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
                <h1 className='flex justify-center items-center  text-7xl text-yellow-200 font-bold '>Delicious Menu </h1></div>
                    <p className='text-4xl text-white text-center mt-10 font-serif'>Find your delicious food from us</p>
                    <p className='text-3xl text-yellow-400 font-semibold text-center mt-10>20% offer'>20% Offer is Available now </p>
                </div>
            </div>

         
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
          
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-screen">
        <div
                className="bg-cover backdrop-brightness-20 bg-center h-screen w-full"
                style={{
                    backgroundImage:
                        "url('https://www.theblakeimage.com.au/wordpress/wp-content/uploads/2017/03/mrj-restaurant-hr-15.jpg')",
                }}
            >  <div className="w-full h-full  items-center 
        bg-slate-700/30 backdrop-brightness-75">

               <div className='pt-60'> 
               <h1 className='flex justify-center items-center  text-7xl text-yellow-200 font-bold '>Tasty and Fresh Food </h1></div>
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
               <h1 className='flex justify-center items-center  text-7xl text-yellow-200 font-bold '>Delicious  </h1></div>
               <h1 className='flex justify-center items-center  text-8xl text-yellow-200 font-bold '>Breakfast  </h1>
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
    );
};

export default Home;