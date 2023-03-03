import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <div className="w-screen fixed pb-2.5 left-0">
      <AppBar position="static">
        <Toolbar
          variant="dense"
          className="bg-red-500 flex justify-center h-16"
        >
          <Link className="mx-40 font-bold text-3xl hover:text-gray-700" to="/orders">
            COMMANDES
          </Link>
          <Link className="mx-40 font-bold text-3xl hover:text-gray-700" to="/products">
            PRODUITS
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
