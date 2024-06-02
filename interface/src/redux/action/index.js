import axios from "axios";
import Swal from "sweetalert2";

// Actions Types
// GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS, CATCH_POKEMON, RELEASE_POKEMON, RENAME_POKEMON
const GET_POKEMONS_REQUEST = "GET_POKEMONS_REQUEST";
const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
// const GET_MYPOKEMONS = "GET_MYPOKEMONS"
const CATCH_POKEMON = "CATCH_POKEMON";
const RELEASE_POKEMON = "RELEASE_POKEMON";
const RENAME_POKEMON = "RENAME_POKEMON";

// Action Creators
const getPokemonsRequest = () => {
  return {
    type: "GET_POKEMONS_REQUEST",
  };
};
const getPokemonsSuccess = (data) => {
  return {
    type: "GET_POKEMONS_SUCCESS",
    payload: data,
  };
};

const getPokemonById = (data) => {
  return {
    type: "GET_POKEMON_BY_ID",
    payload: data,
  };
};

const catchPokemon = (data) => {
  return {
    type: "CATCH_POKEMON",
    payload: data,
  };
};

const releasePokemon = (data) => {
  return {
    type: "RELEASE_POKEMON",
    payload: data,
  };
};

const renamePokemon = (data) => {
  return {
    type: "RENAME_POKEMON",
    payload: data,
  };
};

const URL = "https://pokeapi.co/api/v2/pokemon/";

const temp = async (url, cb) => {
  try {
    let result = await axios.get(url);
    cb(result.data.sprites.front_default);
  } catch (err) {
    return undefined;
  }
};

const fetchPokemons = () => {
  return async (dispatch) => {
    dispatch(getPokemonsRequest());
    try {
      let characters = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      characters = characters.data.results.map((character) => {
        temp(character.url, (data) => {
          character.image = data;
          console.log(character.image);
        });
        return character;
      });
      console.log(characters);
      dispatch(getPokemonsSuccess(characters));
    } catch (err) {
      console.log(err);
    }
  };
};
const fetchPokemonById = (id) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(`${URL}${id}`);
      dispatch(getPokemonById(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const catchPokemonHandler = (id, character) => {
  return async (dispatch) => {
    try {
      let probability = await axios.get("http://localhost:3000/catch");
      if (probability.data.number > 50) {
        // alert("Caught");
        let nickname = prompt("Please enter a nickname");
        dispatch(
          catchPokemon({
            id,
            nickname,
            renamed: 0,
            character,
          })
        );
        Swal.fire(
          "Pokemon Caught!!",
          "You get a score of " + probability.data.number,
          "success"
        );
      } else {
        Swal.fire(
          "Pokemon Not Caught",
          "You get a score of " + probability.data.number,
          "error"
        );
      }
    } catch (err) {
      alert(err);
    }
  };
};

const releasePokemonHandler = (data) => {
  return async (dispatch) => {
    try {
      let factors = await axios.get("http://localhost:3000/release");
      if (factors.data.factors === 2) {
        Swal.fire("Pokemon Released", "You have a Prime Number", "success");
        dispatch(releasePokemon(data));
      } else {
        Swal.fire(
          "Pokemon Not Relesed",
          "You do not get a Prime Number",
          "error"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const renamePokemonHandler = (data) => {
  return async (dispatch) => {
    try {
      dispatch(renamePokemon(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMON_BY_ID,
  CATCH_POKEMON,
  RELEASE_POKEMON,
  RENAME_POKEMON,
  fetchPokemons,
  fetchPokemonById,
  catchPokemonHandler,
  releasePokemonHandler,
  renamePokemonHandler,
};
