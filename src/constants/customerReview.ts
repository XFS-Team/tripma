import type { IListCustomerReview } from '@/model';
import avtImage from '/images/avatar.png';

export const LIST_CUSTOMER_REVIEW: IListCustomerReview = [
  {
    name: 'Yifei Chen',
    avatar: avtImage,
    place: 'Seoul, South Korea',
    date: 'April 2019',
    rating: 5,
    review:
      'What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me out and made the process easy. I would definitely recommend Tripma to anyone looking to book flights!', 
  },
  {
    name: 'Anthony Lewis',
    avatar: avtImage,
    place: 'Honolulu, Hawaii',
    date: 'February 2017',
    rating: 4,
    review:
      'My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and the prices were great. We’ll definitely be using Tripma again!',
  },
  {
    name: 'Kaori Yamaguchi',
    avatar: avtImage,
    place: 'Berlin, Germany',
    date: 'April 2019',
    rating: 5,
    review:
      'When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for my future flights!',
  },
];
