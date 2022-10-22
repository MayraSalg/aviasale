export interface ITicket{
    price: number;
    stop: boolean;
    loading:boolean;
    error:string;
    ticket: [];
    destination:string;
    origin:string;
    segments:any
}

export interface ServerResponse<T>{
    price:number,
    carrier:string,
    destination:string,
    tickets:T[]
}