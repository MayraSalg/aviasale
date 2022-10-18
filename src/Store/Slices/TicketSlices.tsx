
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITicket} from "../../components/Models/Models";

interface TicketState {
    loading:boolean,
    error:string,
    tickets:ITicket[]
}

const initialState: TicketState = {
    loading:false,
    error:"",
    tickets: []
}
interface TicketPayload {
    tickets: ITicket[]
    count: number
}

export const ticketSlices = createSlice({
    name:"ticket",
    initialState,
    reducers:{
        ticketFetching(state) {
            state.loading = true
        },
        ticketFetchingSuccess(state, action: PayloadAction<ITicket[]>) {
            state.tickets = action.payload
            state.loading = false
            state.error = ''
        },
        ticketFetchingError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },

    }
})

export default ticketSlices.reducer