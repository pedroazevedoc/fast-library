import { useEffect, useState } from "react";
import './favorites.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('@favorites');
    setBooks(JSON.parse(storedFavorites) || []);
    setLoading(false);
  }, []);

  const handleDeleteFavorite = (key) => {
    return () => {
      const updatedFavorites = books.filter((book) => book.key !== key);
      setBooks(updatedFavorites);
      localStorage.setItem('@favorites', JSON.stringify(updatedFavorites));
      toast.success('Livro removido dos favoritos!');
    };
  };

  if (loading) {
    return (
      <div className="loading">
        <p>Carregando informações do livro...</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="no-favorites">
        <p>Nenhum livro favorito encontrado.</p>
        <span>Adicione livros aos favoritos para vê-los aqui.</span>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <div className="favorites-list">
        <div className="favorites-header">
          <h1>Favoritos</h1>
          <span>{books.length}</span>
        </div>
        <ul>
          {books.map((book) => {
            return (
              <li key={book.key} className="favorite-item">
                <div className="favorite-info">
                  <p>{book.title}</p>
                  <span>{book.authors ? book.authors?.[0]?.author?.name : 'Autor desconhecido'}</span>
                </div>
                <div className="favorite-actions">
                  <Link to={`/book/${book.key.replace('/works/', '')}`}>Ver Detalhes</Link>
                  <button onClick={handleDeleteFavorite(book.key)}>Excluir</button>
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