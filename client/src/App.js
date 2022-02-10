import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import React, {  useState } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from './components/About';

import Contact from './components/Contact';
import Home from './components/Home';
import StateContext from './context/StateContext';
import Welcome from './components/Welcome';


function App() {

  


  return (
    <> 
    <StateContext >
    <Router>
   
  <Navbar/> 

 
    
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
         
        </Switch>


</Router>

</StateContext>
</>

  );
}

export default App;
