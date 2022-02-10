import React from 'react';
import admin from '../admin.jpg'
const About = () => {
  const today = new Date();
  const date =today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear() ;


  return <div>



<div
  className="absolute   top-0 w-full h-full bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"}}>

        <section className="relative px-10 md:p-0 transform duration-500 cursor-pointer ">
           
             <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                 <div className="flex justify-between font-bold text-sm">
                     <p>Zain Haider Naqvi</p>
                     <p className="text-gray-400">{date}</p>
                 </div>
               <h2 className="text-3xl font-semibold mt-4 md:mt-10">Welcome to My Web App</h2>
                 <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">I am full Stake Developer. I am an experienced React JS developer expert in developing user-friendly websites.
               
                <ul><li className='bold'> Expertise in:</li></ul>
     Next JS
    React JS
    Redux
    React Material UI
    Bootstrap 5
    Tailwind CSS
    Rest API Integration
    Node JS
 Express JS
    Mongo DB
    Build Restful API's</p>
                 <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
          More</button>
            </div>
        </section>

</div>
  </div>;
};

export default About;

