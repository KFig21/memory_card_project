import React, { useState } from 'react';
import CardData from './CardData';
import Header from './Header';
import Footer from './Footer';

function Game() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardsArr, addCard] = useState([]);

    const handleScore = () => { setScore(prevScore => prevScore + 1) };

    const handleHighScore = () => { setHighScore(score) };

    const handleCard = (cardName) => { addCard((prevArr) => [...prevArr, cardName]) };

    const reset = () => {
        setScore(0);
        addCard([]);
    };
    
    const handleGameLogic = (cardName) => {
        if(!cardsArr.includes(cardName)){
            handleCard(cardName);
            handleScore();
        } else {
            if (score > highScore){
                handleHighScore();
            }
            reset();
        }
    };

    return(
        <>
            <Header  score={score} highScore={highScore} />
            <div className='board-container' id='board-container'>
                <CardData
                    handleGameLogic={handleGameLogic}
                    score={score}
                    highScore={highScore}
                />
            </div>
            <Footer />
        </>
    )
}

export default Game;