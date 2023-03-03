import { useContext } from "react";
import { CartAction, CartContext } from "../../context/cart";
import { Product, ProductsContext } from "../../context/product";
import { ModalContext } from "../../context/modal";

type CardProps = {
  product: Product;
};

const Card = ({ product }: CardProps) => {
  const { dispatchCart } = useContext(CartContext);
  const { products, setProducts } = useContext(ProductsContext);
  const { toggle } = useContext(ModalContext);

  const handleProductClick = () => {
    //TODO: Add CartContext
    //TODO: Ajouter le bon produit en focntion de son id
    // AU moment ou je clique sur le produit ca doit me retourner l'index du produit dasn le tableau et je pourrais lui passer a product

    dispatchCart({
      type: CartAction.AddToCart,
      id: product.id,
      name: product.name,
      description: product.description,
      img: product.imgUrl,
      price: product.price,
    });
    // Open Modal

    toggle("Product");
  };

  return (
    <div className="flex flex-col border-2 border-gray-500 rounded shadow-xl">
      <img src={product.imgUrl} draggable="false" />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">{product.name}</h1>
        <div className="p-4">
          Caractéristiques :
          <p className="text-xs">
            {`Longueur : ${product.length}cm`} <br />
            {` Largeur: ${product.width}cm`}
          </p>
        </div>
        <h2 className="text-lg font-bold text-center text-green-500 pb-3">
          Prix : {product.price} €
        </h2>
        <button
          onClick={handleProductClick}
          className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 ml-4 rounded-full"
        >
          Ajouter le produit
        </button>
      </div>
    </div>
  );
};

export default Card;
