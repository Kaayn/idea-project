import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getMyProducts } from "../../utils/firebaseInit";
import { Product } from "../../dto/product";
import { AddProductModal } from "../addProductModal";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "NOM", width: 210 },
  { field: "description", headerName: "DESCRIPTION", width: 400 },
  { field: "length", headerName: "LONGUEUR", width: 90 },
  { field: "width", headerName: "LARGEUR", width: 90 },
  { field: "height", headerName: "HAUTEUR", width: 90 },
  { field: "price", headerName: "PRICE", width: 90 },
  { field: "imgUrl", headerName: "IMAGE", width: 130 },
];

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[] | Error>([]);
  const [refresh, setRefresh] = useState(false);

  const fetchProducts = async () => {
    const dbProducts = await getMyProducts();

    setProducts(dbProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  return (
    <div className="h-5/6 my-5">
      <DataGrid
        rows={products as Product[]}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
      />
      <AddProductModal setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};
