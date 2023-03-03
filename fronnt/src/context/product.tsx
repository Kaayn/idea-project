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
  orderedProducts: Product[];
  setorderedProducts: Dispatch<SetStateAction<Product[]>>;
}

const defaultContextValue: ProductsContextType = {
  products: [],
  setProducts: () => null,
  orderedProducts: [],
  setorderedProducts: () => null,
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
  const [orderedProducts, setorderedProducts] = useState<Product[]>(
    defaultContextValue.orderedProducts
  );
  const ProductsContextValue: ProductsContextType = {
    products,
    setProducts,
    orderedProducts,
    setorderedProducts,
  };

  return (
    <ProductsContext.Provider value={ProductsContextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};
