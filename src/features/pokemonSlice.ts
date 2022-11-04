import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemons } from "api";
import { IPokemon } from "types";

interface IPokemonState {
  data: IPokemon[] | null;
  loading: boolean;
  error: string;
}

const initialState: IPokemonState = {
  data: null,
  loading: false,
  error: "",
};

export const getPokemons = createAsyncThunk("getPokemons", async () => {
  const data = await fetchPokemons();
  return data;
});

const pokemonSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state, _action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getPokemons.fulfilled, (state, action: PayloadAction<IPokemon[]>) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getPokemons.rejected, (state, _action) => {
      state.loading = false;
      state.error = "Error fetching pokemons data";
    });
  },
});
// export const { loadPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
