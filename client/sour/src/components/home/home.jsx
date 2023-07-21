import React, { useState } from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./home.css"


function Home() {

  return(   
  <>
  <div className="homePage">

  <div className='E1'><p>Explore Serbia</p></div>


    <section className='homecontainer'>

      <div className='homecard'>
        <div className='homecard-banner'>
        <Link to="/">
            <h2>Find Organizations</h2>
        </Link>
        </div>
        <p>Join a new organization and utilize discussion, new posts and group messaging.</p>
      </div>


      <div className='homecard'>
        <div className='homecard-banner'><h2>Attend Events (Uskoro)</h2></div>
        <p>Discover events happening on campus or in your area.</p>
      </div>
              

      <div className='homecard'>
        <div className='homecard-banner'><h2>Track Involvement (Uskoro)</h2></div>
        <p>Record your activities and memberships on campus to showcase your involvement.</p>
      </div>

      
    </section>
  </div>
  
  </>
  );
};
    
export default Home;