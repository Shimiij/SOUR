import React, { useState } from 'react';
import "./main.css"
//import {Link, Route, Routes} from "react-router-dom"

function Main() {
    
    const [menuVisible, setMenuVisible] = useState(false);

    const handleButtonClick = () => {
        setMenuVisible(!menuVisible);
    };    
    
    return (
          <>
        <div className="banner">
            <button
                type="button"
                className={`BannerButton ${menuVisible ? "active" : ""}`}
                onClick={handleButtonClick}>
                    University
            </button>
            <ul className={`dropdown-menu ${menuVisible ? "active" : ""}`}>
                <li><a href="#">Novi Sad</a></li>
                <li><a href="#">Beograd</a></li>
                <li><a href="#">Nis</a></li>
            </ul>
        </div>


        <div className = "MainText">
            <h2>Searching <br/> for RSO?</h2>
        </div>


        <div className="RSOSearchBox">
            <input type="text" className="TextBoxA" name="myText" placeholder="Search RSO's"/>
        </div>
        <div className="CATSearchBox">
            <input type="text" className="TextBoxA" name="myText" placeholder="Search by Category"/>
        </div>
        <div className="FACSearchBox">
            <input type="text" className="TextBoxA" name="myText" placeholder="Search by Faculty"/>
        </div>


        <div className="BelowSearch">
            <div className="buttonContainer"> <button className="Search-Button"></button> </div>
            <button type="button" className="RegButton"> Register a <br/> club? </button>
        </div>
        </>
    );
}



/*

*/

export default Main;