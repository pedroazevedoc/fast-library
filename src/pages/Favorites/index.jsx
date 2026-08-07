import { useEffect, useState } from "react";
import './favorites.css';
import { Link } from "react-router-dom";

function Favorites() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('@favorites');
    setFilms(JSON.parse(storedFavorites) || []);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Carregando informações do livro...</p>
      </div>
    );
  }

  if (films.length === 0) {
    return (
      <div className="no-favorites">
        <p>Nenhum filme favorito encontrado.</p>
        <span>Adicione filmes aos favoritos para vê-los aqui.</span>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <div className="favorites-list">
        <h1>Favoritos</h1>
        <ul>
          {films.map((film) => {
            return (
              <li key={film.key} className="favorite-item">
                <span>{film.title}</span>
                <div>
                  <Link to={`/book/${film.key.replace('/works/', '')}`}>Ver Detalhes</Link>
                  <button>Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;