import React from "react";
import pokemon_logo from "../images/pokemon.png";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header w-100 p-3">
      <div className="w-25 m-auto">
        <Link to="/">
        <img className="img-fluid" src={pokemon_logo} />
        </Link>
      </div>
      <div className="w-25 m-auto">
        <Link className="btn btn-sm btn-primary" to="/mypokemons">My Pokemon</Link>
      </div>
    </div>
  );
}

export default Header;
