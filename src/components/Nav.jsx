import React from "react";
import logo from "../assets/2.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/home">
          <img src={logo} className="logo" alt="" />
        </Link>
        <ul className="nav__links">
          <Link to="/home">
            <li className="nav__link">Home</li>
          </Link>
          <Link to="/favourites">
            <li className="nav__link">Favourites</li>
          </Link>
          <li className="nav__link no-click">About</li>
        </ul>
      </div>
    </nav>
  );
}
