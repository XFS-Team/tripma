export interface IItemChildFooter {
  name?: string;
  href?: string;
  icon?: string;
}
export interface ISocial {
  icon: string;
  href: string;
}

export interface IListFooter {
  heading: string;
  children: IItemChildFooter[];
  name?: string;
  href?: string;
  icon?: string;
}
