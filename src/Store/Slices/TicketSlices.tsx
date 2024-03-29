import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CheckboxValueType} from 'antd/es/checkbox/Group';

import {ITicket} from '../../components/Models/Models';


interface TicketState {
    loading: boolean,
    error: string,
    tickets: ITicket[],
    filters: number[],
    sort:any
}

const initialState: TicketState = {
  loading: false,
  error: '',
  tickets: [],
  filters: [0, 1, 2, 3],
  sort:[]
}

export const ticketSlices = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
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
    ticketsFilter(state, action: PayloadAction<CheckboxValueType[]>) {
      const numbers: number[] = [];
      action.payload.forEach(filter => {
        switch (filter) {
          case 'Без пересадок':
            numbers.push(0);
            break;
          case '1 пересадка':
            numbers.push(1);
            break;
          case '2 пересадки':
            numbers.push(2);
            break;
          case '3 пересадки':
            numbers.push(3);
            break;
          case '':
            numbers.push(0, 1, 2, 3)
            break;
        }
      });
      state.filters = action.payload.length > 0 ? numbers : [0, 1, 2, 3];
    },
    ticketsSortCheapest(state){
      state.tickets = state.tickets.sort((a, b) => a.price - b.price);
    },
    ticketsSortFastest(state){
      state.tickets = state.tickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    },
    ticketsSortOptimal(state){
      state.tickets = state.tickets.sort((a, b) => {
        const price = Math.floor(a.price / 2) + a.segments[0].duration;
        const duration = Math.floor(b.price / 2) + b.segments[0].duration;
        return price - duration;
      });
    }
  }
})

export default ticketSlices.reducer
