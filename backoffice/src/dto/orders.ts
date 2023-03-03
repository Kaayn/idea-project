import { Product } from "./product";

export type Order = {
    id: string;
    lastname: string;
    firstname: string;
    orderedProducts: Product[];
    address: string;
    totalPrice: number;
  };
  