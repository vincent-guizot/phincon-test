import React, { useEffect } from "react";
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
    <div className="detail w-100">
      <div className="container">
        <div className="row p-2">
          {character ? (
            <>
              <div className="col-3">
                <div className="row">
                  <div className="col-12">
                    <div className="detail_img">
                      <img className="img-fluid" src={character.sprites.front_default} alt="" />
                    </div>
                  </div>
                  <div className="col-4">
                    <img className="img-fluid" src={character.sprites.back_default} alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid" src={character.sprites.back_shiny} alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid" src={character.sprites.front_shiny} alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid" src={character.sprites.back_female} alt="" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid" src={character.sprites.back_shiny_female} alt="" />
                  </div>

                  <div className="col-4">
                    <img className="img-fluid" src={character.sprites.front_female} alt="" />
                  </div>

                  <div className="col-4">
                    <img className="img-fluid" src={character.sprites.front_shiny_female} alt="" />
                  </div>
                </div>
              </div>
              <div className="info col-9">
                <div className="row">
                  <div className="col-12">
                    <h1>{character.name.toUpperCase()}</h1>
                    <button
                      onClick={catchPokemon}
                      className="btn btn-sm btn-success my-1"
                    >
                      + CATCH POKEMON!
                    </button>
                    <hr />
                  </div>
                  <div className="12">
                    <p>Height: {character.height}</p>
                    <p>Weight: {character.weight}</p>
                  </div>
                </div>
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
