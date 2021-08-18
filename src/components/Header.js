import React from "react";
import nbalogo from "./assets/nbalogo.png";

function Header({ score, highScore }) {
  return (
    <header className="header">
      <h1 className="title">
        <img className="header-logo" src={nbalogo} alt="nba logo"></img>
        <span>NBA Memory Game</span>
      </h1>

      <div className="score-container">
        <p className="current-score">Score: {score}</p>
        <p className="high-score">High Score: {highScore}</p>
      </div>
    </header>
  );
}

export default Header;
