import React from 'react';
import admin from '../admin.jpg'
const Footer = () => {
  return <footer className="text-center bg-gray-900 text-white relative">
  <div className="container px-6 pt-6 ">
    <div className="flex justify-center mb-6">
    <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src={admin} alt="Andy Leverenz"/>
      <a href="https://www.facebook.com/zainhaider.naqvi.58" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook-f"
        className="w-2 h-full mx-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        ></path>
        </svg>
      </a>

    </div>
</div>

  <div className="text-center " >
  
    <a className="text-whitehite" href="https://tailwind-elements.com/">
      <b>Copyright</b>  © 2022 @hadi.com</a>
  </div>
</footer>;

};

export default Footer;
