import React from "react";
import Favourites from "../components/Favourites";
import Nav from "../components/Nav";

export default function FavouritesPage({ toggleFavourite, favourites }) {
  return (
    <>
      <Nav />
      <Favourites />
    </>
  );
}
