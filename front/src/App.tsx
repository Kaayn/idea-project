<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
>>>>>>> d37dd84... feat(front): All Front
import "./App.css";

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

=======
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

//TODO: Page product
//TODO: Panier
//TODO: Sauvegarder la commande dans firebase

>>>>>>> d37dd84... feat(front): All Front
export default App;
