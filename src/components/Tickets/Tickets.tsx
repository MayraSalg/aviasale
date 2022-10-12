import React from "react";
import S7 from '../App/S7.png'

export default function Tickets (){
    return(
        <div className="tickets">
            <div className="ticket">
                <div className="ticket_header">
                    <div className="ticket_price">13 400r</div>
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
                    </div>
                </div>
            </div>
        </div>

    )
}