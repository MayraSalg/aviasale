import React, {useEffect, useState} from 'react';
import img from './Logo.png';
import Checkboxer from "../CheckBox/CheckBox";
import Filter from "../Filter/Filter";
import Ticket from "../Tickets/Ticket";
import {setupStore} from "../../Store/Store";
import {fetchTickets} from "../Actions/TicketActions";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {Button} from "antd";
import {CheckboxValueType} from "antd/es/checkbox/Group";


function App() {
    //document.body.addEventListener('click',e => console.log(e.target))
    const dispatch = useAppDispatch()
    let ticketsPerPage = 5;
    const [next, setNext] = useState(ticketsPerPage)
    const handleMoreImage = () => {
        setNext(next + ticketsPerPage);
    };
    const simpleCallback : any = (input : any) => {
        console.log(input)
    }
    const {error, loading, tickets} = useAppSelector(state => state.ticket)
    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])
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
                                <Checkboxer />
                            </div>
                        </div>
                        <Filter></Filter>
                        <div className="tickets">
                            {
                                tickets.slice(0, next).map((ticket, index) => {
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
