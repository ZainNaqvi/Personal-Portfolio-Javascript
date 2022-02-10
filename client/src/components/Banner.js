import React from 'react';
import admin from '../admin.jpg'
const Banner = () => {
  
  return <div className=''>
 
<section className="relative block" style={{ height: "500px" }}>
<div
  className="absolute top-0 w-full h-full bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
  }}
>
  <span
    id="blackOverlay"
    className="w-full h-full absolute opacity-50 bg-black"
  ></span>
</div>
<div
  className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
  style={{ height: "70px" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-gray-300 fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>
</section>
<section className="relative py-16 bg-gray-300">
<div className="container mx-auto px-4">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <div className="relative">
         
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
          <div className="py-6 px-3 mt-32 sm:mt-0">
            <button
              className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
             Read More
            </button>
          </div>
        </div>
        
      </div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
        <img className="rounded-xl h-96  hover:transition-all mx-11" src={admin} alt=""/>
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
    
      Zain Haider Naqvi
        </div>
        <div className="mb-2 text-gray-700 mt-10">

          I'm full Stake Developer.
        </div>
        <div className="mb-2 text-gray-700">
    @hadi.com
        
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-gray-300 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Welcome to My Web App. I am full Stake Developer. I am an experienced React JS developer expert in developing user-friendly websites.
            </p>
            <a
              href="#pablo"
              className="font-normal text-pink-500"
              onClick={e => e.preventDefault()}
            >
              Show more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

     
  </div>;
};

export default Banner;


