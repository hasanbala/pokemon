import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonId } from "api";
import { IPokemonDetails } from "types";
import "styles/pokemon.scss";

export const Pokemon = (props: Props) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>();

  const getPokemonDetails = (url: string) => {
    fetchPokemonId(url)
      .then((response) => setPokemonDetails(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPokemonDetails(props.url);
  }, [props.url]);

  return (
    <div className="column">
      <Link to={`details/${pokemonDetails?.id}`}>
        <div className="column-images">
          <img
            src={pokemonDetails?.sprites.other.dream_world.front_default}
            width={380}
            height={280}
            alt="Pokemon Details"
          />
        </div>
        <div className="column-heading">{props.name}</div>
        <div className="column-subheading">{}</div>
      </Link>
    </div>
  );
};

interface Props {
  name: string;
  url: string;
}
