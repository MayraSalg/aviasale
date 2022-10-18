export interface ITicket{
    price: number;
    stop: boolean;
    loading:boolean;
    error:string;
}

export interface ServerResponse<T>{
    price:number,
    carrier:string,
    destination:string,
    duration:number,
    tickets:T[],
    searchId:number
}