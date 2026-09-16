import React, { useState } from 'react';
import { Lock, Unlock, Key, Eye, EyeOff, Sparkles, Heart, ShieldCheck } from 'lucide-react';

interface PasswordGateProps {
  onUnlock: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [unlockedAnimation, setUnlockedAnimation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUnlockedAnimation(true);
    setTimeout(() => {
      onUnlock();
    }, 400);
  };

  const handleQuickPassword = (word: string) => {
    setPassword(word);
  };

  return (
    <main
      id="password-gate-screen"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-6 font-sans relative overflow-hidden"
    >
      {/* Decorative background glow circles */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-md mx-auto relative z-10">
        <div
          id="password-gate-card"
          className="bg-white/95 backdrop-blur-md border border-white/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center transition-all duration-300"
        >
          {/* Lock Badge Header */}
          <div className="flex flex-col items-center gap-3">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ${
                unlockedAnimation
                  ? 'bg-gradient-to-br from-emerald-400 to-teal-500 scale-110 text-white'
                  : 'bg-gradient-to-br from-pink-400 via-fuchsia-400 to-purple-500 text-white shadow-pink-300/50'
              }`}
            >
              {unlockedAnimation ? (
                <Unlock className="w-8 h-8 animate-bounce" />
              ) : (
                <Lock className="w-8 h-8" />
              )}
            </div>

            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Protected Gallery
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Brielle's Gallery
              </h1>
              <p className="text-xs sm:text-sm text-stone-600">
                Please enter a password to enter the cotton candy gallery.
              </p>
            </div>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label
                htmlFor="gallery-password-input"
                className="block text-xs font-bold uppercase tracking-wider text-stone-700"
              >
                Password <span className="text-pink-600 font-normal lowercase">(any password works)</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-pink-400">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  id="gallery-password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type anything to unlock..."
                  autoFocus
                  className="w-full pl-10 pr-11 py-3 bg-pink-50/50 hover:bg-pink-50/80 focus:bg-white border-2 border-pink-200 focus:border-pink-500 rounded-2xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-pink-200/50 transition-all"
                />
                <button
                  type="button"
                  id="toggle-password-visibility-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Hint Box */}
            <div className="bg-purple-50/70 border border-purple-100 rounded-xl p-3 text-xs text-purple-900 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Open Access:</strong> The password can be literally <em>anything</em>! Type any word, character, or simply click <strong>Unlock</strong> to open.
              </p>
            </div>

            {/* Quick Suggestions (Optional fun shortcuts) */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-stone-500 block">
                Quick sweet suggestions (optional):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['cotton-candy', 'sweetness', 'pusheen', 'pink', '1234'].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleQuickPassword(suggestion)}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white hover:bg-pink-50 text-stone-600 hover:text-pink-700 border border-pink-200 shadow-2xs transition-all hover:scale-105 cursor-pointer"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Unlock Button */}
            <button
              id="unlock-gallery-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              {unlockedAnimation ? (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Opening Gallery...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Unlock &amp; Enter Gallery</span>
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="text-center pt-1 border-t border-pink-100">
            <p className="text-[11px] text-stone-500 flex items-center justify-center gap-1">
              <span>Made with love for Brielle</span>
              <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
