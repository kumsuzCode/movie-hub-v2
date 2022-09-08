import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const toggleFavourite = (poster, title, year, id) => {
    if (favourites.every((movie) => movie.id !== id)) {
      setFavourites((prevFavourites) => [
        ...prevFavourites,
        {
          title: title,
          poster: poster,
          year: year,
          id: id,
        },
      ]);
    } else {
      setFavourites((prevFavourites) => {
        const newFaves = prevFavourites.filter((movie) => movie.id !== id);
        return newFaves;
      });
    }
  };

  const value = {
    query,
    handleQuery,
    favourites,
    toggleFavourite,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
