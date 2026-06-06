"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set a nice default volume
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group">
      <audio ref={audioRef} loop src="/worry2.mp3" />
      
      {/* Subtle white glow when playing */}
      {isPlaying && (
        <div className="absolute inset-0 rounded-full bg-white blur-md opacity-20 animate-pulse"></div>
      )}

      <button
        onClick={togglePlay}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-2xl transition-all duration-500 overflow-hidden border ${
          isPlaying 
            ? "bg-white text-black border-white hover:scale-105" 
            : "bg-black text-white border-white/20 hover:border-white hover:scale-105"
        }`}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Volume2 size={20} strokeWidth={2} />
        ) : (
          <VolumeX size={20} strokeWidth={1.5} className="text-white/60 group-hover:text-white transition-colors duration-300" />
        )}
      </button>
    </div>
  );
}