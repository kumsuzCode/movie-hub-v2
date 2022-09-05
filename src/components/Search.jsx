import React, { useEffect, useState } from "react";
import Movie from "./ui/Movie";

export default function Search({ query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //let processedData = [];
    async function handleApiReq() {
      //const results = document.querySelector(".results__movies");
      //esults.classList += " movies__loading";
      const data = await fetch(
        `https://www.omdbapi.com/?apikey=2bb078d&s=${query}`
      );
      //results.classList.remove("movies__loading");
      const processedData = await data.json();
      console.log("====0===");
      console.log(processedData);
      console.log(processedData.Search);
      console.log("===1====");
      setMovies(processedData.Search);
    }
    handleApiReq();
  }, [query]);

  const movieResults = movies.map((movie) => (
    <Movie
      poster={movie.Poster}
      title={movie.title}
      year={movie.Year}
      key={movie.imdbID}
    />
  ));

  return (
    <section id="results">
      <div className="row">
        <h2 className="results__title">
          <span className="blue">Search Results</span>
        </h2>

        <div className="results__movies">
          <div className="movies__loading--spinner">
            <i className="fa-solid fa-spinner"></i>
          </div>
          {movieResults}
        </div>
      </div>
    </section>
  );
}
