import React from "react";
import "../../../index.css";
import { useState, useEffect, useRef } from "react";

export default function Navbar({ setloginModal, setSearchBar, searchbar }) {
  const styles = {
    height: "100%",
    backgroundColor: "#fbf9f9",
    zIndex: 100,
    backgroundImage: `linear-gradient(rgba(232, 49, 126,0.3), rgba(232, 49, 126, 0.3)), url("image.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "440px",
    boxShadow: "black -10px 0 100px -1px inset",
    display: "grid",
    gridTemplateRows: "0.5fr 3fr",
  };
  return (
    <section className="hero-section" style={styles}>
      <div className="nav-bar">
        <SearchBar setSearchBar={setSearchBar} searchbar={searchbar} />
        <ProfileIcon setloginModal={setloginModal} />
      </div>
    </section>
  );
}
function SearchBar({ searchbar, setSearchBar }) {
  const searchRef = useRef(null);
  function ClickSearch() {
    searchRef.current.focus();
  }
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);
  const Submit = (e) => {
    e.preventDefault();
  };
  const SearchHandler = (event) => {
    setSearchBar(event.target.value);
  };
  return (
    <form onSubmit={Submit}>
      <span className="Seach-icon" onClick={ClickSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>

      <div style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="Search Movie..."
          ref={searchRef}
          value={searchbar}
          onChange={SearchHandler}
        />
        <button onClick={Submit}>Search</button>
      </div>
    </form>
  );
}
function ProfileIcon({ setloginModal }) {
  const clickHandler = () => {
    setloginModal(true);
  };
  return (
    <div className="hero-section-Login">
      <div className="alert-icon">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="hover-login-item"
          >
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path
              fillRule="evenodd"
              d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div className="login-icon">
        <span onClick={clickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="hover-login-item"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
