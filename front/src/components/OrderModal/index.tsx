import Modal from "../Modal";
import { useContext } from "react";
import { ModalContext } from "../../context/modal";
import whiteCross from "../../assets/whiteCross.svg";
import { CartAction, CartContext } from "../../context/cart";
import { addOrder } from "../../utils/firebaseInit";
import OrderForm from "./OrderForm";

const OrderModal = () => {
  const { isOrderOpen, toggle } = useContext(ModalContext);
  return (
    <div>
      <Modal isOpen={isOrderOpen} toggle={() => toggle("Order")}>
        <img
          className="cursor-pointer"
          src={whiteCross}
          onClick={() => toggle("Order")}
        />
        <OrderForm />
      </Modal>
    </div>
  );
};

export default OrderModal;
