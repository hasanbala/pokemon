import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Favorites, NotFound, Pokemons } from "pages";
import { Navbar } from "layout";
import { PokemonDetail } from "components";

interface IProps {}

const App: React.FC<IProps> = () => {
  const [theme, setTheme] = useState<string>("");

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/details/:id" element={<PokemonDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
