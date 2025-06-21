import { useEffect, useState } from 'react';

import helmet from '../assets/helmet.png';
import potion from '../assets/potion.png';
import ring from '../assets/ring.png';
import scroll from '../assets/scroll.png';
import shield from '../assets/shield.png';
import sword from '../assets/sword.png';

type CardType = {
  src: string;
  matched: boolean;
  id?: number;
};

interface MemoryGameProps {
  onComplete?: (score: number) => void;
}

function MemoryGame({ onComplete }: MemoryGameProps) {
  const cardImages: CardType[] = [
    { src: helmet, matched: false },
    { src: potion, matched: false },
    { src: ring, matched: false },
    { src: scroll, matched: false },
    { src: shield, matched: false },
    { src: sword, matched: false }
  ];

  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffled);
    setTurns(0);
  };

  const handleChoice = (card: CardType) => {
    !choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prev =>
          prev.map(card =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prev => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  // Check for game complete
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      // Give a score based on performance (example: 1200 - turns*50)
      const score = Math.max(200, 1200 - turns * 50);
      if (onComplete) {
        setTimeout(() => onComplete(score), 1200); // Delay so user sees last match
      }
    }
  }, [cards, turns, onComplete]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Memory Game</h1>
      <button
        onClick={shuffleCards}
        className="mb-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        New Game
      </button>
      <div className="grid grid-cols-4 gap-4 max-w-[500px]">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className="mt-4 text-lg">Turns: {turns}</p>
    </div>
  );
}

type CardProps = {
  card: CardType;
  handleChoice: (card: CardType) => void;
  flipped: boolean;
  disabled: boolean;
};

function Card({ card, handleChoice, flipped, disabled }: CardProps) {
  const handleClick = () => {
    if (!disabled && !flipped) {
      handleChoice(card);
    }
  };

  return (
    <div
      className={`relative w-24 h-32 cursor-pointer`}
      onClick={handleClick}
    >
      <div className={`w-full h-full`}>
        {flipped ? (
          <img
            src={card.src}
            alt="card front"
            className="w-full h-full object-cover rounded shadow-lg"
          />
        ) : (
          <div className="w-full h-full bg-blue-800 rounded shadow-lg flex items-center justify-center text-2xl">
            ❓
          </div>
        )}
      </div>
    </div>
  );
}

export default MemoryGame;
