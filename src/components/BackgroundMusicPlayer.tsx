import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Play, Pause, Disc, Sparkles } from 'lucide-react';

interface BackgroundMusicPlayerProps {
  className?: string;
  initialTrackTitle?: string;
}

export const BackgroundMusicPlayer: React.FC<BackgroundMusicPlayerProps> = ({
  className = '',
  initialTrackTitle = 'Sweet Cotton Candy Melody',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(() => {
    try {
      const savedVol = localStorage.getItem('bg_music_volume');
      return savedVol !== null ? parseFloat(savedVol) : 0.35;
    } catch {
      return 0.35;
    }
  });
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('bg_music_muted') === 'true';
    } catch {
      return false;
    }
  });
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = isMuted ? 0 : volume;

    // Provide MP3 and OGG sources
    const canPlayOgg = audio.canPlayType('audio/ogg; codecs="vorbis"');
    audio.src = canPlayOgg ? '/cotton-candy-lullaby.ogg' : '/cotton-candy-lullaby.mp3';

    audioRef.current = audio;

    // Check if user previously enabled auto-playback
    const savedState = localStorage.getItem('bg_music_enabled');
    if (savedState === 'true') {
      const tryAutoplay = () => {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {
            // Browser autoplay restrictions prevented play until interaction
          });
      };

      tryAutoplay();

      // If blocked, start on the first user interaction anywhere
      const handleFirstClick = () => {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
              setHasInteracted(true);
            })
            .catch(() => {});
        }
        window.removeEventListener('click', handleFirstClick);
        window.removeEventListener('keydown', handleFirstClick);
      };

      window.addEventListener('click', handleFirstClick, { once: true });
      window.addEventListener('keydown', handleFirstClick, { once: true });
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    try {
      localStorage.setItem('bg_music_volume', volume.toString());
      localStorage.setItem('bg_music_muted', isMuted ? 'true' : 'false');
    } catch {
      // ignore
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    setHasInteracted(true);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      try {
        localStorage.setItem('bg_music_enabled', 'false');
      } catch {
        // ignore
      }
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          try {
            localStorage.setItem('bg_music_enabled', 'true');
          } catch {
            // ignore
          }
        })
        .catch((err) => {
          console.warn('Audio play was prevented by browser:', err);
        });
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <aside
      id="bg-music-player-container"
      aria-label="Background Music Player"
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 select-none ${className}`}
    >
      <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-full bg-white/95 backdrop-blur-md border border-pink-200/90 shadow-lg text-stone-700">
        {/* Play/Pause Main Button */}
        <button
          id="music-toggle-btn"
          type="button"
          onClick={togglePlay}
          title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-xs cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-tr from-pink-500 to-rose-400 text-white shadow-pink-300/50 scale-105'
              : 'bg-pink-100/80 hover:bg-pink-200 text-pink-700'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-white" />
          ) : (
            <Play className="w-4 h-4 fill-current translate-x-0.5" />
          )}
        </button>

        {/* Track Info & Visualizer animation */}
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex items-center gap-2 px-2 cursor-pointer group"
          title="Click to toggle music controls"
        >
          <div className="relative flex items-center justify-center">
            <Disc
              className={`w-4 h-4 text-pink-500 transition-transform duration-1000 ${
                isPlaying ? 'animate-spin' : 'opacity-70'
              }`}
              style={{ animationDuration: '4s' }}
            />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
              </span>
            )}
          </div>

          <div className="flex flex-col text-left max-w-[110px] sm:max-w-[140px]">
            <span className="text-[11px] font-bold text-stone-800 truncate leading-tight flex items-center gap-1">
              <span>{initialTrackTitle}</span>
            </span>
            <span className="text-[9px] font-medium text-pink-600 truncate flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-pink-400" />
              <span>{isPlaying ? 'Playing • Looping' : 'Paused'}</span>
            </span>
          </div>
        </div>

        {/* Expand / Volume toggle */}
        <div className="flex items-center gap-1">
          <button
            id="music-mute-btn"
            type="button"
            onClick={toggleMute}
            title={isMuted ? 'Unmute' : 'Mute'}
            className="p-2 rounded-full hover:bg-pink-50 text-stone-500 hover:text-pink-600 transition-colors cursor-pointer"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-stone-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-pink-500" />
            )}
          </button>

          {/* Collapsible Volume Slider */}
          <div
            className={`overflow-hidden transition-all duration-300 flex items-center ${
              isExpanded ? 'w-20 opacity-100 pr-2' : 'w-0 opacity-0'
            }`}
          >
            <input
              id="bg-music-volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
              aria-label="Background music volume"
              className="w-full h-1.5 accent-pink-500 bg-pink-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
