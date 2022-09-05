import React from "react";
import { Link, Navigate } from "react-router-dom";
import undraw from "../assets/undraw-movie.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main({ query, handleQuery }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    Navigate("/search");
  };

  return (
    <header>
      <div className="header__container">
        <h1>
          Find your next movie to watch with{" "}
          <span className="blue">MovieHub</span>
        </h1>
        <h2>
          Browse our <span className="blue">Extensive Catalogue...</span>
        </h2>
        <form id="form">
          <input
            type="text"
            placeholder="Movie Name"
            id="search-bar"
            value={query}
            onChange={handleQuery}
          />
          <Link to="/search">
            <button className="search-btn" onSubmit={handleFormSubmit}>
              <FontAwesomeIcon
                className="search-icon"
                icon="fa-solid fa-magnifying-glass"
              />
            </button>
          </Link>
        </form>
        <figure className="header__img--wrapper">
          <img src={undraw} alt="" />
        </figure>
      </div>
    </header>
  );
}
