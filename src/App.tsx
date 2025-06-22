import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { DiagnosticPage } from './pages/DiagnosticPage';
import { TherapyArenaPage } from './pages/TherapyArenaPage';
import { AttentionLabPage } from './pages/AttentionLabPage';
import { DashboardPage } from './pages/DashboardPage';
import { ResearchPage } from './pages/ResearchPage';
import { ContactPage } from './pages/ContactPage';
import FocusGame from './pages/FocusGame';
import SortSenseGame from './pages/SortSenseGame';
import AttentionSpanBuilder from './pages/AttentionSpanBuilder';
import VRTherapyReports from './pages/report';

import VideoLoader from './components/videoloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show video for 6 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <VideoLoader onComplete={() => setIsLoading(false)} />;

  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diagnostic" element={<DiagnosticPage />} />
            <Route path="/therapy" element={<TherapyArenaPage />} />
            <Route path="/attention-lab" element={<AttentionLabPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/focus-game" element={<FocusGame />} />
            <Route path="/sort-sense" element={<SortSenseGame />} />
            <Route path="/attention-span" element={<AttentionSpanBuilder />} />
            <Route path="/reports" element={<VRTherapyReports />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
