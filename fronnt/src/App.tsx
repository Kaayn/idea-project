import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

//TODO: Page product
//TODO: Panier
//TODO: Sauvegarder la commande dans firebase

export default App;
