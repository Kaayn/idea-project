import { useContext, useEffect } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { ProductsContext } from "../context/product";
import CartModal from "../components/CartModal";
import { getMyProducts } from "../utils/firebaseInit";
import OrderModal from "../components/OrderModal";

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
      <OrderModal />
      {/* <ProductModal product={} /> */}
    </>
  );
};

export default HomeContent;
