import React, { useState } from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./profile.css"


function Profile() {

  return(   
  <>
  <div className="homePage">

  <div className='E1'><p>PROFILE PAGE</p></div>


    <section className='homecontainer'>

    <div className='homecard'>
        <div className='homecard-banner'>
            <Link to="/profile">
                <h2>Log-In</h2>
            </Link>
        </div>
        <p>JRecord your activities and memberships on campus to showcase your involvement.</p>
    </div>

    </section>
  </div>
  
  </>
  );
};
    
export default Profile;