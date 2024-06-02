import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/action";

import { Link } from "react-router-dom";

function List() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.characters.characters);
  
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className="w-100">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>API</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.length > 0 ? (
            <>
              {pokemons.map((pokemon, index) => {
                const { name, image } = pokemon;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={image}/>
                    </td>
                    <td>{name}</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-primary"
                        to={`/detail/${index + 1}`}
                      >
                        More Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr className="text-center">
              <td colSpan="3">
                
              <h3>Load Data</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
