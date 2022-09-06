import React from "react";
import Movie from "./ui/Movie";
import emptyFaves from "../assets/void.svg";

export default function Favourites({ favourites, toggleFavourite }) {
  const faveBooks = favourites.map((movie, index) => (
    <Movie
      poster={movie.poster}
      title={movie.title}
      year={movie.year}
      id={movie.id}
      key={index}
      toggleFavourite={toggleFavourite}
      favourites={favourites}
    />
  ));

  return (
    <section id="results">
      <div className="row">
        <h2 className="results__title">
          <span className="blue">Your Favourites</span>
        </h2>
      </div>
      <div className="results__movies row-movies">
        {faveBooks.length > 0 ? (
          faveBooks
        ) : (
          <>
            <span>
              <figure className="results__img--wrapper">
                <img src={emptyFaves} alt="" />
              </figure>
              <h2>You don't have any favourites</h2>
            </span>
          </>
        )}
      </div>
    </section>
  );
}
