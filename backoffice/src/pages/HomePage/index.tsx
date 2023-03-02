import React from "react";
import { ProductsList } from "../../components/productsList"
import { getMyProducts } from "../../utils/firebaseInit";

export const HomePage = () => {

  return (
    <div className="w-11/12">
      <ProductsList/> 
    </div>
  );
};
