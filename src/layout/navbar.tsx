import { ThemeMode } from "components";
import { Link } from "react-router-dom";
import "styles/navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbarsub">
      <div className="navbarsub-list">
        <ul id="myTopnav">
          <li className="logo">
            <h1>The Pokemon App</h1>
          </li>
          <li className="item">
            <Link to="/">
              <div className="div-hero" data-hover="Pokemons">
                Pokemons
              </div>
            </Link>
          </li>
          <li className="item">
            <Link to="/favorites">
              <div className="div-hero" data-hover="Favorites">
                Favorites
              </div>
            </Link>
          </li>
          <li className="item">
            <ThemeMode />
          </li>
        </ul>
      </div>
    </nav>
  );
};
