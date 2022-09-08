import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import FavouritesPage from "./pages/FavouritesPage";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
