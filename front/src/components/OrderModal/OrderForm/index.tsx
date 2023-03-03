import { useForm, SubmitHandler } from "react-hook-form";
import { Order } from "../../../dto/dto";
import uuid from "react-uuid";
import {
  Product,
  ProductsContext,
  ProductsContextType,
} from "../../../context/product";
import { useContext, useState } from "react";
import { getTotalPrice } from "../../../utils/cart";
import { addOrder } from "../../../utils/firebaseInit";
import { CartAction, CartContext } from "../../../context/cart";
import { ModalContext } from "../../../context/modal";

type Inputs = {
  firstname: string;
  lastname: string;
  address: string;
};

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { toggle } = useContext(ModalContext);
  const { cart, dispatchCart } = useContext(CartContext);
  const { orderedProducts } = useContext(ProductsContext);

  const [order, setOrder] = useState<Order>();

  const ref = uuid();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setOrder({
      id: ref,
      lastname: data.lastname,
      firstname: data.firstname,
      address: data.address,
      orderedProducts: orderedProducts as Product[],
      totalPrice: getTotalPrice(orderedProducts as Product[]),
    });

    await addOrder(order as Order);
  };

  const handleClickSubmit = () => {
    cart.forEach((i) =>
      dispatchCart({ type: CartAction.RemoveFromCart, cartItemId: i.id })
    );
    toggle("Order");
  };

  return (
    <form
      className="flex flex-col h-2/5 justify-between "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1>Finalisation Paiement</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <p>Prénom :</p>
      <input {...register("firstname")} />
      <p>Nom :</p>
      <input {...register("lastname")} />
      <p>Adresse :</p>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("address", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.address && <span>This field is required</span>}

      <input onClick={handleClickSubmit} type="submit" />
    </form>
  );
};

export default OrderForm;
