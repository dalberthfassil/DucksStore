export interface Ducks {
  id: number;
  title: string;
  color: Colors;
  size: Sizes;
  price: number;
  lot: number;
  isErased: boolean;
}

export enum Colors {
  Red = 'Rojo',
  Green = 'Verde',
  Yellow = 'Amarillo',
  Black = 'Negro',
}

export enum Sizes {
  XLarge = 'XLarge',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
  Xsmall = 'Xsmall',
}
export enum OrderType {
  asendente = 'asc',
  descendente = 'desc',
}
