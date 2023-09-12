export interface ICustomerReview {
    name: string;
    avatar: string;
    place:string;
    date:string;
    rating: number;
    review: string;
}

export type IListCustomerReview = ICustomerReview[];