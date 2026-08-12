import { Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import OperationArith from "./pages/OperationArith.jsx";
import DataProduct from "./pages/DataProduct.jsx";
import DataPokemon from "./pages/DataPokemon.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aritmatika" element={<OperationArith/>} />
      <Route path="/product" element={<DataProduct/>} />
      <Route path="/pokemon" element={<DataPokemon />} />
    </Routes>
  );
}

export default Router;