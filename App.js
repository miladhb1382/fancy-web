import React, { useEffect, useState } from "react";
import Menu from "./project10/components/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./project10/components/Pages/HomePage";
import MovieList from "./project10/components/Pages/see";
import About from "./project10/components/Pages/about";
import FavoritMovie from "./project10/components/Pages/App-favorit";
import Login from "./project10/login";
import "./index.css";
export default function App() {
  const [favorit, setFavorit] = useState([]);
  const [tempWatchedData, settempWatchedData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [error, setErrore] = useState("");
  useEffect(() => {
    const KEY = "a5d137e9";
    setLoding(true);
    setErrore("");

    try {
      fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          return res.json();
        })
        .then((data) => {
          settempWatchedData(data.Search);
          console.log(data.Search);
          setLoding(false);
        })
        .catch((error) => {
          console.log(error);
          setLoding(false);
          setErrore("Something went wrong with fetching movies");
        });
    } catch (error) {
      console.log(error);
      setLoding(false);
      setErrore(error.message);
    }
  }, []);
  if (loding || error !== "") {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          {loding ? (
            <div class="ring">
              Loading
              <span></span>
            </div>
          ) : (
            <p className="error">{error}</p>
          )}
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                tempWatchedData={tempWatchedData}
                setFavorit={setFavorit}
                favorit={favorit}
                loding={loding}
              />
            )}
          />
          <Route path="/MovieList" exact render={() => <MovieList />} />
          <Route
            path="/Favorit"
            exact
            render={() => (
              <FavoritMovie favorit={favorit} setFavorit={setFavorit} />
            )}
          />
          <Route path="/About" exact render={() => <About />} />
        </div>
      </BrowserRouter>
    );
  }
}
function Error() {
  return (
    <p className="error">
      <span>😭</span>
    </p>
  );
}
