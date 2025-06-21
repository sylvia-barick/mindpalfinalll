import React, { useEffect, useState } from 'react';

type Item = {
  id: number;
  color: 'red' | 'blue' | 'green';
};

const generateItems = (): Item[] => [
  { id: 1, color: 'red' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'green' },
  { id: 4, color: 'red' },
  { id: 5, color: 'blue' },
  { id: 6, color: 'green' },
  { id: 7, color: 'red' },
  { id: 8, color: 'blue' },
  { id: 9, color: 'green' }
];

const GAME_DURATION = 30; // seconds

const SortSenseGame: React.FC = () => {
  const [items, setItems] = useState<Item[]>(generateItems());
  const [bins, setBins] = useState<{ [key: string]: Item[] }>({
    red: [],
    blue: [],
    green: [],
  });
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleDragStart = (e: React.DragEvent, item: Item) => {
    e.dataTransfer.setData('item-id', item.id.toString());
  };

  const handleDrop = (e: React.DragEvent, binColor: string) => {
    const itemId = parseInt(e.dataTransfer.getData('item-id'));
    const item = items.find(i => i.id === itemId);
    if (item && item.color === binColor) {
      setBins(prev => ({
        ...prev,
        [binColor]: [...prev[binColor], item],
      }));
      setItems(prev => prev.filter(i => i.id !== itemId));
      setPoints(p => p + 1);
    }
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const resetGame = () => {
    setItems(generateItems());
    setBins({ red: [], blue: [], green: [] });
    setPoints(0);
    setTimeLeft(GAME_DURATION);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🎨 Sort & Sense</h1>

      <div className="flex gap-8 mb-4">
        <div className="text-lg font-medium">⏱️ Time Left: {timeLeft}s</div>
        <div className="text-lg font-medium">⭐ Points: {points}</div>
      </div>

      {!gameOver && (
        <>
          <div className="flex gap-4 mb-8 flex-wrap justify-center">
            {items.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                className={`w-16 h-16 rounded shadow-lg cursor-grab bg-${item.color}-500`}
              ></div>
            ))}
          </div>

          <div className="flex gap-8 justify-center flex-wrap mb-4">
            {(['red', 'blue', 'green'] as const).map(color => (
              <div
                key={color}
                onDrop={(e) => handleDrop(e, color)}
                onDragOver={allowDrop}
                className={`w-32 h-32 rounded-lg flex flex-col items-center justify-center border-4 border-${color}-500`}
              >
                <p className={`text-${color}-400 font-semibold mb-1`}>
                  {color.toUpperCase()}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {bins[color].map(item => (
                    <div
                      key={item.id}
                      className={`w-6 h-6 rounded-full bg-${item.color}-500`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {gameOver && (
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">🏁 Time's Up!</h2>
          <p className="text-lg">Your final score: <strong>{points}</strong></p>
        </div>
      )}

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded"
      >
        Restart Game
      </button>
    </div>
  );
};

export default SortSenseGame;
