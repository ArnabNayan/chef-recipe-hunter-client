import React from 'react';

const Home = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-screen  ">
        
          
          <div
                className="bg-cover backdrop-brightness-20 bg-center h-screen w-full"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/525217573/photo/rugby-cricket-and-football-action.jpg?s=612x612&w=0&k=20&c=0_jTwSKXzkhURkUrg4_s44oSBC6iDYA52hbUuAaQZqo=')",
                }}
            >  <div className="w-full h-full  items-center 
        bg-slate-500/30 backdrop-brightness-75">

               <div className='pt-60'> 
                <h1 className='flex justify-center items-center  text-6xl text-white font-extrabold '>Player Profiling </h1></div>
                    <p className='text-2xl text-white text-center mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate exercitationem illum aliquid eos magnam impedit ipsa minus ullam. Exercitationem sunt eveniet repellendus, saepe et blanditiis at maxime odio nemo esse.</p>
                </div>
            </div>

         
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
          
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-screen">
          <img src="/public/images/news-2.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
      </div>
    );
};

export default Home;