import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getMyOrders, getMyProducts } from "../../utils/firebaseInit";
import { Order } from "../../dto/orders";
import { Button } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstname", headerName: "PRENOM", width: 170 },
  { field: "lastname", headerName: "NOM", width: 170 },
  { field: "address", headerName: "ADRESSE", width: 400 },
  { field: "orderedProducts", headerName: "PRODUITS", width: 170 },
  { field: "totalPrice", headerName: "PRIX TOTAL", width: 150 },
];

export const OrdersList = () => {
  const [orders, setOrders] = useState<Order[] | Error>([]);
  const [refresh, setRefresh] = useState(false);

  const fetchOrders = async () => {
    const dbOrders = await getMyOrders();

    setOrders(dbOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, [refresh]);

  return (
    <div className="h-5/6 my-5 pt-16">
      <DataGrid
        rows={orders as Order[]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      <Button
        onClick={() => setRefresh(!refresh)}
        variant="contained"
        sx={{ backgroundColor: "red", fontSize: 20 }}
      >
        Actualiser
      </Button>{" "}
    </div>
  );
};
