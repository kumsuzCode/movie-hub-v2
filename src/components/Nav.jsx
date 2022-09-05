import React from "react";
import logo from "../assets/2.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <ul className="nav__links">
          <Link to="/">
            <li className="nav__link">Home</li>
          </Link>
          <li className="nav__link no-click">About</li>
          <li className="nav__link nav__link--contact no-click">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
