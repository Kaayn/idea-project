import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/modal";
import CartModal from "../CartModal";

const Header = () => {
  const { toggle } = useContext(ModalContext);

  const navigate = useNavigate();

  const handleCartClick = () => {
    // OPEN MODAL
    toggle("Cart");
  };

  return (
    <div className="flex flex-row bg-amber-600 justify-between p-4 ">
      <h1>IDEA</h1>

      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={handleCartClick}
      >
        Panier
      </button>
    </div>
  );
};

export default Header;
