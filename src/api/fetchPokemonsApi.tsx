const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = async () => {
  const response = await fetch(`${baseUrl}?limit=30`);
  const data = await response.json();
  return data;
};

export const fetchPokemonDetails = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
