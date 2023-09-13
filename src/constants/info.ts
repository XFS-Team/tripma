import type { IListFlightInfo } from '@/model/flight';
import avtFlight from '/images/avt-flight.png';

export const SELECT_FLIGHT: IListFlightInfo = [
  {
    srcImage: avtFlight,
    key: '1',
    departure: '7:00AM',
    arrival: '4:15PM',
    duration: '16h 45m',
    stops: '1 stop',
    price: '$624',
    airline: 'Hawaiian Airlines',
    time: '2h 45m in HNL',
    trip: 'round trip',
    value: 'value',
    tax: '$503',
    code: 'FIG4312',
  },
  {
    srcImage: avtFlight,
    key: '2',
    departure: '8:30AM',
    arrival: '6:45PM',
    duration: '18h 15m',
    stops: '2 stops',
    price: '$699',
    airline: 'Delta Air Lines',
    time: '3h 30m in ATL, 4h 15m in LAX',
    trip: 'one way',
    value: 'premium',
    tax: '$527',
    code: 'DLG8921',
  },
];
