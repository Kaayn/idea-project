import { CartItem } from "../context/cart";
import { Product } from "../context/product";

export type CreateCartItem = CartItem 

export const createCartItem = (item: CreateCartItem): CartItem => ({
    id: `id-${new Date().getTime()}`,
    name: item.name,
    img: item.img,
    // quantity: item.quantity || 1,
    price: item.price,
    description: item.description,
  });

  export const areSameCartItem = (cartItem: CartItem, other: CreateCartItem) => {
    const hasSameProduct = cartItem.id === other.id;
    
    return hasSameProduct;
  };

  export const getTotalPrice = (products:Product[]) => {
    const totalPrice = products.reduce((acc,currentProduct)=>acc+currentProduct.price,0)
    return totalPrice
  }