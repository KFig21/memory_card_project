import React from 'react';
import nbalogo from './assets/nbalogo.png';

function Header(props) {
    const { score, highScore } = props;

    return(
        <header className='header'>
            <h1 className='title'> <img className='header-logo' src={nbalogo} alt="nba logo"></img>NBA Memory Game</h1>
            <div className='score-container'>
                <p className='current-score'>Score: {score}</p>
                <p className='high-score'>High Score: {highScore}</p>
            </div>
        </header>
    )
}

export default Header;