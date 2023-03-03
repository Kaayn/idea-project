import Modal from "../Modal";
import { useContext } from "react";
import { ModalContext } from "../../context/modal";
import whiteCross from "../../assets/whiteCross.svg";
import { CartContext } from "../../context/cart";
import CartProduct from "./CartProduct";
import { ProductsContext } from "../../context/product";

const CartModal = () => {
  const { isCartOpen, toggle } = useContext(ModalContext);
  const { cart } = useContext(CartContext);
  const { orderedProducts } = useContext(ProductsContext);

  // img du produit a droite / prix du produit a gauche aligner au top / en bas a droite supprimer le produit
  const handleSubmit = () => {
    console.log({ cart });
    console.log({ orderedProducts });

    toggle("Cart");
    toggle("Order");

    // addOrder()
  };

  return (
    <div>
      <Modal isOpen={isCartOpen} toggle={() => toggle("Cart")}>
        <div className="flex flex-row justify-between align-middle">
          <h1>Panier</h1>

          <img
            className="cursor-pointer"
            src={whiteCross}
            onClick={() => toggle("Cart")}
          />
        </div>

        <div>
          {cart.map((product) => {
            return <CartProduct key={product.id} cartItem={product} />;
          })}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Commander
        </button>
      </Modal>
    </div>
  );
};

export default CartModal;
