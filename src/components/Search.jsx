import React, { useContext, useEffect, useState } from "react";
import Movie from "./ui/Movie";
import emptyFaves from "../assets/void.svg";
import { AppContext } from "../contexts/AppContext";

export default function Search() {
  const { query, toggleFavourite, favourites } = useContext(AppContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function handleApiReq() {
      const data = await fetch(
        `https://www.omdbapi.com/?apikey=2bb078d&s=${query}`
      );
      const processedData = await data.json();
      setMovies(processedData.Search);
    }
    handleApiReq();
  }, [query]);

  const movieResults = movies?.map((movie) => (
    <Movie
      poster={movie.Poster}
      title={movie.Title}
      year={movie.Year}
      key={movie.imdbID}
      id={movie.imdbID}
      toggleFavourite={toggleFavourite}
      favourites={favourites}
    />
  ));

  return (
    <section id="results">
      <div className="row">
        <h2 className="results__title">
          <span className="blue">Search Results</span>
        </h2>
      </div>
      <div className="results__movies row-movies">
        {movieResults === undefined ? (
          <>
            <span>
              <figure className="results__img--wrapper">
                <img src={emptyFaves} alt="" />
              </figure>
              <h2>There are no results which fit your search</h2>
            </span>
          </>
        ) : (
          movieResults
        )}
      </div>
    </section>
  );
}
