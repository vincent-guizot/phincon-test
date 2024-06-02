import React from "react";
import pokemon_logo from "../images/pokemon-.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header w-100 p-3">
      <div className="w-100 text-center">
        <Link to="/">
        <img className="img-fluid" src={pokemon_logo} alt="img" />
        </Link>
      </div>
      <div className="container my-1 text-center">
        <Link className="btn btn-sm btn-primary me-2" to="/">Home</Link>
        <Link className="btn btn-sm btn-primary" to="/mypokemons">My Pokemon</Link>
      </div>
    </div>
    // <nav class="header navbar navbar-expand-lg bg-body-tertiary">
    //   <div class="container">
    //     <Link class="navbar-brand" to="#">
    //       <img className="img-fluid" src={pokemon_logo} alt="img" />
    //     </Link>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav ms-auto">
    //         <li class="nav-item">
    //           <Link class="nav-link" aria-current="page" href="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" to="/mypokemons">
    //             My Pokemon
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;
