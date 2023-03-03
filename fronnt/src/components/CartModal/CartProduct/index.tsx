import Modal from "../../Modal";
import { useContext } from "react";
import trash from "../../../assets/Trash.svg";
import { CartAction, CartContext, CartItem } from "../../../context/cart";
import { ProductsContext } from "../../../context/product";

type CartItemProps = {
  cartItem: CartItem;
};

const CartProduct = ({ cartItem }: CartItemProps) => {
  const { dispatchCart } = useContext(CartContext);
  const { setorderedProducts } = useContext(ProductsContext);

  // img du produit a droite / prix du produit a gauche aligner au top / en bas a droite supprimer le produit

  const handleRemoveClick = () => {
    dispatchCart({ type: CartAction.RemoveFromCart, cartItemId: cartItem.id });
    setorderedProducts([]);
  };
  return (
    <div>
      <div className="flex flex-row p-4 justify-between object-contain">
        <img className="h-20 w-20 pr-4" src={cartItem.img} />
        <p>Prix : {cartItem.price} €</p>
        <button>
          <img src={trash} onClick={handleRemoveClick} />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
