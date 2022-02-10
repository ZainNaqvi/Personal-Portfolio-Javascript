import React  from 'react';
import admin2 from '../admin2.jpg'
import { scroller } from "react-scroll";
const Card = () => {
  const handleclick = () => {


    scroller.scrollTo('scrollkaro', {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset:1300,
    });
 

  };

  const today = new Date();
  const date =today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear() ;

  return <div>
     <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0 scrollkaro">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
            <img className="xl:max-w-6xl" src={admin2} alt=""/>
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div className="flex justify-between font-bold text-sm">
                    <p></p>
                    <p className="text-gray-400">{date}</p>
                </div>
                <h2 className="text-3xl font-semibold mt-4 md:mt-10">
                  Zain Haider Naqvi
                </h2>
                <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
                    Welcome to my Real time web app in React JS.
                </p>

                <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800"onClick={handleclick}>Feed Back</button>
              
            </div>
        </section>
    </section>
  </div>;
};

export default Card;
