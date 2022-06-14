import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Favorites, Pokemons } from "pages";
import { Navbar } from "layout";
import "./styles/app.css";

interface IProps {}

const App: React.FC<IProps> = () => {
  const [theme, setTheme] = useState<string>("");

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/details" element={<Pokemons />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
