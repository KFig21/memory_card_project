import React from "react";

export default function Modal({ message, score, reset }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <p className="game-over">{message}</p>
        <p className="game-over-score">Final Score: {score}</p>
        <button className="play-again-button" onClick={reset}>
          Play again?
        </button>
      </div>
    </div>
  );
}
