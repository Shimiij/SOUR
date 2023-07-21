import { Link, Routes, Route } from 'react-router-dom';
import "./register.css"



function Register() {
    
return (
<>
    <div className="registrationPage">
        <section className='container'>
            
            <div className='card'>
                <div className='card-image card-3'></div>
                <h2>Sign In</h2>
                <p>Sign in to be able to view all affiliated groups, reserve your spot in events and ___</p>
                <a href="">Sign In</a>
            </div>

            <div className='card'>
                <div className='card-image card-2'></div>
                <h2>Club Registration</h2>
                <p>Want to register a club with the SOUR Search Engine?</p>
                <Link to="/form" className="RegisterB">
                    Register Club
                </Link>
            </div>

            <div className='card'>
                <div className='card-image card-1'></div>
                <h2>Title</h2>
                <p>Text</p>
                <a href="">READ MORE</a>
            </div>


        </section>
    </div>


</>
);
}

export default Register;

/*
<Form/>

<div className='card'>
    <div className='card-image card-3'></div>
    <h2>Title</h2>
    <p>Text</p>
    <a href="">READ MORE</a>
</div>
<div className='card'>
    <div className='card-image card-1'></div>
    <h2>Title</h2>
    <p>Text</p>
    <a href="">READ MORE</a>
</div>
*/