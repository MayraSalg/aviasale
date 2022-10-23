import React from "react";
import S7 from '../App/S7.png'
import {ITicket} from "../Models/Models";
import {date} from "./ConvertDate";

interface TicketProps {
    ticket: ITicket
}

export default function Ticket({ticket}: TicketProps) {
    return (
        <div className="ticket">
            <div className="ticket_header">
                <div className="ticket_price">{ticket.price}</div>
                <div className="ticket_logo">
                    <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="ticket logo"></img>
                </div>
            </div>
            <div className="ticket_data-wrapper">
                <div className="ticket_data">
                    <div className="ticket_data-time">
                        <p className="ticket_data-time_direction">{ticket.segments[0].origin}-{ticket.segments[0].destination}</p>
                        <p>{date(ticket.segments[0].date, ticket.segments[0].duration)}</p>
                    </div>
                    <div className="ticket_data-time">
                        <p className="ticket_data-time_direction">В пути</p>
                        <p>{Math.floor(ticket.segments[0].duration / 60)}h {Math.ceil(((ticket.segments[0].duration % 60) * 60) / 100)}m</p>
                    </div>
                    <div className="ticket_data-time">
                        <p className="ticket_data-time_direction">{ticket.segments[0].stops.length ? ticket.segments[0].stops.length : 'Нет'} Пересадок</p>
                        <p>{ticket.segments[0].stops + " "}</p>
                    </div>
                </div>
                <div className="ticket_data">
                    <div className="ticket_data-time">
                        <p className="ticket_data-time_direction">{ticket.segments[1].origin}-{ticket.segments[1].destination}</p>
                        <p>{date(ticket.segments[1].date, ticket.segments[1].duration)}</p>
                    </div>
                    <div className="ticket_data-time">
                        <p className="ticket_data-time_direction">В пути</p>
                        <p>{Math.floor(ticket.segments[1].duration / 60)}h {Math.ceil(((ticket.segments[1].duration % 60) * 60) / 100)}m</p>
                    </div>
                    <div className="ticket_data-time">
                        <p className="ticket_data-time_direction">{ticket.segments[1].stops.length ? ticket.segments[1].stops.length : 'Нет'} Пересадок</p>
                        <p>{ticket.segments[1].stops + " "}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}