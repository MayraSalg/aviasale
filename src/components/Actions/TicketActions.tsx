import axios from "axios";
import {ITicket, ServerResponse} from "../Models/Models";
import TicketSlices from "../../Store/Slices/TicketSlices";


export const fetchTickets = () => {
    return async (dispatch: any) => {
        let req = await axios.get(`https://front-test.dev.aviasales.ru/search`);
        let searchId = req.data.searchId
        let res =  await axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
        console.log(res.data)


    }
}