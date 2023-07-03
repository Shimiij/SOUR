import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Form from '../form/form';
import "./main.css"


function Main() {
    
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleButtonClick = () => {
      setMenuVisible(!menuVisible);
    };
  
    const handleDropdownItemClick = (item) => {
      setSelectedItem(item);
      setMenuVisible(false);
    };
    
return (
<>
    <div className='MainContainer'>
        <div className="banner">
            <button
            type="button"
            className={`BannerButton ${menuVisible ? "active" : ""}`}
            onClick={handleButtonClick}>
                University: {selectedItem ? selectedItem : "[not selected]"}
            </button>

            <ul className={`dropdown-menu ${menuVisible ? "active" : ""}`}>
                <li><a href="#" onClick={() => handleDropdownItemClick("Novi Sad")}>Novi Sad</a></li>
                <li><a href="#" onClick={() => handleDropdownItemClick("Beograd")}>Beograd</a></li>
                <li><a href="#" onClick={() => handleDropdownItemClick("Nis")}>Nis</a></li>
            </ul>
        </div>


        <div className = "MainText">
            <h2 className="fixed-text">Searching <br/> for RSO?</h2>
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
            <Link to="/form" className="RegButton">
            Register a <br /> club?
            </Link>
        </div>
    </div>
</>
); 
}

/* */

export default Main;