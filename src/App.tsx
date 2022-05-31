import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Navbar, Favorites } from "./pages";
import "./styles/app.css";

interface IProps {}

const App: React.FC<IProps> = () => {
  const [theme, setTheme] = useState<string>("");

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
