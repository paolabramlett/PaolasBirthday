import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    // Note: In a real implementation, you would load an actual audio file
    // For now, this is a visual toggle
    setIsPlaying(!isPlaying);
    
    // Placeholder for actual audio functionality
    // if (audioRef.current) {
    //   if (isPlaying) {
    //     audioRef.current.pause();
    //   } else {
    //     audioRef.current.play();
    //   }
    // }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-[#7FB0E8]/20 group"
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
    >
      {isPlaying ? (
        <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-[#7FB0E8] group-hover:text-[#5A9AD6] transition-colors" />
      ) : (
        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#7FB0E8] group-hover:text-[#5A9AD6] transition-colors" />
      )}
    </button>
  );
}
