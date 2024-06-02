import { combineReducers } from "redux";

import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMON_BY_ID,
  CATCH_POKEMON,
  RELEASE_POKEMON,
  RENAME_POKEMON,
} from "../action";

const initialState = {
  characters: [],
  pokemonById: false,
  loadingData: false,
  error: null,
};

const myPokemonState = {
  mycharacters: [],
  error: null,
};

const characterReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        loadingData: true,
        error: null,
      };

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        loadingData: false,
        characters: action.payload,
      };

    case GET_POKEMON_BY_ID:
      return {
        ...state,
        loadingData: false,
        pokemonById: action.payload,
      };
    default:
      return state;
  }
};

const myPokemonReducers = (state = myPokemonState, action) => {
  switch (action.type) {
    case CATCH_POKEMON:
      return {
        ...state,
        mycharacters: [...state.mycharacters, action.payload],
      };
    case RELEASE_POKEMON:
      return {
        ...state,
        mycharacters: [...action.payload],
      };
    case RENAME_POKEMON:
      return {
        ...state,
        mycharacters: [...action.payload],
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  characters: characterReducers,
  myPokemons: myPokemonReducers,
});

export default reducers;

// combineReducers = menggabungkan beberapa reducers
// 1. harus lebih dari 1
