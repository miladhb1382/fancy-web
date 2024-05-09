import React, { useEffect, useState } from "react";
import { useRef } from "react";
export default function About() {
  return (
    <div className="container-about">
      <header>
        <span style={{ fontSize: "55px" }}>😍</span>
        <ContactChannel />
      </header>
      <body>
        <h1>Thanks For Watching</h1>
        <EyesCss />
      </body>
      <GameAbout />
    </div>
  );
}
function GameAbout() {
  return (
    <footer class="container-about-wall">
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
    </footer>
  );
}
function ContactChannel() {
  return (
    <div style={{ textAlign: "right" }}>
      <button>✉️test@gmail.com</button>
      <button>📲test_instagram</button>
      <button>🌐test.com</button>
    </div>
  );
}
function EyesCss() {
  return (
    <div class="eyes-container">
      <div class="eye"></div>
      <div class="eye"></div>
    </div>
  );
}
