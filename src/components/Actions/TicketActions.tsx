import axios from 'axios';

import {ticketSlices} from '../../Store/Slices/TicketSlices';
import {ITicket} from '../Models/Models';

export const fetchTickets = () => {
  return async (dispatch : any) => {
    dispatch(ticketSlices.actions.ticketFetching())

    let req = await axios.get(`https://front-test.dev.aviasales.ru/search`);
    let searchId = req.data.searchId
    let res = await axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
    let tickets: ITicket[] = await res.data.tickets
    dispatch(ticketSlices.actions.ticketFetchingSuccess(tickets))
  }
}