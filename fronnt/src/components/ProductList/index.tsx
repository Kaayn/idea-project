import { Product } from "../../context/product";
import Card from "../Card";

type ProductListProps = {
  products: Product[] | Error;
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8 p-4 ">
      {(products as Product[]).map((product) => (
        <Card key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
