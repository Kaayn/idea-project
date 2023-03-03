import { Product } from "../context/product"

export type Order =  {
    id:string;
    lastname:string;
    firstname:string;
    address:string;
    orderedProducts:Product[];
    totalPrice:number;
}