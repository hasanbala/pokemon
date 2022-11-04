import { IPokemon, IPokemonDetails } from "types";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = async (): Promise<IPokemon[]> => {
  const response = await fetch(`${baseUrl}?limit=30`);
  const data = await response.json();
  return data.results;
};

export const fetchPokemonId = async (url: string): Promise<IPokemonDetails> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchPokemonDetail = async (id: string): Promise<IPokemonDetails> => {
  const response = await fetch(`${baseUrl}/${id}`);
  const data = await response.json();
  return data;
};
