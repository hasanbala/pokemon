import { configureStore } from "@reduxjs/toolkit";
import pokemonDetailsSlice from "features/pokemonDetailsSlice";
import pokemonSlice from "features/pokemonSlice";

const store = configureStore({
  reducer: { pokemons: pokemonSlice, pokemonDetails: pokemonDetailsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
