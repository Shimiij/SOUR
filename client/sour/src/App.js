import './App.css';
import Home from "./components/home/home";
import Form from "./components/form/form";
import Register from "./components/register/register";
import Combinedfront from './components/combinedfront/combinedfront';
import Profile from "./components/profile/profile";
import Admin from "./components/admin/admin";
import { Link, Route, Routes, NavLink} from "react-router-dom";
import React, { useState } from 'react';



function App() {
  return (
  <>    
    <nav className='NavBar'>
      <ul>
        <li><NavLink to="/"         className='Navlink'>Main    </NavLink></li>
        <li><NavLink to="/home"     className='Navlink'>Home    </NavLink></li>
        <li><NavLink to="/register" className='Navlink'>Register</NavLink></li>

      </ul>
    </nav>


    <Routes>
      <Route path="/"         element={<Combinedfront/>}/>
      <Route path="/home"     element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/form"     element={<Form/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/admin"    element={<Admin/>}/>
    </Routes>

  </>
  );
}

export default App;


/* 
  <img src='../public/images/SUPR.png/' alt="SUPR" className="suprLogo" /> { Add your image here }

  ----------------------------------------------------------------------------------------------------

  <li><NavLink to="/profile"  activeClassName="active-link" className='Navlink'>Profile </NavLink></li>
  <li><NavLink to="/admin"    activeClassName="active-link" className='Navlink'>Admin   </NavLink></li>
*/