import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { releasePokemonHandler, renamePokemonHandler } from "../redux/action";

function MyPokemon() {
  const dispatch = useDispatch();
  const mypokemons = useSelector((state) => state.myPokemons.mycharacters);
  // const renameHandler = (id) => {
  //   let characters = list.map(char => {
  //     if(char.id ===id){

  //     }
  //   })
  // }

  useEffect(() => {
    // console.log(mypokemons);
  }, [dispatch]);

  const releasePokemon = (id) => {
    let temp = mypokemons.filter((mypokemon) => mypokemon.id !== +id);
    console.log(temp);
    dispatch(releasePokemonHandler(temp));
  };

  const renamePokemon = async (id, nickname, renamed) => {
    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:3000/rename",
        data: {
          nickname,
          renamed,
        },
      });
      console.log(result.data);

      let temp = mypokemons.map((mypokemon) => {
        if (mypokemon.id === id) {
          mypokemon.nickname = result.data.nickname;
          mypokemon.renamed = result.data.renamed;
        }
        return mypokemon;
      });
      console.log(temp);
      dispatch(renamePokemonHandler(temp));
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-100">
      <div className="w-25 m-auto">
        <h3>My Pokemons</h3>
      </div>
      {mypokemons.length > 0 ? (
        <>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Nickname</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mypokemons.map((mypokemon) => {
                const { id, nickname, renamed, character } = mypokemon;
                return (
                  <tr>
                    <td>{id}</td>
                    <td>
                      <img src={character.sprites.front_default} />
                    </td>
                    <td>{nickname}</td>
                    <td>
                      <button
                        onClick={() => renamePokemon(id, nickname, renamed)}
                        className="btn btn-sm btn-primary me-2"
                      >
                        Rename
                      </button>

                      <button
                        onClick={() => releasePokemon(id)}
                        className="btn btn-sm btn-danger"
                      >
                        Release
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h3>Loading Data</h3>
      )}
    </div>
  );
}

export default MyPokemon;
