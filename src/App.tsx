import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites, NotFound, PokemonDetails, Pokemons } from "pages";
import { Navbar } from "layout";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/details/:id" element={<PokemonDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
