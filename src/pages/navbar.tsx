import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

interface IProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<IProps> = ({ theme, setTheme }) => {
  // const [theme, setTheme] = useState(true);

  const handleLight = () => {
    // document.documentElement.style.setProperty("--theme-background", "white");
    // document.documentElement.style.setProperty("--theme-color", "black");
    setTheme("dark");
  };

  const handleDark = () => {
    // document.documentElement.style.setProperty("--theme-background", "black");
    // document.documentElement.style.setProperty("--theme-color", "white");
    setTheme("");
  };

  return (
    <div className='navbar'>
      <h1>THE POKEMON APP</h1>
      <ul>
        <li>
          <Link
            className='navLink'
            to='/'
            style={{ color: "#fff", textDecoration: "none" }}>
            <b> Pokemons</b>
          </Link>
        </li>
        <li>
          <Link
            className='navLink'
            to='/favorites'
            style={{ color: "#fff", textDecoration: "none" }}>
            <b>Favorites</b>
          </Link>
        </li>
      </ul>
      <i
        id='toggle'
        onClick={theme ? handleDark : handleLight}
        className={theme ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
    </div>
  );
};
