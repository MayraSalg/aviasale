import React, {useEffect, useState} from 'react';
import img from './Logo.png';
import Checkboxer from "../CheckBox/CheckBox";
import Filter from "../Filter/Filter";
import Ticket from "../Tickets/Ticket";
import {fetchTickets} from "../Actions/TicketActions";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {Button} from "antd";
import Loader from "../Loader/Loader";



function App() {
    const dispatch = useAppDispatch()
    let ticketsPerPage = 5;
    const [next, setNext] = useState(ticketsPerPage)
    const handleMoreImage = () => {
        setNext(next + ticketsPerPage);
    };
    const {error, loading, tickets, filters} = useAppSelector(state => state.ticket)
    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])
    //console.log(tickets)
    //console.log(filters)
    let load = loading
    return (
        <>
            <div className="App">
                <div className="App-wrapper">
                    <div className="header">
                        <img src={img} alt="logo" className="logo"></img>
                    </div>
                    <div className="main">
                        <div className="sidebar">
                            <div className="sidebar_section">
                                <h3>Количество пересадок</h3>
                                <Checkboxer/>
                            </div>
                        </div>
                        <Filter></Filter>
                        { loading? <Loader/> : null}
                        <div className="tickets">
                            {
                                tickets
                                    .filter(t => filters.includes(t.segments[0].stops.length) && filters.includes(t.segments[1].stops.length))
                                    .slice(0, next)
                                    .map((ticket, index) => {
                                        return <Ticket ticket={ticket} key={index}></Ticket>
                                    })

                            }

                        </div>

                        {next < tickets.length && (
                            <Button
                                className="mt-4"
                                onClick={handleMoreImage}
                            >
                                Показать ещё 5 билетов
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
