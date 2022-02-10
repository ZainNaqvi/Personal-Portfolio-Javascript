import React , {useContext, useEffect, useState } from 'react';
import Banner from './Banner';
import Card from './Card';
import Comments from './Comments';
import Textarea from './Textarea';
import Footer from './Footer';
import newcontext from '../context/newcontext';
import Spinner from './Spinner';

const Home = (props) => {


  useEffect(()=>{
      getNotes(); 
     
  },[])

  const context = useContext(newcontext);
  const {comments , loading , getNotes} = context;





  
  return <div>
      <>
      <Banner/>
  
    <Card/>
 

    <div className='  container flex justify-between overflow-x-auto  '>
      {loading && <Spinner/>}
    
    { comments.map((element)=>{
  
 return <div key={element._id} className=' hover:text-gray-600 '>
   <Comments name = {element.name} comment = {element.comment} date={element.date}/>
 </div>
   
    })}

   </div>
  
    <Textarea />
    <Footer/>
      </>
  </div>;
};

export default Home;
