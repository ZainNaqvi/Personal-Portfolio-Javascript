import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import newcontext from '../context/newcontext';
import login from '../login.jpg'

const Signup = () => {
  const history = useHistory();
    const [creaditials, setCreaditials] = useState({name:"",email:"",password:""})
    const context = useContext(newcontext);
    const {getNotes} = context;
    const handlesubmit  =async (e)=>{
      getNotes();
      e.preventDefault();
        const responce = await fetch ("/api/auth/signup",{
          method : "POST",
          headers : {
            'Content-Type':'application/json'
          },
          body:JSON.stringify({ name :creaditials.name, email :creaditials.email, password:creaditials.password})
        });
      const json =   await responce.json();
      localStorage.setItem('token',json.authtoken);
      if(json.success===true){history.push('/welcome');}
      else{
        alert("Please Enter the unique email.")
      }
      setCreaditials({name :'',email:'',password:''})
    }
    const onchange = (e)=>{
       
      setCreaditials({...creaditials,[e.target.name]: e.target.value})
  }
  const today = new Date();
  const date =today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear() ;


  return <div className=''>
    <br/>
      <hr/>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
            <img className="rounded-full h-96  hover:transition-all mx-11" src={login} alt=""/>
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div className="flex justify-between font-bold text-xl">
                    <p className='text-purple-900 '>Let's Signup</p>
                    <p className="text-gray-400">{date}</p>
                </div>
                <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
                <div className="flex justify-center">
<div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pb-8 mb-4 " onSubmit={handlesubmit}>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" onChange={onchange} name ="name" id="name"/>
    </div>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
      Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Username or email" onChange={onchange} name ="email" id="email"/>
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={onchange} name ="password" id="password"/>
      <p className="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
    <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Login</button>
    </div>
  </form>
</div>
</div>


   </p>
                  </div>
        </section>
    </section>
  
  
  </div>;
};

export default Signup;

