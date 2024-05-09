import React, { useEffect } from "react";
import { useState } from "react";

export default function MainContent({ tempWatchedData, setFavorit, favorit }) {
  return (
    <div className="movie-list">
      <section className="main-content">
        <MapData
          tempWatchedData={tempWatchedData}
          setFavorit={setFavorit}
          favorit={favorit}
        />
      </section>
    </div>
  );
}
function MapData({ tempWatchedData, setFavorit, favorit }) {
  useEffect(() => {
    const storedFavorit = localStorage.getItem("favorit");
    if (storedFavorit) {
      setFavorit(JSON.parse(storedFavorit));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorit", JSON.stringify(favorit));
  }, [favorit]);

  const handleClick = (item) => {
    const isAlreadyFavorited = favorit.some(
      (favItem) => favItem.imdbID === item.imdbID
    );

    if (!isAlreadyFavorited) {
      setFavorit((prevFavorites) => [...prevFavorites, item]);
    }
  };

  return (
    <>
      {tempWatchedData.map((item) => {
        const isFavorit = favorit.some(
          (favItem) => favItem.imdbID === item.imdbID
        );

        return (
          <div key={item.imdbID}>
            <img src={item.Poster} alt={item.Title} />
            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
              {item.Title}
            </h1>
            <span>
              <h2>{item.Year}</h2>
              <h3>120min</h3>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={isFavorit ? "like" : ""}
                  onClick={() => handleClick(item)}
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </span>
            </span>
          </div>
        );
      })}
    </>
  );
}
