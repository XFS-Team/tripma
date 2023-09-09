export interface ICartPlace {
    image: string;
    name: string;
    place?: string;
    price?: number;
    description: string;
}

export type IListCartPlace = ICartPlace[];