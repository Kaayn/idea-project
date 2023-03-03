import { useContext, useEffect } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { CartContext, CartContextProvider } from "../context/cart";
import {
  ProductsContextProvider,
  ProductsContext,
  Product,
} from "../context/product";
// import "./home.style.css";
import mock from "../utils/mock.json";
import CartModal from "../components/CartModal";
import ProductModal from "../components/ProductModal";
import { getMyProducts } from "../utils/firebaseInit";

const HomeContent = () => {
  //TODO: fetch data and store it
  const { products, setProducts } = useContext(ProductsContext);

  const getProducts = async () => {
    const fetchedProducts = await getMyProducts();
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <ProductList products={products} />
      <CartModal />
      {/* <ProductModal product={} /> */}
    </>
  );
};

export default HomeContent;
