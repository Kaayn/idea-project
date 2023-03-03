import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type ModalType = {
  Cart: string;
  Product: string;
};

export interface ModalContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  isProductOpen: boolean;
  setIsProductOpen: Dispatch<SetStateAction<boolean>>;
  toggle: (type: string) => void;
}

const defaultContextValue: ModalContextType = {
  isCartOpen: false,
  setIsCartOpen: () => null,
  isProductOpen: false,
  setIsProductOpen: () => null,
  toggle: () => null,
};

export const ModalContext =
  createContext<ModalContextType>(defaultContextValue);

type ModalContextProviderProps = { children: JSX.Element };

export const ModalContextProvider = (props: ModalContextProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(defaultContextValue.isCartOpen);
  const [isProductOpen, setIsProductOpen] = useState(
    defaultContextValue.isProductOpen
  );

  const toggle = (type: string) => {
    switch (type) {
      case "Cart":
        setIsCartOpen(!isCartOpen);
        break;
      case "Product":
        setIsProductOpen(!isProductOpen);
        break;
      default:
        throw new Error();
    }
  };

  const ModalContextValue: ModalContextType = {
    isCartOpen,
    setIsCartOpen,
    isProductOpen,
    setIsProductOpen,
    toggle,
  };

  return (
    <ModalContext.Provider value={ModalContextValue}>
      {props.children}
    </ModalContext.Provider>
  );
};
