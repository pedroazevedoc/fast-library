import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import './style.css';

function Book() {
  const navigation = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await api.get(`/works/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
        navigation('/', { replace: true }); // Redireciona para a página inicial em caso de erro
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, navigation]);

  if (loading) {
    return (
      <div className="loading">
        <p>Carregando informações do livro...</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="no-book">
        <p>Livro não encontrado.</p>
        <span>Verifique sua conexão com a internet ou tente novamente mais tarde.</span>
      </div>
    );
  }

  return (
    <div className="book-container">
      <div className="book-details">
        <div className="book-header">
          {/* Imagem da capa principal */}
          <img src={book.covers?.[0] ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` : 'https://via.placeholder.com/150'} alt={book.title} />

          {/* Informações do livro */}
          <div className="book-info">
            <h1>{book.title}</h1>
            <h4>Autor: {book.authors?.[0]?.author?.key || 'Desconhecido'}</h4>

            <div className="area-buttons">
              <button>Favoritar</button>
              <button>
                <a href={`https://openlibrary.org${book.key}`} target="blank" rel="external">
                  Ver no Open Library
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <h3>Descrição:</h3>
        <p>{book.description || 'Nenhuma descrição disponível.'}</p>

        {/* Assuntos */}
        <h3>Assuntos:</h3>
        {book.subjects && book.subjects.length > 0 ? (
          <ul>
            {book.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        ) : (
          <span>Nenhum assunto disponível.</span>
        )}

        {/* Outras capas */}
        {book.covers.length > 1 && (
          <div>
            <h4>Outras capas:</h4>
            <div className="additional-covers">
              {book.covers.slice(1).map((coverId, index) => (
                <img key={index} src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`} alt={`Capa adicional ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Book;