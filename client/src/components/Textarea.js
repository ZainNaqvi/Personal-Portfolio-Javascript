import React, { useContext, useState } from "react";
import newcontext from "../context/newcontext";

const Textarea = (props) => {

  const [comment, setComment] = useState({name:"",comment:""})
 const context = useContext(newcontext);
 const {addComment , getNotes} = context;
  

  const handlesubmit  = (e)=>{
    e.preventDefault()
    addComment(comment.name , comment.comment); 
    getNotes();
  setComment({name:" ",comment:" "})


  }
  const onchange = (e)=>{
     
    setComment({...comment,[e.target.name]: e.target.value})
}
  return (
    <div>
      <hr />
      <div className="flex justify-center my-20">
        <div className="mb-3 w-full ">
        <h2 className="text-3xl font-semibold  mb-10 mx-4 text-purple-800">Type Your Feed Back Here...</h2>
            
        <form onSubmit={handlesubmit}>
        <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-96 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name required." onChange={onchange} name ="name" id="name" value={comment.name}/>
    </div>
          <textarea
          onChange={onchange}
         
          name = "comment"
          id = "comment"
          required
          value={comment.comment}
            className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out 
          m-0
          
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message "
          ></textarea>
            <button className="mt-2 mx-4 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
