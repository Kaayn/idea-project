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
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 p-1" >
      <input
        placeholder="Nom"
        {...register("name", { required: true })}
        className="m-2 bg-white border-2 border-black rounded-md text-black"
      />
      <input
        className="m-2 bg-white border-2 border-black rounded-md text-black"
        placeholder="Description"
        {...register("description", { required: true })}
      />
      <input
        className="m-2 bg-white border-2 border-black rounded-md text-black"
        placeholder="Prix"
        {...register("price", { required: true })}
      />
      <input
        className="m-2 bg-white border-2 border-black rounded-md text-black"
        placeholder="Longueur"
        {...register("length", { required: true })}
      />
      <input
        className="m-2 bg-white border-2 border-black rounded-md text-black"
        placeholder="Largeur"
        {...register("width", { required: true })}
      />
      <input
        className="m-2 bg-white border-2 border-black rounded-md text-black"
        placeholder="Hauteur"
        {...register("height", { required: true })}
      />
      <input
        className="m-2 bg-white border-2 border-black rounded-md text-black"
        placeholder="Url de l'image"
        {...register("imgUrl", { required: true })}
      />

      <input
        className="bg-red-500 rounded-lg m-1.5"
        type="submit"
        onClick={() => setRefresh(!refresh)}
      />
    </form>
  );
};
