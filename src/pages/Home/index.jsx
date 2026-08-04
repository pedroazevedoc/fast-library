import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('search.json?q=javascript', {
          params: {
            limit: 10,
          },
        });
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Carregando livros...</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="no-books">
        <p>Nenhum livro encontrado.</p>
        <span>Verifique sua conexão com a internet ou tente novamente mais tarde.</span>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="book-list">
        {books.map((book) => (
          <article key={book.key} className="book-item">
            <h3>{book.title}</h3>
            <p>Autor: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>Primeira Publicação: {book.first_publish_year || 'Unknown'}</p>
            <img src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150'} alt={book.title} />
            <Link to={`/book/${book.key.replace('/works/', '')}`}>Ver Detalhes</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;