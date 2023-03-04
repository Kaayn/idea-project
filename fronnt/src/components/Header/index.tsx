import { useContext } from "react";
import { ModalContext } from "../../context/modal";
import idea from "../../assets/idea.png";

const Header = () => {
  const { toggle } = useContext(ModalContext);

  const handleCartClick = () => {
    // OPEN MODAL
    toggle("Cart");
  };

  return (
    <div className="flex flex-row justify-between p-4 border-2 border-black">
      <img className="object-contain h-16" src={idea} />
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
