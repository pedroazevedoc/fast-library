import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './input-search.css';

function InputSearch({ value, onChange }) {
  const [searchValue, setSearchValue] = useState(value);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      navigate(`/?q=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Buscar livros..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default InputSearch;