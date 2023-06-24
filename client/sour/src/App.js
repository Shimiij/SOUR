import './App.css';
import Form from './components/form/form';
import Home from "./components/home/home";
import Combinedfront from './components/combinedfront/combinedfront';
import {Link, Route, Routes} from "react-router-dom";
//import React, { useState } from 'react';
//import Main from "./components/main/main";
//import Rsolist from "./components/rsolist/rsolist";


function App() {
  return (
  <>    
    <nav >
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/form">Register</Link></li>
      </ul>
    </nav>


    <Routes>
      <Route path="/" element={<Combinedfront/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>


  </>
  );
}

export default App;


/* 
className ="banner"

  <Combinedfront/>
  <Form/>
  <Home/>
*/