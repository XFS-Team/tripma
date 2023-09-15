export interface IDataSeatBase {
  row: number;
  seat1: boolean;
  seat2: boolean;
  seat3: boolean;
  seat4: boolean;
}

export interface IDataSeatEconomy extends IDataSeatBase {
  seat5: boolean;
  seat6: boolean;
}

export type IListSeatEconomy = IDataSeatEconomy[][];
export type IListSeatBusiness = IDataSeatBase[];
