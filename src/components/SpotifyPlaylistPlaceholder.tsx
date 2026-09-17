import React, { useState } from 'react';
import { Music, Minimize2, Maximize2, ExternalLink, Sparkles, Check } from 'lucide-react';

interface SpotifyPlaylistPlaceholderProps {
  initialPlaylistId?: string;
  className?: string;
  defaultExpanded?: boolean;
}

const PRESET_PLAYLISTS = [
  {
    id: '37i9dQZF1DWZqd5JICZI0u',
    name: 'Peaceful Piano',
    tag: 'Soft & Chill',
  },
  {
    id: '37i9dQZF1DX2UXVoUsNgfl',
    name: 'Lofi Beats',
    tag: 'Study & Vibe',
  },
  {
    id: '37i9dQZF1DXcBWIGoYBM5M',
    name: "Today's Top Hits",
    tag: 'Pop Favorites',
  },
];

export const SpotifyPlaylistPlaceholder: React.FC<SpotifyPlaylistPlaceholderProps> = ({
  initialPlaylistId = '37i9dQZF1DWZqd5JICZI0u',
  className = '',
  defaultExpanded = false,
}) => {
  const [playlistId, setPlaylistId] = useState<string>(initialPlaylistId);
  const [customInput, setCustomInput] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [theme, setTheme] = useState<'0' | '1'>('0'); // 0 = dark/vibrant, 1 = light
  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Extract playlist ID from full URL if user pastes a URL (e.g., https://open.spotify.com/playlist/...)
  const handleApplyCustomPlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    let id = customInput.trim();
    if (id.includes('/playlist/')) {
      const parts = id.split('/playlist/')[1];
      id = parts.split('?')[0];
    } else if (id.startsWith('spotify:playlist:')) {
      id = id.replace('spotify:playlist:', '');
    }

    setPlaylistId(id);
    setCustomInput('');
    setShowSettings(false);
  };

  const currentHeight = isExpanded ? 352 : 152;

  return (
    <section
      id="spotify-playlist-section"
      aria-label="Spotify Playlist Soundtrack"
      className={`w-full max-w-4xl mx-auto mt-6 transition-all duration-300 ${className}`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-pink-200/90 rounded-3xl p-4 sm:p-5 shadow-lg relative overflow-hidden">
        {/* Soft Background Accents */}
        <div
          className="absolute -top-10 -right-10 w-36 h-36 bg-pink-300/20 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-300/20 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 shadow-2xs">
              <Music className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-stone-800 flex items-center gap-1.5 leading-tight">
                <span>Spotify Gallery Playlist</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-pink-100 text-pink-700 border border-pink-200">
                  <Sparkles className="w-2.5 h-2.5 mr-0.5 text-pink-500" />
                  Soundtrack
                </span>
              </h2>
              <p className="text-[11px] text-stone-500 hidden xs:block">
                Listen while browsing the 9-photo cotton candy collection
              </p>
            </div>
          </div>

          {/* Controls: Size toggle, theme toggle, custom ID toggle */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              id="spotify-theme-toggle"
              onClick={() => setTheme(theme === '0' ? '1' : '0')}
              className="px-2.5 py-1 text-xs rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 font-medium transition-colors cursor-pointer border border-pink-200/60"
              title="Toggle dark/light theme"
            >
              {theme === '0' ? '🌙 Dark' : '☀️ Light'}
            </button>

            <button
              type="button"
              id="spotify-size-toggle"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 font-medium transition-colors cursor-pointer border border-pink-200/60"
              title={isExpanded ? 'Switch to compact view' : 'Switch to expanded view'}
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Compact</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Expand</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="spotify-custom-btn"
              onClick={() => setShowSettings(!showSettings)}
              className="px-2.5 py-1 text-xs rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors cursor-pointer"
            >
              {showSettings ? 'Close' : 'Change'}
            </button>
          </div>
        </div>

        {/* Custom Playlist / Preset Selector */}
        {showSettings && (
          <div className="mb-4 p-3.5 bg-pink-50/70 border border-pink-200 rounded-2xl space-y-3 transition-all animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-semibold text-stone-700">
              <span>Choose a Preset Playlist or paste your own Spotify URL / ID:</span>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2">
              {PRESET_PLAYLISTS.map((preset) => {
                const isActive = playlistId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setPlaylistId(preset.id);
                      setShowSettings(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-pink-600 text-white shadow-xs'
                        : 'bg-white text-stone-700 hover:bg-pink-100/70 border border-pink-200'
                    }`}
                  >
                    {isActive && <Check className="w-3 h-3" />}
                    <span>{preset.name}</span>
                    <span className="text-[10px] opacity-75">({preset.tag})</span>
                  </button>
                );
              })}
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleApplyCustomPlaylist} className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Paste Spotify Playlist Link or URI (e.g. 37i9dQZF1DWZqd5JICZI0u)"
                className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-white border border-pink-200 text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-pink-600 hover:bg-pink-700 text-white transition-colors cursor-pointer"
              >
                Set Playlist
              </button>
            </form>
          </div>
        )}

        {/* Embedded Spotify IFrame */}
        <div className="w-full overflow-hidden rounded-2xl shadow-xs border border-pink-100 bg-stone-50 transition-all duration-300">
          <iframe
            id="spotify-iframe-placeholder"
            title="Spotify Web Gallery Soundtrack"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=${theme}`}
            width="100%"
            height={currentHeight}
            style={{ border: 0, display: 'block' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        {/* Footer Note */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-500 px-1">
          <span className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Official Spotify Embed Player</span>
          </span>
          <a
            href={`https://open.spotify.com/playlist/${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 font-medium transition-colors"
          >
            <span>Open in Spotify</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
