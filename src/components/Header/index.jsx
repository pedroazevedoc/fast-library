import { Link } from "react-router-dom";
import './header.css';
import InputSearch from "../InputSearch";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">Fast Library</Link>
        <InputSearch />
        <div className="menu">
          <Link to="/favorites" className="favoritos">Favoritos</Link>
          <Link to="/about">Sobre</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;