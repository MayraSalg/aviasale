import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import ticketSlices from "./Slices/TicketSlices"; //возмлжна ошибка и надо импорт тикетредьюсер


const rootReducer = combineReducers({
    ticket:ticketSlices
})
export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']