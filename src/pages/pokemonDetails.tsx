import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { getPokemonDetails } from "features/pokemonDetailsSlice";
import "styles/heroDetails.scss";

export const PokemonDetails = () => {
  const { id } = useParams();
  const pokemonDetails = useAppSelector((state) => state.pokemonDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPokemonDetails(id));
    }
  }, [dispatch, id]);

  console.log(pokemonDetails);

  return (
    <div className="details-god">
      <div className="details">
        <div className="det-top">
          <div className="det-data">
            <div>
              <img
                src={pokemonDetails.data?.sprites.other.dream_world.front_default}
                alt="Character Details"
              />
            </div>
            <div className="det-header-god">
              <div className="det-header">
                {pokemonDetails.data?.forms.map((form, index: number) => (
                  <h2 key={index}> {form.name} </h2>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="det-sub">
          <h2>Pokemons Lists</h2>
          <main>
            <ol className="gradient-list">
              <li className="gradientlist">
                <div className="grad-sub">
                  {pokemonDetails.data?.types.map((item: any, index: number) => (
                    <h2 key={index}> {item.type.name} </h2>
                  ))}
                  <b>weight : </b> {pokemonDetails.data?.weight}
                </div>
              </li>
            </ol>
          </main>
        </div>
      </div>
    </div>
  );
};
