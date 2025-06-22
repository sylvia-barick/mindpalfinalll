import React, { useEffect } from 'react';
import forestVideo from '../assets/intro.mp4';

const VideoLoader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 6000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <video
        src={forestVideo}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoLoader;
