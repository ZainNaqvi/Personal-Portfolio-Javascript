import React, { useContext } from 'react';
import admin from '../admin.jpg'
import { Link, useHistory } from 'react-router-dom';
import newcontext from '../context/newcontext';

const Navbar = () => {
  const history = useHistory();
  const context = useContext(newcontext);
  const {getNotes} = context;
  const handlelogout = () => {
    getNotes();
    localStorage.removeItem("token");
    history.push("/login");
  };

  
  return <div>

     <header className="fixed top-0 z-50 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 w-full border-b-2">
    <div className="flex-1 flex justify-between items-center ">
      <Link to="/home">

        <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src={admin} alt="Andy Leverenz"/>
    
    </Link>
  
  </div>

   <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
     <title>menu</title>
     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input className="hidden" type="checkbox" id="menu-toggle" />

  <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/home">Home</Link></li>
        <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/about">AboutUs</Link></li>
        <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/contact">Contact</Link></li>
        {/* <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" to="#">Support</Link></li> */}
        {!localStorage.getItem("token") ? (
           <form className='flex'>
        <li className='mx-2'> <Link className="  block border-b-2 border-transparent hover:border-indigo-400" to="/login"><button className="   p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Login</button></Link> </li>
        <li> <Link className=" block border-b-2 border-transparent hover:border-indigo-400" to="/signup"><button className=" p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Register</button></Link> </li></form>)
        :(<>
            <li> <Link className=" block mx-2 border-b-2 border-transparent hover:border-indigo-400" onClick={handlelogout}><button className=" p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Logout</button></Link> </li>
            <li className='hidden'> <Link className=" block mx-2 border-b-2 border-transparent hover:border-indigo-400"to="/welcome"><button className=" p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800"></button></Link> </li>
       </>     )
      
        }
        
      </ul>
    </nav>
 

  </div>

  </header>

    </div>

};

export default Navbar;
