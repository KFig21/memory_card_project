import React from 'react';

function Card(props) {
    const{ card: { src, title, borderStyle }, handleGameLogic } = props;

    const style = {
        backgroundColor: 'var(--card-background-color)',
        border: borderStyle,
    }

    return(
        <button
            className='card'
            style={style}
            onClick={handleGameLogic.bind(this, title)}
        >
            <figure className="team-container">
                <div  className="logo-container">
                    <img src={src} alt={title} />
                </div>
                <div className="team-title"> {title} </div>
            </figure>
        </button>
    )
}

export default Card;