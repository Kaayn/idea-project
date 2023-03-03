import React, { createContext, Dispatch, useReducer } from "react";
import { createCartItem } from "../utils/cart";
// import { Action, CartItem, reducer } from "reducers/Cart";
// import { getTotalCartPrice, sumCartItemsQuantities } from "utils/cart";

export type CartItem = {
  id: string;
  img: string;
  name: string;
  quantity?: number;
  price: number;
  description: string;
};

export enum CartAction {
  AddToCart,
  RemoveFromCart,
}

type Action =
  | {
      id: string;
      type: CartAction.AddToCart;
      name: string;
      img: string;
      description: string;
      price: number;
    }
  | { type: CartAction.RemoveFromCart; cartItemId: string };

const reducer = (state: CartItem[], action: Action) => {
  switch (action.type) {
    case CartAction.AddToCart: {
      //   const sameItemIndex = state.findIndex((cartItem) =>
      //     areSameCartItem(cartItem, {
      //       product: action.product,
      //       selectedOptions: action.selectedOptions,
      //       comment: action.comment,
      //     })
      //   );

      //   if (sameItemIndex >= 0) {
      //     const newState = [...state];
      //     newState[sameItemIndex].quantity =
      //       state[sameItemIndex].quantity + action.quantity;
      //     return newState;
      //   }

      const newCartItem = createCartItem({
        id: action.id,
        name: action.name,
        img: action.img,
        // quantity: action.quantity || 1,
        price: action.price,
        description: action.description,
      });
      return [...state, newCartItem];
    }

    case CartAction.RemoveFromCart:
      return state.filter((cartItem) => cartItem.id !== action.cartItemId);

    default:
      return state;
  }
};

export interface CartContextType {
  cart: CartItem[];
  //   totalCartPrice: number;
  //   totalQuantity: number;
  dispatchCart: Dispatch<Action>;
}

const defaultContextValue: CartContextType = {
  cart: [],
  //   totalCartPrice: 0,
  //   totalQuantity: 0,
  dispatchCart: () => null,
};

export const CartContext = createContext<CartContextType>(defaultContextValue);

type CartContextProviderProps = { children: JSX.Element };

export const CartContextProvider = (props: CartContextProviderProps) => {
  const [cart, dispatchCart] = useReducer(reducer, defaultContextValue.cart);

  //   const totalCartPrice = getTotalCartPrice(cart);

  //   const totalQuantity = sumCartItemsQuantities(cart);

  const CartContextValue: CartContextType = {
    cart,
    // totalCartPrice,
    // totalQuantity,
    dispatchCart,
    // totalCartPrice: 0,
    // totalQuantity: 0,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
