import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <header>
      <h1>Fast Library</h1>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      </div>
    </header>
  );
}

export default Header;