export interface IFlightInfo {
  key: string;
  srcImage: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: string;
  airline: string;
  time: string;
  trip: string;
  value: string;
  tax: string;
  code: string;
}

export type IListFlightInfo = IFlightInfo[];

export interface IIdSelectedFlight {
  departure: string;
  return: string;
}
