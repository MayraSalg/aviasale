import axios from "axios";
import TicketSlices, {ticketSlices} from "../../Store/Slices/TicketSlices";


export const fetchTickets = () => {

        return async (dispatch: any) => {
            dispatch(ticketSlices.actions.ticketFetching())
            let req = await axios.get(`https://front-test.dev.aviasales.ru/search`);
            let searchId = req.data.searchId
            let res =  await axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
            let res2 = res.data
            dispatch(ticketSlices.actions.ticketFetchingSuccess({
                tickets:res.data.tickets,
                error:""
            }))
        }


}