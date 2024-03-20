// Home.jsx

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 

function Home() {
  const [pesquisa, setPesquisa] = useState("Bat");
  const [filmes, setFilmes] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=28d0dee8&type=movie&s=${pesquisa}`)
      .then(response => response.json())
      .then(data => {
        setFilmes(data.Search);
      });
  }, [pesquisa]);

  const pesquisarItens = (valorPesquisa) => {
    setPesquisa(valorPesquisa);
  };

  return (
    <>
      <div>
        <h1>Lista de Filmes</h1>
        <input onChange={(e) => pesquisarItens(e.target.value)} />
        <ul>
          {filmes && filmes.map((item) => (
            <li key={item.imdbID}>
              {/* Adicione um prefixo "tt" ao ID do filme */}
              <Link to={`/movie/tt${item.imdbID}`}>{item.Title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
