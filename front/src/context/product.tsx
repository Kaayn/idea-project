import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type Product = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  height: number;
  length: number;
  width: number;
  price: number;
};

export interface ProductsContextType {
  products: Product[] | Error;
  setProducts: Dispatch<SetStateAction<Product[] | Error>>;
}

const defaultContextValue: ProductsContextType = {
  products: [],
  setProducts: () => null,
};

export const ProductsContext =
  createContext<ProductsContextType>(defaultContextValue);

type ProductsContextProviderProps = { children: JSX.Element };

export const ProductsContextProvider = (
  props: ProductsContextProviderProps
) => {
  const [products, setProducts] = useState<Product[] | Error>(
    defaultContextValue.products
  );

  const ProductsContextValue: ProductsContextType = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={ProductsContextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};
