import React from 'react'

import S7 from '../App/S7.png';
import {ITicket} from '../Models/Models';

interface TicketProps{
    ticket:ITicket
}


export default function Ticket({ticket}:TicketProps){
  return(
    <div className="ticket">
      <div className="ticket_header">
        <div className="ticket_price">{ticket.price}</div>
        <div className="ticket_logo">
          <img src={S7} alt="ticket logo"></img>
        </div>
      </div>
      <div className="ticket_data-wrapper">
        <div className="ticket_data">
          <div className="ticket_data-time">
            <p className="ticket_data-time_direction">MOS-LED</p>
            <p>10:45-13:50</p>
          </div>
          <div className="ticket_data-time">
            <p className="ticket_data-time_direction">В пути</p>
            <p>4 часа</p>
          </div>
          <div className="ticket_data-time">
            <p className="ticket_data-time_direction">2 пересадки</p>
            <p>HKG,JPN</p>
          </div>
        </div>
        <div className="ticket_data">
          <div className="ticket_data-time">
            <p className="ticket_data-time_direction">MOS-LED</p>
            <p>10:45-13:50</p>
          </div>
          <div className="ticket_data-time">
            <p className="ticket_data-time_direction">В пути</p>
            <p>7:30 ч</p>
          </div>
          <div className="ticket_data-time">
            <p className="ticket_data-time_direction">1 пересадка</p>
            <p>JPN</p>
          </div>
        </div>
      </div>
    </div>
  )
}