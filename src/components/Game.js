import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, addCard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    addCard((prevArr) => [...prevArr, cardName]);
  };

  const reset = () => {
    setGameOver(false);
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      if (score > highScore) {
        handleHighScore();
      }
      setMessage("Game Over!");
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (score === 30) {
      setMessage("Winner!");
      setGameOver(true);
    }
  }, [score]);

  return (
    <>
      <Header score={score} highScore={highScore} />
      {gameOver && <Modal message={message} reset={reset} score={score} />}
      <div className="board-container" id="board-container">
        <CardData
          handleGameLogic={handleGameLogic}
          score={score}
          highScore={highScore}
        />
      </div>
      <Footer />
    </>
  );
}

export default Game;
