import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPokemonById, catchPokemonHandler } from "../redux/action";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.pokemonById);
  const mypokemons = useSelector((state) => state.myPokemons.mycharacters);

  const catchPokemon = () => {
    let id;
    if (mypokemons.length === 0) {
      id = 1;
    } else {
      id = mypokemons[mypokemons.length - 1].id + 1;
    }
    dispatch(catchPokemonHandler(id, character));
  };

  useEffect(() => {
    dispatch(fetchPokemonById(id));
  }, [dispatch]);

  return (
    <div className="w-100">
      <div className="container">
        <div className="row">
          {character ? (
            <>
              <div className="col-3">
                <img
                  className="img-fluid"
                  src={character.sprites.front_default}
                />
                {/* {JSON.stringify(character.sprites.front_default)} */}
              </div>
              <div className="col-9">
                <button
                  onClick={catchPokemon}
                  className="btn btn-sm btn-success"
                >
                  + CATCH POKEMON!
                </button>
              </div>
            </>
          ) : (
            <p>Loading Data</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
