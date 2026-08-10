import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../services/api';
import './home.css';
import { toast } from 'react-toastify';

function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || 'trending_score_hourly_sum:[1 TO 100]'; // Se não houver query, busca os livros mais populares

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await api.get(`search.json?q=${query}`, {
          params: {
            limit: 25,
          },
        });
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
        toast.error('Erro ao buscar livros. Verifique sua conexão com a internet ou tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

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
    <div className="home-container">
      <div className="book-list">
        {books.map((book) => (
          <article key={book.key} className="book-item">
            <div className="item-header">
              <h3>{book.title}</h3>
              <p className="subtitle">{book.subtitle || ''}</p>
              <p>
                <strong>{book.author_name ? (book.author_name.length > 1 ? 'Autores: ' : 'Autor(a): ') : 'Autor: '}</strong> 
                {book.author_name ? book.author_name.join(', ') : 'Desconhecido'}
              </p>
            </div>
            <img src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150'} alt={book.title} />
            <div className="item-footer">
              <Link to={`/book/${book.key.replace('/works/', '')}`}>Ver Detalhes</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;