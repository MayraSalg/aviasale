import React, {useEffect} from 'react';
import img from './Logo.png';
import Checkboxer from "../CheckBox/CheckBox";
import Filter from "../Filter/Filter";
import Tickets from "../Tickets/Tickets";
import {fetchTickets} from "../Actions/TicketActions";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";


function App() {
    const dispatch = useAppDispatch()
    const {error,loading,tickets} = useAppSelector(state => state.ticket)
    useEffect(()=>{
        dispatch(fetchTickets())
    },[])

  return (
      <>
    <div className="App">
      <div className="App-wrapper">
          <div className="header">
              <img src={img} alt="logo" className="logo"></img>
          </div>

          <div className="main">
              <>
            <div className="sidebar">
                <div className="sidebar_section">
                <h3>Количество пересадок</h3>
                <Checkboxer></Checkboxer>
                </div>
            </div>
            <Filter></Filter>

              {
                  tickets.map((ticket,index)=>{
                  return <Tickets key = {index}
                                  ticket = {ticket}
                  />
              })}
              </>
          </div>

      </div>
    </div>
      </>
  );
}

export default App;
