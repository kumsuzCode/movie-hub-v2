import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
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
          {<Route path="/search" element={<Search query={query} />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
