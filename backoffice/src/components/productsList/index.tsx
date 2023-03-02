import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getMyProducts } from "../../utils/firebaseInit";
import { Product } from "../../dto/product";
import { AddProductModal } from "../addProductModal";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "NOM", width: 130 },
  {
    field: "description",
    headerName: "DESCRIPTION",
    type: "number",
    width: 400,
  },
  { field: "length", headerName: "LONGUEUR", type: "number", width: 90 },
  { field: "width", headerName: "LARGEUR", type: "number", width: 90 },
  {
    field: "height",
    headerName: "HAUTEUR",
    type: "number",
    width: 90,
  },
  {
    field: "price",
    headerName: "PRICE",
    type: "number",
    width: 90,
  },
  {
    field: "imgUrl",
    headerName: "IMAGE",
    width: 130,
  },
];

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[] | Error>([]);

  useEffect(() => {
    async function getProducts() {
      const dbProducts = await getMyProducts();

      if (dbProducts instanceof Error == false) {
        setProducts(dbProducts);
      }
      
    }
    getProducts();
  }, []);

  return (
    <div className="h-5/6 my-5">
      <DataGrid
        rows={products as Product[]}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
      />
      <AddProductModal />
    </div>
  );
};

