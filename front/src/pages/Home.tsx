import { CartContextProvider } from "../context/cart";
import { ProductsContextProvider } from "../context/product";
import HomeContent from "./HomeContent";
import { ModalContextProvider } from "../context/modal";

const Home = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <ModalContextProvider>
          <>
            <HomeContent />
          </>
        </ModalContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default Home;
