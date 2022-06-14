import { fetchPokemonDetails, fetchPokemons } from "api";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { IPokemon, IPokemonDetails, PokemonState } from "types";

export const AppContext = createContext<PokemonState | null>(null);
export const useAppContext = () => useContext(AppContext) as PokemonState;

export const PokemonContext = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const getPokemons = () => {
    fetchPokemons()
      .then((res) => setPokemons((pokemons) => [...res.results]))
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   getPokemons();
  //   console.log("sjdkvlsjk");
  // }, []);

  const contextValue: PokemonState = {
    pokemons,
    getPokemons,
    // getPokemonDetails,
  };

  return <AppContext.Provider value={contextValue}>{children} </AppContext.Provider>;
};

type Props = {
  children: React.ReactNode;
};
