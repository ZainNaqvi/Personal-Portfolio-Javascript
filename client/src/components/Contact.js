import React from 'react';

const Contact = () => {
  return <div>
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
         
        </div>
        
      </div>
      <div className="text-center mt-12">
        
        <div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
            <table className='container'>
              <tr className=''>
                <td className=''>
                  name
                </td>
                <td  className=''>
                  Zain Haider
                </td>
                </tr>
            </table>
   
        </div>
        
      </div>
    </div>
  </div>
</div>
</section>
    
  </div>;
};

export default Contact;
