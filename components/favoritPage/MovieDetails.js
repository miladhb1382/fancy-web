import React, { useEffect, useState } from "react";
import StarRatingComponent from "../../../project9/componet/StarRating";
export default function MovieDetails({ favorit, idDeatails, setIdDetails }) {
  const [index, setIndex] = useState([]);
  const [userRating, setuserRating] = useState(0);
  const [render, setrender] = useState(0);
  useEffect(() => {
    if (idDeatails !== null) {
      setIndex([]);
      const filteredArray = favorit.filter(
        (item) => item.imdbID === idDeatails
      );
      setIndex(filteredArray);
      setuserRating(0);
      setrender((num) => num + 1);
    }
  }, [favorit, idDeatails]);
  const close = () => {
    setIndex([]);
    setIdDetails(null);
  };
  if (index.length > 0) {
    return (
      <div className="watchlist-details" style={{ overflow: "hidden" }}>
        <span className="close" onClick={close}></span>
        <main className="show-details">
          <div>
            {index.length > 0 && (
              <img src={index[0].Poster} alt="Movie Poster" />
            )}
          </div>
          <div>{index.length > 0 && <h1>{index[0].Title}</h1>}</div>
          <RatingForm setuserRating={setuserRating} idDeatails={idDeatails} />
          <DeatailsInfo index={index} userRating={userRating} />
        </main>
      </div>
    );
  } else {
    return (
      <div
        className="watchlist-details"
        style={{
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <section style={{ width: "100%" }} class="center">
          <span>click One</span>
        </section>
      </div>
    );
  }
}
function RatingForm({ setuserRating, idDeatails }) {
  useEffect(() => {}, [idDeatails]);

  return (
    <div style={{ marginBottom: "20px" }}>
      {idDeatails && (
        <StarRatingComponent
          maxRating={10}
          color="#e8317e"
          size={33}
          OnRate={setuserRating}
          idDeatails={idDeatails}
        />
      )}
    </div>
  );
}
function DeatailsInfo({ index, userRating }) {
  useEffect(() => {
    if (index.length > 0) {
      console.log("here");
      console.log(index);
    }
  }, [index]);
  if (index.length > 0) {
    return (
      <div
        style={{ display: "flex", gap: "30px" }}
        className="item-data-details"
      >
        <div>
          <label>imdbID:</label>
          <span>{index[0].imdbID}</span>
        </div>
        <div>
          <label>Type:</label>
          <span>{index[0].Type}</span>
        </div>
        <div>
          <label>userRating:</label>
          <span>
            {userRating === 0 ? (
              <p>💖You Are not Rated</p>
            ) : (
              <>⭐{userRating}</>
            )}
          </span>
        </div>
        <div>
          <label>Year:</label>
          <span>{index[0].Year}</span>
        </div>
      </div>
    );
  }
}
