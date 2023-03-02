import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Product } from "../../dto/product";
import { addProduct } from "../../utils/firebaseInit";

type ProductFormProps = {
  setRefresh: Dispatch<SetStateAction<boolean>>;
  refresh: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const ProductForm = ({
  setRefresh,
  refresh,
  setOpenModal,
}: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    let ref = uuid();

    const input: Product = {
      id: ref,
      name: data.name,
      description: data.description,
      imgUrl: data.imgUrl,
      height: data.height,
      length: data.length,
      width: data.width,
      price: data.price,
    };

    await addProduct(input);

    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nom" {...register("name", { required: true })} />
      <input
        placeholder="Description"
        {...register("description", { required: true })}
      />
      <input placeholder="Prix" {...register("price", { required: true })} />
      <input
        placeholder="Longueur"
        {...register("length", { required: true })}
      />
      <input placeholder="Largeur" {...register("width", { required: true })} />
      <input
        placeholder="Hauteur"
        {...register("height", { required: true })}
      />
      <input
        placeholder="Url de l'image"
        {...register("imgUrl", { required: true })}
      />

      {(errors.name ||
        errors.description ||
        errors.price ||
        errors.length ||
        errors.width ||
        errors.height ||
        errors.imgUrl) && <span>missing field(s)</span>}
      <input
        className="bg-red"
        type="submit"
        onClick={() => setRefresh(!refresh)}
      />
    </form>
  );
};
