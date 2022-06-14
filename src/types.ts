export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  height: number;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  forms: {
    name: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
}

export interface PokemonState {
  pokemons: IPokemon[];
  getPokemons: () => void;
  // getPokemonDetails: (value: string) => void;
}
