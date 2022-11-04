import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonDetail } from "api";
import { IPokemonDetails } from "types";

interface IPokemonDetailState {
  data: IPokemonDetails | null;
  loading: boolean;
  error: string;
}

const initialState: IPokemonDetailState = {
  data: null,
  loading: false,
  error: "",
};

export const getPokemonDetails = createAsyncThunk("getPokemonDetails", async (id: string) => {
  const data = await fetchPokemonDetail(id);
  return data;
});

const pokemonDetailsSlice = createSlice({
  name: "pokeDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetails.pending, (state, _action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getPokemonDetails.fulfilled, (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getPokemonDetails.rejected, (state, _action) => {
      state.loading = false;
      state.error = "Error fetching pokemons data";
    });
  },
});
export default pokemonDetailsSlice.reducer;
