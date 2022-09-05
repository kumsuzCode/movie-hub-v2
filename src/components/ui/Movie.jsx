import React from "react";

export default function Movie({ poster, title, year }) {
  return (
    <div className="result__movie">
      <figure className="movie__img--wrapper">
        <img src={poster} alt="" className="movie__img" />
      </figure>
      <h3 className="movie__name">{title}</h3>
      <h4 className="movie__year">{year}</h4>
    </div>
  );
}
