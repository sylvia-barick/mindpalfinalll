import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, 
  Brain, 
  Target, 
  Zap, 
  Trophy, 
  Star,
  Play,
  Clock,
  Medal,
  TrendingUp,
  Gift,
  Eye,
  X
} from 'lucide-react';
import MemoryGame from './MemoryGame';
import FocusGame from './FocusGame'; // Import the FocusGame component
import SortSenseGame from './SortSenseGame';
import AttentionSpanBuilder from './AttentionSpanBuilder';
import sortImg from '../assets/sort.jpg';

export const AttentionLabPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState('memory-flip');
  const [gameActive, setGameActive] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    level: 12,
    totalScore: 8450,
    streakDays: 7,
    focusImprovement: 25
  });

  const games = [
    {
      id: 'memory-flip',
      name: 'AI Memory Flip',
      icon: Brain,
      description: 'Enhanced memory training with adaptive AI difficulty',
      difficulty: 'Medium',
      duration: '5-10 min',
      benefits: ['Memory Enhancement', 'Pattern Recognition', 'Focus Training'],
      image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'focus-tracker',
      name: 'Real-time Focus Tracker',
      icon: Target,
      description: 'Live attention monitoring using webcam and EEG feedback',
      difficulty: 'Advanced',
      duration: '10-15 min',
      benefits: ['Sustained Attention', 'Real-time Feedback', 'Neural Training'],
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'sorting-sensory',
      name: 'Sorting & Sensory Games',
      icon: Zap,
      description: 'Multi-sensory cognitive challenges and reaction training',
      difficulty: 'Easy',
      duration: '3-8 min',
      benefits: ['Processing Speed', 'Sensory Integration', 'Reaction Time'],
      image: sortImg // <-- Use local asset here
    },
    {
      id: 'attention-span',
      name: 'Attention Span Builder',
      icon: Eye,
      description: 'Progressive exercises to increase sustained attention duration',
      difficulty: 'Medium',
      duration: '8-12 min',
      benefits: ['Sustained Focus', 'Attention Span', 'Concentration'],
      image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const achievements = [
    { id: 1, name: 'Focus Master', description: '7-day streak completed', icon: Medal, earned: true },
    { id: 2, name: 'Memory Champion', description: 'Perfect score in Memory Flip', icon: Trophy, earned: true },
    { id: 3, name: 'Zen Mode', description: 'Unlock 5 Raagas', icon: Star, earned: false },
    { id: 4, name: 'Neural Navigator', description: 'Complete all game types', icon: Brain, earned: false },
  ];

  const leaderboard = [
    { rank: 1, name: 'Dr. Sarah Chen', score: 12450, level: 18 },
    { rank: 2, name: 'Alex M.', score: 11200, level: 15 },
    { rank: 3, name: 'You', score: 8450, level: 12 },
    { rank: 4, name: 'Maya P.', score: 7890, level: 11 },
    { rank: 5, name: 'Jordan K.', score: 6750, level: 9 },
  ];

  const rewards = [
    { name: 'Ocean Therapy Scene', cost: 500, unlocked: true },
    { name: 'Raga Yaman Audio', cost: 750, unlocked: true },
    { name: 'Calm Mode Interface', cost: 1000, unlocked: false },
    { name: 'Advanced Analytics', cost: 1500, unlocked: false },
  ];

  const handleGameComplete = (score: number) => {
    setPlayerStats(prev => ({
      ...prev,
      totalScore: prev.totalScore + score,
      level: prev.level + (score > 500 ? 1 : 0),
      focusImprovement: prev.focusImprovement + (selectedGame === 'focus-tracker' ? 2 : 1)
    }));
    setGameActive(false);
  };

  const getGameTitle = () => {
    const game = games.find(g => g.id === selectedGame);
    return game ? game.name : 'Game';
  };

  const getGameIcon = () => {
    const game = games.find(g => g.id === selectedGame);
    return game ? game.icon : Brain;
  };

  const getGameDescription = () => {
    const game = games.find(g => g.id === selectedGame);
    return game ? game.description : '';
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-primary-400 bg-clip-text text-transparent">
              Attention Lab
            </span>
          </h1>
          <p className="text-xl text-neural-400 max-w-3xl mx-auto">
            Gamified cognitive training designed to enhance attention, memory, and focus 
            through scientifically-backed exercises and real-time neural feedback.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Games Selection */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {games.map((game) => (
                <motion.div
                  key={game.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedGame(game.id)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedGame === game.id 
                      ? 'ring-2 ring-teal-400 shadow-xl shadow-teal-400/25' 
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="aspect-video relative">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
                    
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="bg-neural-800/80 backdrop-blur-sm rounded-lg p-2">
                        <game.icon className="h-6 w-6 text-teal-400" />
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        game.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        game.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {game.difficulty}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                      <p className="text-white/80 text-sm mb-3">{game.description}</p>
                      
                      <div className="flex items-center space-x-4 text-xs text-white/60 mb-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{game.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {game.benefits.slice(0, 2).map((benefit) => (
                          <span
                            key={benefit}
                            className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedGame === game.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setGameActive(true);
                          }}
                          className="bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 rounded-full p-3 transition-all duration-200 hover:shadow-lg"
                        >
                          <Play className="h-5 w-5 text-white" />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span>Leaderboard</span>
              </h3>
              
              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div
                    key={player.rank}
                    className={`flex items-center space-x-4 p-3 rounded-lg ${
                      player.name === 'You' 
                        ? 'bg-teal-500/20 border border-teal-400/50' 
                        : 'bg-neural-700/50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      player.rank === 1 ? 'bg-yellow-500 text-black' :
                      player.rank === 2 ? 'bg-gray-400 text-black' :
                      player.rank === 3 ? 'bg-orange-500 text-black' :
                      'bg-neural-600 text-white'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{player.name}</div>
                      <div className="text-sm text-neural-400">Level {player.level}</div>
                    </div>
                    <div className="text-lg font-bold text-teal-400">
                      {player.score.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Player Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700"
            >
              <h3 className="text-xl font-bold mb-4">Your Progress</h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-1">Level {playerStats.level}</div>
                  <div className="text-sm text-neural-400">Next: 1,550 XP</div>
                  <div className="mt-2 bg-neural-700 rounded-full h-2">
                    <div className="bg-teal-400 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary-400">{playerStats.totalScore.toLocaleString()}</div>
                    <div className="text-xs text-neural-400">Total Score</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-yellow-400">{playerStats.streakDays}</div>
                    <div className="text-xs text-neural-400">Day Streak</div>
                  </div>
                </div>

                <div className="bg-neural-700/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Focus Improvement</span>
                    <span className="text-sm font-bold text-green-400">+{playerStats.focusImprovement}%</span>
                  </div>
                  <div className="bg-neural-600 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Medal className="h-5 w-5 text-yellow-400" />
                <span>Achievements</span>
              </h3>
              
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.earned 
                        ? 'bg-yellow-500/20 border border-yellow-400/50' 
                        : 'bg-neural-700/30 opacity-60'
                    }`}
                  >
                    <achievement.icon className={`h-5 w-5 ${
                      achievement.earned ? 'text-yellow-400' : 'text-neural-500'
                    }`} />
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{achievement.name}</div>
                      <div className="text-xs text-neural-400">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rewards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Gift className="h-5 w-5 text-teal-400" />
                <span>Therapy Rewards</span>
              </h3>
              
              <div className="space-y-3">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      reward.unlocked 
                        ? 'bg-teal-500/20 border-teal-400/50' 
                        : 'bg-neural-700/30 border-neural-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-xs">{reward.name}</div>
                        <div className="text-xs text-neural-400">{reward.cost} points</div>
                      </div>
                      {reward.unlocked ? (
                        <div className="text-xs text-teal-400 font-bold">Unlocked</div>
                      ) : (
                        <button className="text-xs bg-teal-600 hover:bg-teal-700 px-2 py-1 rounded transition-colors">
                          Unlock
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      <AnimatePresence>
        {gameActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-neural-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setGameActive(false)}
                  className="p-2 rounded-full bg-neural-800 hover:bg-neural-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-6 bg-neural-800 border-b border-neural-700">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {React.createElement(getGameIcon(), { className: "h-5 w-5 text-teal-400" })}
                  <span>{getGameTitle()}</span>
                </h3>
                <p className="text-sm text-neural-400">{getGameDescription()}</p>
              </div>
              
              <div className="flex-1 overflow-auto">
                {selectedGame === 'memory-flip' && (
                  <MemoryGame onComplete={handleGameComplete} />
                )}
                {selectedGame === 'focus-tracker' && (
                  <FocusGame onComplete={handleGameComplete} />
                )}
                {selectedGame === 'sorting-sensory' && (
                  <SortSenseGame />
                )}
                {selectedGame === 'attention-span' && (
                  <AttentionSpanBuilder />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AttentionLabPage;