import React, { useEffect, useState } from "react";
import FavoritMovieList from "../favoritPage/FavoritMovieList";
import MovieDetails from "../favoritPage/MovieDetails";
export default function FavoritMovie({ favorit, setFavorit }) {
  const [idDeatails, setIdDetails] = useState(null);
  return (
    <div className="container-WatchList">
      <FavoritMovieList
        favorit={favorit}
        setFavorit={setFavorit}
        setIdDetails={setIdDetails}
      />
      <MovieDetails
        favorit={favorit}
        idDeatails={idDeatails}
        setIdDetails={setIdDetails}
      />
    </div>
  );
}
/*import React, { useState } from 'react'; baraye dokme close

function CloseButton() {
  const [textMode, setTextMode] = useState(false);

  const handleButtonClick = () => {
    setTextMode(!textMode);
  };

  return (
    <button className={`close ${textMode ? 'text-mode' : ''}`} onClick={handleButtonClick}>
      {textMode ? <span className="text">Close</span> : <span className="text">X</span>}
    </button>
  );
} */
