import Modal from "../Modal";
import { useContext } from "react";
import { ModalContext } from "../../context/modal";
import { Product } from "../../context/product";

type ProductProps = {
  product: Product;
};

const ProductModal = ({ product }: ProductProps) => {
  const { isProductOpen, toggle } = useContext(ModalContext);

  return (
    <div>
      <Modal isOpen={isProductOpen} toggle={() => toggle("Product")}>
        <div className="flex flex-row justify-between p-10 align-middle">
          <img src={product.imgUrl} />
        </div>

        <button>Commander</button>
      </Modal>
    </div>
  );
};

export default ProductModal;
