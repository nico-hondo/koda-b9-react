import { Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import OperationArith from "./pages/OperationArith.jsx";
import DataProduct from "./pages/DataProduct.jsx";
import DataPokemon from "./pages/DataPokemon.jsx";
import Profile from "./pages/Login.jsx";
import DetailPokemon from "./pages/DetailPokemon.jsx";
import DataPokemonSP from "./pages//DataPokemonSP.jsx";
import DataPokemonCH from "./pages/DataPokemonCustomeHooks.jsx";

import DetailUser from "./pages/User.jsx";

import SurveyPenonton from "./pages/SurveyPenonton.jsx";

import ToDoList from "./pages/ToDoList.jsx";

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
          <Route path="PokemonCH" element={<DataPokemonCH/>}/>
          <Route path="pokemonSP" element={<DataPokemonSP/>}/>
          <Route path="profile" >
            <Route index element={<Profile/>}/>
            <Route path="detail" element={<DetailUser/>}/>
          </Route>
          <Route path="survey" element={<SurveyPenonton />}/>
          <Route path="to-do-list" element={<ToDoList/>}/>
        </Route>
      </Routes>
  );
}

export default Router;