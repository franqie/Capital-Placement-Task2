import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Mainpage from './components/mainpage/Mainpage';

const App:React.FC = ()=> {
  return (
    <div className="app">
      <Sidebar />
      <Mainpage />
    </div>
  );
}

export default App;
