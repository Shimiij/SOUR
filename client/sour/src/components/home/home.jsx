import React, { useState } from 'react';
import "./home.css"


function Home() {
    return(   
    <>
    <div>
      <main>
        <section className="hero">
          <h1>Welcome to Our Website</h1>
          <p>Discover the best services for all your needs.</p>
          <a href="#" className="btn">Get Started</a>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Feature 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <h2>Feature 2</h2>
            <p>Nulla eget purus eget massa blandit pulvinar.</p>
          </div>
          <div className="feature">
            <h2>Feature 3</h2>
            <p>Etiam commodo nunc auctor lorem varius, a posuere nisi aliquet.</p>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>Have any questions? Get in touch with us.</p>
          <a href="#" className="btn">Contact Now</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Website. All rights reserved.</p>
      </footer>
    </div>
    </>
    );
};
    
export default Home;