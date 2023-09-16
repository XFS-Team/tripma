import type { IListCartPlace, IListFlightBill } from '@/model';

export const DATA_RECOMMEND_HOTEL: IListCartPlace = [
  {
    image: '/images/card-1.png',
    name: 'The Bund',
    price: 598,
    description: 'China’s most international city',
  },
  {
    image: '/images/card-2.png',
    name: 'The Bund',
    price: 598,
    description: 'China’s most international city',
  },
  {
    image: '/images/card-3.png',
    name: 'The Bund',
    price: 598,
    description: 'China’s most international city',
  },
  {
    image: '/images/card-3.png',
    name: 'The Bund',
    price: 598,
    description: 'China’s most international city',
  },
];

export const DATA_UNIQUE_EXPERIENCES: IListCartPlace = [
  {
    image: '/images/card-4.png',
    name: 'Nihon Kimono',
    price: 39,
    description: 'Wear the national dress of Japan around the city',
  },
  {
    image: '/images/card-2.png',
    name: 'teamLab Borderless',
    price: 39,
    description: 'A modern sensory experience of light and sound',
  },
];

export const DATA_FLIGHT_DETAIL: IListFlightBill = [
  {
    description: 'Departing Flight',
    price: 251.5,
  },
  {
    description: 'Arriving Flight',
    price: 251.5,
  },
  {
    description: 'Baggage fees',
    price: 0,
  },
  {
    description: 'Seat upgrade (business)',
    price: 199,
  },
  {
    description: 'Subtotal',
    price: 702,
  },
  {
    description: 'Taxes (9.4%)',
    price: 66,
  },
];
