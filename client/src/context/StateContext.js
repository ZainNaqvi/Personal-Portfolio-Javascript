import { useEffect, useState } from 'react';
import {useHistory}from 'react-router-dom';
import NewContext from './newcontext';
const StateContext = (props)=>{
  const history = useHistory();
//Api no 1 fetch all the users comments

const d1 = [];
const [comments, setComment] = useState(d1);
const [loading, setLoading] = useState(false);

const getNotes = async () => {
  // API Call  

  const response = await fetch(`/api/comments/fetchcomment`, {
  
    method: "GET",
  
    headers: {
      'Content-Type': 'application/json'
    },

  },
  setLoading(true) 

  )
 
  const json = await response.json();

  setComment(json);
setLoading(false)
 
 
};
const addComment = async (name , comment) => {

  // API Call
  const response = await fetch(`/api/comments/newcomment`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, comment }),
  });
  const json = await response.json();
setComment(comments.concat(json))
};

const login =async (email, password)=>{
  const responce =await fetch(`/api/auth/user/login`,{
    method : "POST",
    headers : {
      "Content-Type":'application/json'
    },
    body : JSON.stringify({ email , password})
  })
 const json = await responce.json();
console.log(json.status().json());
}



return (
    <NewContext.Provider value={{comments , addComment , getNotes ,loading , setLoading , login }}>
        {props.children}
    </NewContext.Provider>
  
)
}
export default StateContext;