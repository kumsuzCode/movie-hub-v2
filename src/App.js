import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import { useState } from "react";

function App() {
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

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Main query={query} handleQuery={handleQuery} />}
          />

          <Route
            path="/search"
            element={
              <Search
                query={query}
                toggleFavourite={toggleFavourite}
                favourites={favourites}
              />
            }
          />

          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                toggleFavourite={toggleFavourite}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
