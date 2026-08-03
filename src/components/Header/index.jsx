import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <header>
      <Link to="/" className="logo">Fast Library</Link>
      <div className="menu">
        <Link to="/favoritos" className="favoritos">Favoritos</Link>
        <Link to="/about">Sobre</Link>
      </div>
    </header>
  );
}

export default Header;