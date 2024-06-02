import React from "react";

import { Routes, Route } from "react-router-dom";

import List from "../pages/List";
import Detail from "../pages/Detail";
import MyPokemons from "../pages/MyPokemons";

function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        <Route path="/mypokemons" element={<MyPokemons></MyPokemons>}></Route>
      </Routes>
    </div>
  );
}

export default Content;
