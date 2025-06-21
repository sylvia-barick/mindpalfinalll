import React, { useState, useEffect } from 'react';
import { Play, Pause, Download, Eye, Calendar, User, Activity, Brain, Camera } from 'lucide-react';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';
import pic10 from '../assets/pic10.jpg';
import pic11 from '../assets/pic11.jpg';
import eeg1 from '../assets/eeg-1.mp4';
import eeg2 from '../assets/eeg-2.mp4';
import eeg3 from '../assets/eeg-3.mp4';
import eeg4 from '../assets/eeg-4.mp4';
import eeg5 from '../assets/eeg-5.mp4';
import therapy1 from '../assets/therapy-1.mp4';
import therapy2 from '../assets/therapy-2.mp4';
import therapy3 from '../assets/therapy-3.mp4';
import therapy4 from '../assets/therapy-4.mp4';
import logo from '../assets/logo.jpeg';

const imageArray = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11
];

const eegVideoArray = [eeg1, eeg2, eeg3, eeg4, eeg5];
const therapyVideoArray = [therapy1, therapy2, therapy3, therapy4];

const VRTherapyReports = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedReport, setSelectedReport] = useState(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data for reports
  const patientImages = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    name: `Brain Scan ${i + 1}`,
    type: i % 3 === 0 ? 'MRI' : i % 3 === 1 ? 'CT' : 'fMRI',
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
    thumbnail: imageArray[i] // Use imported image
  }));

  const eegReports = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    patientName: `Patient ${String.fromCharCode(65 + i)}`,
    sessionType: ['Meditation', 'Cognitive Training', 'Anxiety Therapy', 'Memory Enhancement', 'Focus Training'][i],
    duration: `${15 + i * 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    date: new Date(2024, 5, 20 - i),
    brainActivity: Math.floor(Math.random() * 40) + 60,
    relaxationLevel: Math.floor(Math.random() * 30) + 70,
    focusScore: Math.floor(Math.random() * 25) + 75,
    thumbnail: `https://picsum.photos/400/300?random=${i + 200}`,
    videoId: `eeg-${i + 1}`,
    videoUrl: eegVideoArray[i], // Use imported video
  }));

  const testVideos = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `VR Therapy Session ${i + 1}`,
    patient: `Patient ${String.fromCharCode(88 + i)}`,
    environment: ['Ocean Waves', 'Forest Sanctuary', 'Mountain Vista', 'Zen Garden'][i],
    duration: `${20 + i * 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    date: new Date(2024, 5, 18 - i),
    videoUrl: therapyVideoArray[i], // Use imported video
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-300 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Mindpal Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                draggable={false}
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Patient Reports Dashboard
                </h1>
                <p className="text-gray-400 text-sm">VR Therapy Neural Diagnostics</p>
              </div>
            </div>
            <div className="text-right">
              
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Moving Pictures Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            
            <h2 className="text-2xl font-semibold text-white">Patients picture</h2>
            
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 p-6">
            <div className="flex animate-scroll space-x-6" style={{
              animation: 'scroll 60s linear infinite'
            }}>
              {[...patientImages, ...patientImages].map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="flex-shrink-0 group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative w-64 h-40 rounded-lg overflow-hidden bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-400/60">
                    <img
                      src={image.thumbnail}
                      alt={image.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      
                      <div className="flex justify-between items-center">
                        
                        
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-cyan-500/80 rounded-full hover:bg-cyan-400/80 transition-colors">
                        <Eye className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EEG Reports Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Activity className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-semibold text-white">EEG Analysis Reports</h2>
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eegReports.map((report, index) => (
              <div
                key={report.id}
                className="bg-slate-800/80 rounded-xl border border-cyan-500/30 overflow-hidden flex flex-col items-center justify-center p-6"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Video Section Only */}
                <div className="relative w-full flex flex-col items-center">
                  <video
                    src={report.videoUrl}
                    controls
                    autoPlay={playingVideo === report.videoId}
                    className="w-full aspect-square max-w-md rounded-lg bg-black"
                    onPlay={() => setPlayingVideo(report.videoId)}
                    onPause={() => setPlayingVideo(null)}
                    onEnded={() => setPlayingVideo(null)}
                  />
                  {/* Play Button Overlay (if not playing) */}
                  {playingVideo !== report.videoId && (
                    <button
                      onClick={() => setPlayingVideo(report.videoId)}
                      className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 hover:bg-black/10 transition rounded-lg"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Play className="w-16 h-16 text-cyan-400 opacity-80" />
                    </button>
                  )}
                </div>
                {/* Simple Info Below Video */}
                <div className="w-full mt-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    EEG Analysis Report {report.id}
                  </h3>
                 
                  <div className="flex items-center space-x-2 mb-2">
                    
                    <span className="text-sm text-gray-300">{report.patientName}</span>
                  </div>
                  
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Therapy Session Videos Section */}
        <section>
          <div className="flex items-center mb-6">
            <Play className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-semibold text-white">Therapy Session Videos</h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testVideos.map((video, index) => (
              <div
                key={video.id}
                className="bg-slate-800/80 rounded-xl border border-cyan-500/30 overflow-hidden flex flex-col items-center justify-center p-6"
                style={{
                  animation: `slideInFromBottom 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="relative w-full flex flex-col items-center">
                  <video
                    src={video.videoUrl}
                    controls
                    className="w-full aspect-square max-w-md rounded-lg bg-black"
                  />
                </div>
                <div className="w-full mt-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-white mb-1">{video.title}</h3>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">{video.patient}</span>
                  </div>
                 
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VRTherapyReports;