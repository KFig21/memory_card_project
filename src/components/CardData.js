import React, { useState, useEffect } from "react";
import Card from "./Card";
import atlanta from "./assets/logos/atlanta.png";
import boston from "./assets/logos/boston.png";
import brooklyn from "./assets/logos/brooklyn.png";
import charlotte from "./assets/logos/charlotte.png";
import chicago from "./assets/logos/chicago.png";
import cleveland from "./assets/logos/cleveland.png";
import dallas from "./assets/logos/dallas.png";
import denver from "./assets/logos/denver.png";
import detroit from "./assets/logos/detroit.png";
import golden_state from "./assets/logos/golden_state.png";
import houston from "./assets/logos/houston.png";
import indiana from "./assets/logos/indiana.png";
import la_clippers from "./assets/logos/la_clippers.png";
import la_lakers from "./assets/logos/la_lakers.png";
import memphis from "./assets/logos/memphis.png";
import miami from "./assets/logos/miami.png";
import milwaukee from "./assets/logos/milwaukee.png";
import minnesota from "./assets/logos/minnesota.png";
import new_orleans from "./assets/logos/new_orleans.png";
import new_york from "./assets/logos/new_york.png";
import oklahoma_city from "./assets/logos/oklahoma_city.png";
import orlando from "./assets/logos/orlando.png";
import philadelphia from "./assets/logos/philadelphia.png";
import phoenix from "./assets/logos/phoenix.png";
import portland from "./assets/logos/portland.png";
import sacramento from "./assets/logos/sacramento.png";
import san_antonio from "./assets/logos/san_antonio.png";
import toronto from "./assets/logos/toronto.png";
import utah from "./assets/logos/utah.png";
import washington from "./assets/logos/washington.png";

function CardData(props) {
  const { handleGameLogic, score, highScore } = props;

  let cardinfo = [
    {
      src: atlanta,
      title: "Atlanta Hawks",
      borderStyle: "4px solid #c8102e",
    },
    {
      src: boston,
      title: "Boston Celtics",
      borderStyle: "4px solid #007a30",
    },
    {
      src: brooklyn,
      title: "Brooklyn Nets",
      borderStyle: "4px solid white",
    },
    {
      src: charlotte,
      title: "Charlotte Hornets",
      borderStyle: "4px solid #00778c",
    },
    {
      src: chicago,
      title: "Chicago Bulls",
      borderStyle: "4px solid #bc032b",
    },
    {
      src: cleveland,
      title: "Cleveland Cavaliers",
      borderStyle: "4px solid #6e253c",
    },
    {
      src: dallas,
      title: "Dallas Mavericks",
      borderStyle: "4px solid #1752b3",
    },
    {
      src: denver,
      title: "Denver Nuggets",
      borderStyle: "4px solid #0d213e",
    },
    {
      src: detroit,
      title: "Detroit Pistons",
      borderStyle: "4px solid #0046ae",
    },
    {
      src: golden_state,
      title: "Golden State Warriors",
      borderStyle: "4px solid #1d428a",
    },
    {
      src: houston,
      title: "Houston Rockets",
      borderStyle: "4px solid #c81c2b",
    },
    {
      src: indiana,
      title: "Indiana Pacers",
      borderStyle: "4px solid #fdbb30",
    },
    {
      src: la_clippers,
      title: "Los Angeles Clippers",
      borderStyle: "4px solid #d7083b",
    },
    {
      src: la_lakers,
      title: "Los Angeles Lakers",
      borderStyle: "4px solid #562d83",
    },
    {
      src: memphis,
      title: "Memphis Grizzlies",
      borderStyle: "4px solid #7d9bc1",
    },
    {
      src: miami,
      title: "Miami Heat",
      borderStyle: "4px solid #98012e",
    },
    {
      src: milwaukee,
      title: "Milwaukee Bucks",
      borderStyle: "4px solid #274e37",
    },
    {
      src: minnesota,
      title: "Minnesota Timberwolves",
      borderStyle: "4px solid #005084",
    },
    {
      src: new_orleans,
      title: "New Orleans Pelicans",
      borderStyle: "4px solid #ba985a",
    },
    {
      src: new_york,
      title: "New York Knicks",
      borderStyle: "4px solid #046ab4",
    },
    {
      src: oklahoma_city,
      title: "Oklahoma City Thunder",
      borderStyle: "4px solid #0072cf",
    },
    {
      src: orlando,
      title: "Orlando Magic",
      borderStyle: "4px solid #0473bc",
    },
    {
      src: philadelphia,
      title: "Philadelphia 76ers",
      borderStyle: "4px solid #003da5",
    },
    {
      src: phoenix,
      title: "Phoenix Suns",
      borderStyle: "4px solid #49298a",
    },
    {
      src: portland,
      title: "Portland Trail Blazers",
      borderStyle: "4px solid #e2393f",
    },
    {
      src: sacramento,
      title: "Sacramento Kings",
      borderStyle: "4px solid #502d7f",
    },
    {
      src: san_antonio,
      title: "San Antonio Spurs",
      borderStyle: "4px solid #8d8e8e",
    },
    {
      src: toronto,
      title: "Toronto Raptors",
      borderStyle: "4px solid #bd1b21",
    },
    {
      src: utah,
      title: "Utah Jazz",
      borderStyle: "4px solid #002144",
    },
    {
      src: washington,
      title: "Washington Wizards",
      borderStyle: "4px solid #cc092f",
    },
  ];

  const [cards, setNewCards] = useState(cardinfo);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      [newCards[randomIndex], newCards[i]] = [
        newCards[i],
        newCards[randomIndex],
      ];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </div>
  );
}

export default CardData;
