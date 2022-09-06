import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movie({
  poster,
  title,
  year,
  id,
  toggleFavourite,
  favourites,
}) {
  return (
    <div className="result__movie">
      <figure className="movie__img--wrapper">
        <img src={poster} alt="" className="movie__img" />
      </figure>
      <div className="movie__info">
        <span>
          <h3 className="movie__name">{title}</h3>
          <h4 className="movie__year">{year}</h4>
        </span>

        {favourites.some((movie) => movie.id === id) ? (
          <div onClick={() => toggleFavourite(poster, title, year, id)}>
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              className="star star-full"
            />
          </div>
        ) : (
          <div onClick={() => toggleFavourite(poster, title, year, id)}>
            <FontAwesomeIcon
              icon="fa-regular fa-star"
              className="star star-empty "
            />
          </div>
        )}
      </div>
    </div>
  );
}
