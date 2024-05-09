import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Menu from "../Menu";
import Navbar from "../HomePage/navbar";
import WatchListShow from "../HomePage/WatchListContent";
import Login from "../../login";
import MainContent from "../HomePage/WatchListContent";
export default function HomePage({ tempWatchedData, setFavorit, favorit }) {
  const [loginModal, setloginModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState(tempWatchedData);
  const [searchbar, setSearchBar] = useState("");
  useEffect(() => {
    if (filter === "All") {
      setData(tempWatchedData);
    }
    if (filter === "New one") {
      const sortedData = [...tempWatchedData].sort(
        (a, b) => Number(b.Year) - Number(a.Year)
      );
      setData(sortedData);
    }
    if (filter === "User Rated") {
      const sortedData = [...tempWatchedData].sort(
        (a, b) => Number(b.userRating) + Number(a.userRating)
      );
      setData(sortedData);
    }
    if (filter === "Imdb Rated") {
      const sortedData = [...tempWatchedData].sort(
        (a, b) => Number(b.imdbRating) + Number(a.imdbRating)
      );
      setData(sortedData);
    }
    if (filter === "Average") {
      const sortedData = [...tempWatchedData].sort((a, b) => {
        const averageA = (Number(a.userRating) + Number(a.imdbRating)) / 2;
        const averageB = (Number(b.userRating) + Number(b.imdbRating)) / 2;
        return averageB - averageA;
      });
      setData(sortedData);
    }
    if (searchbar !== "") {
      const resualt = tempWatchedData.filter((item) =>
        item.Title.toLowerCase().includes(searchbar.toLowerCase())
      );
      setData(resualt);
    }
  }, [filter, searchbar]);

  return (
    <div className="container">
      <Navbar
        setloginModal={setloginModal}
        setSearchBar={setSearchBar}
        searchbar={searchbar}
      />
      <main className="content">
        <NavFilter setFilter={setFilter} filter={filter} />
        <MainContent
          tempWatchedData={data}
          setFavorit={setFavorit}
          favorit={favorit}
        />
        {loginModal && (
          <Login setloginModal={setloginModal}>
            <Form />
          </Login>
        )}
      </main>
    </div>
  );
}
function Form() {
  return (
    <form className="form-login">
      <h1 style={{ padding: "10px" }}>🎬Watching Movie</h1>
      <div class="input-container">
        <input type="text" id="username" class="input-field" placeholder=" " />
        <label for="username" class="input-label">
          Username
        </label>
      </div>
      <div class="input-container">
        <input
          type="password"
          id="password"
          class="input-field"
          placeholder=" "
        />
        <label for="password" class="input-label">
          Password
        </label>
      </div>
      <button className="login-button">Login</button>
    </form>
  );
}
function NavFilter({ setFilter, filter }) {
  const handle = (event) => {
    setFilter(event.target.value);
  };
  return (
    <nav className="filter" style={{ height: "56px" }}>
      <div onClick={handle}>
        <button className={filter === "All" ? "filter-active" : ""} value="All">
          All
        </button>
        <button
          className={filter === "New one" ? "filter-active" : ""}
          value="New one"
        >
          New one
        </button>
        <button
          className={filter === "User Rated" ? "filter-active" : ""}
          value="User Rated"
        >
          User Rated
        </button>
        <button
          className={filter === "Imdb Rated" ? "filter-active" : ""}
          value="Imdb Rated"
        >
          Imdb Rated
        </button>
        <button
          className={filter === "Average" ? "filter-active" : ""}
          value="Average"
        >
          Average User and Imdb
        </button>
      </div>
    </nav>
  );
}
