import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "api";
import { IPokemonDetails } from "types";
import "styles/pokemon.scss";

export const Pokemon = (props: Props) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const getPokemonDetails = (url: string) => {
    setLoading(true);
    fetchPokemonDetails(url)
      .then((res) => setPokemonDetails([res]))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPokemonDetails(props.url);
  }, [props.url]);

  const loader = () => {
    return (
      <div className="pokemon-spinner-column">
        <div className="pokemon-spinner">
          <i className="fa-solid fa-spinner"></i>
        </div>
      </div>
    );
  };

  return (
    <div className="column">
      {pokemonDetails?.map((pokemon) =>
        loading ? (
          loader()
        ) : (
          <Link to={`details/${pokemon.id}`} key={pokemon.id}>
            <div className="column-images">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                width={380}
                height={280}
                alt="Pokemon Details"
              />
            </div>
            <div className="column-heading">{props.name}</div>
            <div className="column-subheading">{}</div>
          </Link>
        ),
      )}
    </div>
  );
};

interface Props {
  name: string;
  url: string;
}
