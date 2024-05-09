import React, { useEffect, useState } from "react";
import MainContent from "../HomePage/WatchListContent";

export default function MovieList() {
  return (
    <div className="container-news">
      <header>
        <h1>Movie News</h1>
      </header>
      <main className="news-content">
        <ImageCarousel />
        <NewsShow />
      </main>
    </div>
  );
}

function ImageCarousel() {
  return (
    <div className="sidebar-image">
      <img src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" />
      <img src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg" />
      <img src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" />
      <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" />
      <img src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" />
      <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" />
      <img src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" />
    </div>
  );
}
function NewsShow() {
  return (
    <div className="news">
      <h3>Story News</h3>
      <div className="new-style">
        <div>
          <img src="./spider.jpg" />
          <p>
            But Spider-Man's heroism extends beyond his remarkable physical
            abilities. Beneath the iconic mask, he is Peter Parker, a humble and
            compassionate individual who understands the profound impact he can
            have on those around him. He embodies the very essence of a true
            hero, not only by fighting villains but also by uplifting the
            spirits of the people he encounters.
          </p>
        </div>
        <div>
          <img src="./batman.jpg" />
          <p>
            Batman's indomitable willpower and strategic thinking set him apart
            from Spider-Man. He meticulously plans every move, utilizing his
            vast arsenal of gadgets and his deep understanding of human
            psychology to gain the upper hand in any situation. His unwavering
            commitment to justice and his unbreakable spirit make him a force to
            be reckoned with, elevating him to a high level
          </p>
        </div>
        <div>
          <img src="./new.jpg" />
          <p>
            inspiration from Batman's darkness and Spider-Man's spider-like
            abilities, could possess a unique blend of skills and powers. They
            might have spider-like abilities such as enhanced jumping,
            electronic webshooters, and an uncanny ability to sense and navigate
            dangerous situations. Furthermore, they could harness advanced
            technology based on both spiders and bats.
          </p>
        </div>
      </div>
      <h3>Captivated Audiences Worldwide</h3>
      <section className="actor-sidebar">
        <span
          style={{
            height: "500px",
            margin: "auto",
            display: "grid",
          }}
        >
          <img src="100.jpg" className="actor-image" />
        </span>
        <div className="actor">
          <div>
            <img src="./1.jpg" />
            <h4>Alexandra Daddario</h4>
          </div>
          <div>
            <img src="./3.jpg" />
            <h4>Keanu Reeves</h4>
          </div>
          <div>
            <img src="./4.jpg" />
            <h4>Elizabeth Olsen</h4>
          </div>
          <div>
            <img src="./6.jpg" />
            <h4>Dwayne Johnson</h4>
          </div>
          <div>
            <img src="./2.jpg" />
            <h4>Emilia Clarke</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
