// MovieDetails.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

function MovieDetails() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=28d0dee8&i=${id}`)
      .then(response => response.json())
      .then(data => {
        setFilme(data);
      });
  }, [id]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{filme.Title}</h2>
      <p><strong>Ano:</strong> {filme.Year}</p>
      <p><strong>Diretor:</strong> {filme.Director}</p>
      <p><strong>Elenco:</strong> {filme.Actors}</p>
      <p><strong>Sinopse:</strong> {filme.Plot}</p>
    </div>
  );
}

export default MovieDetails;
