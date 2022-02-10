import React, { useContext, useEffect } from 'react';
const Comments = (props) => {
 
   
    const { name,comment, date} = props;
  const event = new Date(date);
  const options = {  year: 'numeric', month: 'long', day: 'numeric' };
  
  return <div>
      <hr/>
        {/* <section className="relative px-10 my-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-4 "> */}
            <div className="content hover:shadow-2xl my-10 hover:-translate-y-4 transform duration-500 bg-slate-100 p-2 pt-8 md:p-12 pb-12   max-w-lg w-96 right-5 ">
                <div className="flex justify-between font-bold text-sm">
                    <p>Your Feed back</p>
                    <p className="text-gray-400"> {event.toLocaleDateString('de-DE', options) }</p>
                </div>
                <h2 className="text-3xl font-semibold mt-4 md:mt-10"> {name}</h2>
                <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">{comment}</p>
            </div>
        {/* </section> */}
  
  </div>;
};

export default Comments;
