import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [cardArray, setCardArray] = useState([
    {
      id: 1,
      name: "cheeseburger",
      img: "img/cheeseburger.png",
      match: false,
    },
    {
      id: 2,
      name: "ice-cream",
      img: "img/ice-cream.png",
      match: false,
    },
    {
      id: 3,
      name: "pizza",
      img: "img/pizza.png",
      match: false,
    },
    {
      id: 4,
      name: "milkshake",
      img: "img/milkshake.png",
      match: false,
    },
    {
      id: 5,
      name: "hotdog",
      img: "img/hotdog.png",
      match: false,
    },
    {
      id: 6,
      name: "fries",
      img: "img/fries.png",
      match: false,
    },
    {
      id: 7,
      name: "cheeseburger",
      img: "img/cheeseburger.png",
      match: false,
    },
    {
      id: 8,
      name: "ice-cream",
      img: "img/ice-cream.png",
      match: false,
    },
    {
      id: 9,
      name: "pizza",
      img: "img/pizza.png",
      match: false,
    },
    {
      id: 10,
      name: "milkshake",
      img: "img/milkshake.png",
      match: false,
    },
    {
      id: 11,
      name: "hotdog",
      img: "img/hotdog.png",
      match: false,
    },
    {
      id: 12,
      name: "fries",
      img: "img/fries.png",
      match: false,
    },
  ]);
  const [firstSelected, setFirstSelected] = useState(0);
  const [secondSelected, setSecondSelected] = useState(0);
  const [firstSelectedName, setFirstSelectedName] = useState("");
  const [secondSelectedName, setSecondSelectedName] = useState("");
  const [gamePoint, setGamePoint] = useState(0);
  const [matchCondition, setMatchCondition] = useState(true);

  const UpdateArray = (index) => {
    const temp = [...cardArray];
    temp[index].match = !temp[index].match;
    setCardArray(temp);
  };

  const reset = () => {
    setFirstSelected(0);
    setSecondSelected(0);
    setFirstSelectedName("");
    setSecondSelectedName("");
  };

  const handleClick = (id, name) => {
    if (!firstSelected) {
      setFirstSelected(id);
      setFirstSelectedName(name);
    } else if (!secondSelected) {
      setSecondSelected(id);
      setSecondSelectedName(name);
      setTimeout(reset, 500);
    }
  };

  useEffect(() => {
    if (firstSelectedName && secondSelectedName) {
      if (firstSelectedName === secondSelectedName) {
        setGamePoint((prev) => prev + 1);
        UpdateArray(firstSelected - 1);
        UpdateArray(secondSelected - 1);
      }
    }
  }, [firstSelected, secondSelected]);

  const resetGame = () => {
    setGamePoint(0);
    setMatchCondition(!matchCondition);
  };

  return (
    <div className="app df-col">
      {gamePoint === 6 && <button onClick={resetGame}>Reset Board</button>}
      <div className="cardsContainer df-row">
        {cardArray.map((card) => (
          <div className="card" key={card.id}>
            <img
              src={
                card.match === matchCondition
                  ? "img/white.png"
                  : firstSelected === card.id || secondSelected === card.id
                  ? card.img
                  : "img/blank.jpg"
              }
              alt=""
              onClick={() => handleClick(card.id, card.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
