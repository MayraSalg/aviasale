export interface ITicket{
    price: number;
    stop: boolean;
    loading:boolean;
    error:string;
    ticket:[]
}

export interface ServerResponse<T>{
    price:number,
    carrier:string,
    destination:string,
    tickets:T[]
}