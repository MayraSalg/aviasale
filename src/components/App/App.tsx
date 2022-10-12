import React from 'react';
import img from './Logo.png';
import Checkboxer from "../CheckBox/CheckBox";
import Filter from "../Filter/Filter";
import Tickets from "../Tickets/Tickets";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
          <div className="header">
              <img src={img} alt="logo" className="logo"></img>
          </div>
          <div className="main">
            <div className="sidebar">
                <div className="sidebar_section">
                <h3>Количество пересадок</h3>
                <Checkboxer></Checkboxer>
                </div>
            </div>
            <Filter></Filter>
            <Tickets></Tickets>
          </div>
      </div>
    </div>
  );
}

export default App;
