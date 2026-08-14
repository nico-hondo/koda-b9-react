import { Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import OperationArith from "./pages/OperationArith.jsx";
import DataProduct from "./pages/DataProduct.jsx";
import DataPokemon from "./pages/DataPokemon.jsx";
import Profile from "./pages/Profile.jsx";
import DetailPokemon from "./pages/DetailPokemon.jsx";
import DataPokemonSP from "./pages//DataPokemonSP.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="aritmatika" element={<OperationArith/>} />
        <Route path="product" element={<DataProduct/>} />
        <Route path="pokemon">
          <Route index element={<DataPokemon/>}/>
          <Route path=":id/:slug" element={<DetailPokemon/>}/>
       </Route>
       <Route path="pokemonSP" element={<DataPokemonSP/>}/>
        <Route path="profile" element={<Profile/>} />
      </Route>
      
    </Routes>
  );
}

export default Router;