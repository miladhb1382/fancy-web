import React, { useState } from "react";

export default function FavoritMovieList({
  favorit,
  setFavorit,
  setIdDetails,
}) {
  function deleteHandler(id) {
    const result = [...favorit].filter((item) => item.imdbID !== id);
    setFavorit(result);
  }
  const clickItem = (id) => {
    setIdDetails(id);
  };
  if (favorit.length > 0) {
    return (
      <div style={{ overflow: "scroll" }}>
        <ul className="list">
          {favorit.map((item) => (
            <li key={item.imdbID} onClick={() => clickItem(item.imdbID)}>
              <img src={item.Poster} alt="Movie Poster" />
              <h3>{item.Title}</h3>
              <p>
                <span>⌛120</span>
              </p>
              <p>
                <span>{item.Year} year</span>
              </p>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => deleteHandler(item.imdbID)} // Pass the imdbID to the deleteHandler function
              >
                ❌
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div
        style={{
          overflow: "scroll",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <span className="no-Item">Add One</span>
        <span style={{ fontSize: "50px" }}>🫠</span>
      </div>
    );
  }
}
