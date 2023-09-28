import React from 'react';
import Header from '../header/Header';
import Sidepanel from '../sidepanel/Sidepanel';
import Maincontent from '../maincontent/Maincontent';

const Mainpage:React.FC = () => {
  return (
    <div className="mainpage">
        <Header />
        <div className="content">          
          <Sidepanel />
          <Maincontent />
        </div>
    </div>
  )
}

export default Mainpage;