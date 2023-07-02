import React, { useState } from 'react';
import "./home.css"


function Home() {

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
    setMenuVisible(false);
  };

    return(   
    <>

      <p>HOME</p>


    
    </>
    );
};
    
export default Home;