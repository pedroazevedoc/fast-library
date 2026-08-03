import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();

  return (
    <div>
      <h2>Livro {id}</h2>
      <p>Informações sobre o livro</p>
    </div>
  )
}

export default Book;