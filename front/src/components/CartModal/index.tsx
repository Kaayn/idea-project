import Modal from "../Modal";
import { useContext } from "react";
import { ModalContext } from "../../context/modal";
import whiteCross from "../../assets/whiteCross.svg";
import { CartContext } from "../../context/cart";
import CartProduct from "./CartProduct";

const CartModal = () => {
  const { isCartOpen, toggle } = useContext(ModalContext);
  const { cart } = useContext(CartContext);
  // img du produit a droite / prix du produit a gauche aligner au top / en bas a droite supprimer le produit
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
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Commander
        </button>
      </Modal>
    </div>
  );
};

export default CartModal;
