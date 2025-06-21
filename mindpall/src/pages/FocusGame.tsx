import React, { useEffect, useState, useRef } from 'react';

type Orb = {
  x: number;
  y: number;
  appearTime: number;
};

const TOTAL_ROUNDS = 15;

interface FocusGameProps {
  onComplete?: (score: number) => void;
}

const FocusGame: React.FC<FocusGameProps> = ({ onComplete }) => {
  const [orb, setOrb] = useState<Orb | null>(null);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [round, setRound] = useState(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const spawnOrb = () => {
    const x = Math.random() * 80; // % of width
    const y = Math.random() * 80; // % of height
    const appearTime = Date.now();
    setOrb({ x, y, appearTime });

    timeoutRef.current = window.setTimeout(() => {
      handleMiss(); // missed if not clicked in time
    }, 1200);
  };

  const handleOrbClick = () => {
    if (!orb) return;
    const reaction = Date.now() - orb.appearTime;
    setHits(h => h + 1);
    setReactionTimes(times => [...times, reaction]);
    nextRound();
  };

  const handleMiss = () => {
    setMisses(m => m + 1);
    nextRound();
  };

  const nextRound = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOrb(null);

    if (round + 1 >= TOTAL_ROUNDS) {
      setGameOver(true);
    } else {
      setRound(r => r + 1);
      setTimeout(spawnOrb, 1000); // wait before next orb
    }
  };

  const startGame = () => {
    setHits(0);
    setMisses(0);
    setRound(0);
    setReactionTimes([]);
    setGameOver(false);
    spawnOrb();
  };

  const avgReaction = reactionTimes.length
    ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length)
    : 0;

  // Call onComplete when game is over
  useEffect(() => {
    if (gameOver && onComplete) {
      // Example scoring: more hits and faster reaction = higher score
      const score = Math.max(200, hits * 100 - avgReaction);
      setTimeout(() => onComplete(score), 1200);
    }
    // eslint-disable-next-line
  }, [gameOver]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">🧠 Focus Pulse</h1>

      {!gameOver && orb && (
        <div
          className="absolute w-16 h-16 bg-yellow-300 rounded-full shadow-lg animate-pulse cursor-pointer"
          onClick={handleOrbClick}
          style={{ top: `${orb.y}%`, left: `${orb.x}%`, position: 'absolute' }}
        ></div>
      )}

      <div className="mb-4 text-lg">
        <p>🎯 Round: {round + 1} / {TOTAL_ROUNDS}</p>
        <p>✅ Hits: {hits} | ❌ Misses: {misses}</p>
        <p>⏱️ Avg Reaction Time: {avgReaction} ms</p>
      </div>

      {gameOver ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-300 mb-4">🎉 Game Over</h2>
          <button
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded font-medium"
            onClick={startGame}
          >
            Restart Game
          </button>
        </div>
      ) : round === 0 ? (
        <button
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded font-medium"
          onClick={startGame}
        >
          Start Focus Test
        </button>
      ) : null}
    </div>
  );
};

export default FocusGame;
