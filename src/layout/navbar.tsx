import { Link } from "react-router-dom";
import "styles/navbar.css";

interface IProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<IProps> = ({ theme, setTheme }) => {
  const handleLight = () => setTheme("dark");
  const handleDark = () => setTheme("");

  return (
    <div className="navbar">
      <h1>THE POKEMON APP</h1>
      <ul>
        <li>
          <Link className="navLink" to="/" style={{ color: "#fff", textDecoration: "none" }}>
            <b> Pokemons</b>
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            to="/favorites"
            style={{ color: "#fff", textDecoration: "none" }}>
            <b>Favorites</b>
          </Link>
        </li>
      </ul>
      <i
        id="toggle"
        onClick={theme ? handleDark : handleLight}
        className={theme ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
    </div>
  );
};
