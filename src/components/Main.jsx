import React, { useContext } from "react";
import { Link } from "react-router-dom";
import undraw from "../assets/undraw-movie.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../contexts/AppContext";

export default function Main() {
  const { query, handleQuery } = useContext(AppContext);

  return (
    <header>
      <div className="header__container">
        <h1>
          Find your next movie to watch with
          <span className="blue"> MovieHub</span>
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
            <button className="search-btn">
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
