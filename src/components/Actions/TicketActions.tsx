import axios from 'axios';

import {ticketSlices} from '../../Store/Slices/TicketSlices';
import {ITicket} from '../Models/Models';

export const fetchTickets = () => {
  return async (dispatch : any) => {
    dispatch(ticketSlices.actions.ticketFetching())

    const req = await axios.get(`https://front-test.dev.aviasales.ru/search`);
    const searchId = req.data.searchId
    const res = await axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
    const tickets: ITicket[] = await res.data.tickets
    dispatch(ticketSlices.actions.ticketFetchingSuccess(tickets))
  }
}