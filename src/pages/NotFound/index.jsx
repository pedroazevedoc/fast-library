import { Link } from 'react-router-dom';
import './style.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default NotFound;