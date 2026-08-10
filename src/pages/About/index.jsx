import { Link } from 'react-router-dom';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <h1>Sobre a Fast Library</h1>
      <p>
        A Fast Library é uma biblioteca de livros que oferece uma ampla variedade de títulos para todos os gostos.
      </p>
      <p>
        Nosso objetivo é fornecer aos leitores uma experiência agradável e acessível, permitindo que eles encontrem facilmente os livros que desejam.
      </p>
      <p>
        Explore nossa coleção e descubra novos autores, gêneros e histórias emocionantes!
      </p>

      <span>Os dados dos livros são coletados da API da Open Library.</span>

      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default About;