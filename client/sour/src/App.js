import './App.css';
import React, { useState } from 'react';
import Form from './components/form/form';
/*import Front1 from "./components/front/front";*/
import Main from "./components/main/main"
import Rsolist from "./components/rsolist/rsolist"


function App() {

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
        <Main />
      </div>
      <div className="vertical-bar">
        <button onClick={handleCollapseToggle}>
          {getButtonLabel()}
        </button>
      </div>
      <div className="right-column">
        <div className='scrollable-content'>
          <Rsolist />
        </div>
      </div>
    </div>
     

    </>
  );
}

export default App;


/* 
<Front1/>
<Form/>
*/