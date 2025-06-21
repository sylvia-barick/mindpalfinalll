import React, { useEffect, useState } from 'react';

type Shape = {
  id: number;
  color: string;
  isTarget: boolean;
  x: number;
  y: number;
};

const TARGET_COLOR = 'blue';
const GAME_DURATION = 60; // seconds

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateShape = (isTarget: boolean): Shape => ({
  id: Math.random(),
  color: isTarget ? TARGET_COLOR : ['red', 'green', 'yellow'][getRandomInt(0, 2)],
  isTarget,
  x: getRandomInt(10, 80),
  y: getRandomInt(10, 80),
});

const AttentionSpanBuilder: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(t => t - 1);
        spawnShapes();
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  const spawnShapes = () => {
    const newShapes = [
      generateShape(true),
      ...Array.from({ length: 2 }, () => generateShape(false)),
    ];
    setShapes(newShapes);
  };

  const handleClick = (shape: Shape) => {
    if (shape.isTarget) {
      setScore(s => s + 1);
    } else {
      setScore(s => (s > 0 ? s - 1 : 0));
    }
    setShapes([]);
    spawnShapes();
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setGameOver(false);
    spawnShapes();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-2">🎯 Attention Span Builder</h1>
<p className="text-md text-blue-300 font-medium mb-4">
  ✅ Click on the <span className="text-blue-400 font-bold">blue circle</span> to get points!
</p>
<div className="text-lg mb-4 flex gap-8">
        <span>⏱️ Time: {timeLeft}s</span>
        <span>⭐ Score: {score}</span>
      </div>

      <div className="relative w-full max-w-xl h-[400px] bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
        {shapes.map(shape => (
          <div
            key={shape.id}
            onClick={() => handleClick(shape)}
            className={`absolute w-12 h-12 rounded-full bg-${shape.color}-500 cursor-pointer`}
            style={{ left: `${shape.x}%`, top: `${shape.y}%` }}
          />
        ))}
      </div>

      {gameOver && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl text-yellow-400 font-bold mb-2">🎉 Time’s Up!</h2>
          <p className="text-lg">Final Score: {score}</p>
        </div>
      )}

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        {gameOver ? 'Restart Game' : 'Start Game'}
      </button>
    </div>
  );
};

export default AttentionSpanBuilder;
