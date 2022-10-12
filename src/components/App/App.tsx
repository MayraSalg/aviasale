import React from 'react';
import img from './Logo.png';
import Checkboxer from "../CheckBox/CheckBox";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
          <div className="header">
              <img src={img} alt="logo" className="logo"></img>
          </div>
          <div className="main">
            <div className="sidebar">
                <Checkboxer></Checkboxer>
            </div>
            <div className="filter">1</div>
            <div className="tickets">1</div>
          </div>
      </div>
    </div>
  );
}

export default App;
