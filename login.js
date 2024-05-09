import React, { useState } from "react";
import "../index.css";
export default function Login({ setloginModal }) {
  const clickHandler = () => {
    setloginModal(false);
  };
  return (
    <div>
      <div class="login" onClick={clickHandler}></div>
      <Form />
    </div>
  );
}
function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };
  return (
    <form className="form-login" onSubmit={Submit}>
      <h1 style={{ padding: "20px" }}>🎬Watching Movie</h1>
      <div class="input-container">
        <input
          type="text"
          id="username"
          class="input-field"
          placeholder=" "
          value={username}
          onChange={usernameHandler}
        />
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
          value={password}
          onChange={passwordHandler}
        />
        <label for="password" class="input-label">
          Password
        </label>
      </div>
      <button className="login-button" onClick={Submit}>
        Login
      </button>
    </form>
  );
}
