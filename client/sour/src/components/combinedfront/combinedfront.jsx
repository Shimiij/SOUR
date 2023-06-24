import Rsolist from "../rsolist/rsolist";
import Main from "../main/main";
import React, { useState } from 'react';
import "./combinedfront.css"

function Combinedfront() {

    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const handleCollapseToggle = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    const getButtonLabel = () => {
      return isCollapsed ? '>>' : '<<';
    };
  
    return (
    <>
  
    <div className={`MainPageContainer ${isCollapsed ? 'collapsed' : ''}`}>
  
      <div className={`left-column ${isCollapsed ? 'collapsed' : ''}`}>
        <Main /></div>
  
          <div className="vertical-bar">
            <button onClick={handleCollapseToggle}>
              {getButtonLabel()}
            </button>
          </div>
  
          <div className="right-column">
            <div className='scrollable-content'>
            <Rsolist /></div>
          </div>
    </div>
  
    </>
    );
  }
  
  export default Combinedfront;  