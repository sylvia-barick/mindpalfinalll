import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  Eye,
  Settings,
  Timer,
  Waves,
  Mountain,
  TreePine,
  Cloud,
  Headphones,
  Mic,
  BookOpen,
  BarChart3,
  X
} from 'lucide-react';

import yaman from '../assets/yaman.mp3';
import bhairav from '../assets/bhairav.mp3';
import malkauns from '../assets/malkauns.mp3';
import nature from '../assets/nature.mp3';
import meditation from '../assets/meditation.mp3';
import ramayana from '../assets/ramayana.mp3';
import gita from '../assets/gita.mp3';
import mahabharat from '../assets/mahabharat.mp3';
import oceanVideo from '../assets/ocean.mp4';
import forestVideo from '../assets/forest.mp4';
import mountainVideo from '../assets/mountain.mp4';
import windVideo from '../assets/wind.mp4';

export const TherapyArenaPage: React.FC = () => {
  const [selectedScene, setSelectedScene] = useState('ocean');
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [selectedAudio, setSelectedAudio] = useState('raga-yaman');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioRef] = useState(() => React.createRef<HTMLAudioElement>());
  const [videoRef] = useState(() => React.createRef<HTMLVideoElement>());
  const [volume, setVolume] = useState(0.75);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const audioMap: Record<string, string> = {
    'raga-yaman': yaman,
    'raga-bhairav': bhairav,
    'raga-malkauns': malkauns,
    'nature-sounds': nature,
    'guided-meditation': meditation,
    'ramayana': ramayana,
    'gita': gita,
    'mahabharata': mahabharat
  };

  const videoMap: Record<string, string> = {
    'ocean': oceanVideo,
    'forest': forestVideo,
    'mountain': mountainVideo,
    'wind': windVideo
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioMap[selectedAudio];
      audioRef.current.load();
      audioRef.current.volume = volume;
      if (isAudioPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [selectedAudio, isAudioPlaying, volume]);

  useEffect(() => {
    if (videoRef.current && isVideoOpen) {
      videoRef.current.src = videoMap[selectedScene];
      videoRef.current.load();
      videoRef.current.volume = volume;
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, [selectedScene, isVideoOpen, volume]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSessionActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSceneClick = (sceneId: string) => {
    setSelectedScene(sceneId);
    setCurrentVideo(videoMap[sceneId]);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoOpen(false);
  };

  const scenes = [
    {
      id: 'ocean',
      name: 'Ocean Waves',
      icon: Waves,
      description: 'Calming ocean environment with gentle waves',
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'forest',
      name: 'Forest Sanctuary',
      icon: TreePine,
      description: 'Peaceful forest with ambient nature sounds',
      image: 'https://images.pexels.com/photos/441059/pexels-photo-441059.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'mountain',
      name: 'Mountain Peak',
      icon: Mountain,
      description: 'Serene mountain vista with breathtaking views',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'wind',
      name: 'Sky Garden',
      icon: Cloud,
      description: 'Floating garden with butterflies and clouds',
      image: 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const audioTherapies = [
    { id: 'raga-yaman', name: 'Raga Yaman', description: 'Evening raga for peace and tranquility' },
    { id: 'raga-bhairav', name: 'Raga Bhairav', description: 'Morning raga for awakening and clarity' },
    { id: 'raga-malkauns', name: 'Raga Malkauns', description: 'Deep contemplative raga for focus' },
    { id: 'nature-sounds', name: 'Nature Harmonics', description: 'Curated natural soundscapes' },
    { id: 'guided-meditation', name: 'Guided Meditation', description: 'Multilingual calming voice prompts' }
  ];

  const mythologicalContent = [
    { id: 'ramayana', name: 'Ramayana Stories', description: 'Visual narratives from the epic' },
    { id: 'gita', name: 'Bhagavad Gita', description: 'Philosophical teachings through animation' },
    { id: 'mahabharata', name: 'Mahabharata Tales', description: 'Character-driven moral stories' }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Modal */}
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl"
            >
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-teal-400 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <video
                ref={videoRef}
                controls
                autoPlay
                loop
                className="w-full rounded-xl shadow-2xl"
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-primary-400 bg-clip-text text-transparent">
              VR Therapy Arena
            </span>
          </h1>
          <p className="text-xl text-neural-400 max-w-3xl mx-auto">
            Immersive therapeutic environments combining VR visualization, 
            Indian classical music therapy, and cultural narratives for holistic healing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scene Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <Eye className="h-6 w-6 text-teal-400" />
              <span>Immersive Environments</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scenes.map((scene) => (
                <motion.div
                  key={scene.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSceneClick(scene.id)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedScene === scene.id 
                      ? 'ring-2 ring-teal-400 shadow-xl shadow-teal-400/25' 
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="aspect-video relative">
                    <img
                      src={scene.image}
                      alt={scene.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <scene.icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{scene.name}</h3>
                      <p className="text-white/80 text-sm">{scene.description}</p>
                    </div>
                    {selectedScene === scene.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 bg-teal-400 rounded-full p-2"
                      >
                        <Eye className="h-4 w-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Session Control */}
            <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Timer className="h-5 w-5 text-teal-400" />
                <span>Session Control</span>
              </h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-mono font-bold text-teal-400 mb-2">
                  {formatTime(sessionDuration)}
                </div>
                <p className="text-sm text-neural-400">Session Duration</p>
              </div>
              <button
                onClick={() => setIsSessionActive(!isSessionActive)}
                className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  isSessionActive
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 text-white'
                }`}
              >
                {isSessionActive ? (
                  <>
                    <Pause className="h-5 w-5" />
                    <span>End Session</span>
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    <span>Start VR Session</span>
                  </>
                )}
              </button>
            </div>

            {/* Audio Therapy */}
            <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Headphones className="h-5 w-5 text-teal-400" />
                <span>Audio Therapy</span>
              </h3>
              <div className="space-y-3">
                {audioTherapies.map((audio) => (
                  <div
                    key={audio.id}
                    onClick={() => {
                      if (selectedAudio === audio.id) {
                        setIsAudioPlaying(prev => !prev);
                      } else {
                        setSelectedAudio(audio.id);
                        setIsAudioPlaying(true);
                      }
                    }}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedAudio === audio.id
                        ? 'bg-teal-500/20 border border-teal-400/50'
                        : 'bg-neural-700/50 hover:bg-neural-700'
                    }`}
                  >
                    <h4 className="font-semibold text-sm">{audio.name}</h4>
                    <p className="text-xs text-neural-400">{audio.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <Volume2 className="h-4 w-4 text-neural-400" />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={e => setVolume(Number(e.target.value))}
                  className="flex-1 accent-teal-400 h-2 rounded-full"
                  style={{ accentColor: '#2dd4bf' }}
                />
              </div>
            </div>

            {/* Cultural Narratives */}
            <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-teal-400" />
                <span>Cultural Narratives</span>
              </h3>
              <div className="space-y-3">
                {mythologicalContent.map((content) => (
                  <div
                    key={content.id}
                    onClick={() => {
                      if (selectedAudio === content.id) {
                        setIsAudioPlaying(prev => !prev);
                      } else {
                        setSelectedAudio(content.id);
                        setIsAudioPlaying(true);
                      }
                    }}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedAudio === content.id
                        ? 'bg-teal-500/20 border border-teal-400/50'
                        : 'bg-neural-700/50 hover:bg-neural-700'
                    }`}
                  >
                    <h4 className="font-semibold text-sm">{content.name}</h4>
                    <p className="text-xs text-neural-400">{content.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Audio element */}
        <audio ref={audioRef} hidden />

        {/* Live Monitoring */}
        {isSessionActive && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gradient-to-r from-teal-500/10 to-primary-500/10 rounded-2xl p-8 border border-teal-400/30"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <BarChart3 className="h-6 w-6 text-teal-400" />
              <span>Live Session Monitoring</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-neural-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-400 mb-1">78%</div>
                <div className="text-sm text-neutral-400">Engagement</div>
                <div className="mt-2 bg-neural-700 rounded-full h-2">
                  <div className="bg-teal-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="bg-neural-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">92bpm</div>
                <div className="text-sm text-neutral-400">Heart Rate</div>
                <div className="mt-2 flex justify-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="bg-neural-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">8.2Hz</div>
                <div className="text-sm text-neutral-400">Alpha Waves</div>
                <div className="mt-2 text-xs text-yellow-400">↑ Relaxed</div>
              </div>
              <div className="bg-neural-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-sm text-neutral-400">Focus Score</div>
                <div className="mt-2 text-xs text-green-400">Excellent</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};