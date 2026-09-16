import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  BookOpen,
  Smile,
  Heart,
  Globe
} from 'lucide-react';

interface PusheenComicsBlogProps {
  onBack: () => void;
}

export const PusheenComicsBlog: React.FC<PusheenComicsBlogProps> = ({ onBack }) => {
  const comicUrl = 'https://pusheen.com/blogs/comics';

  return (
    <main
      id="pusheen-comics-page"
      className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-8 font-sans"
    >
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between">
          <button
            id="back-to-gallery-from-comics-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-white/60 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:shadow cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Back to Gallery</span>
          </button>

          <a
            href={comicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-pink-700 hover:text-pink-800 text-xs font-semibold border border-pink-200 shadow-2xs transition-all hover:shadow cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-pink-500" />
            <span>pusheen.com/blogs/comics</span>
            <ExternalLink className="w-3 h-3 text-pink-400" />
          </a>
        </nav>

        {/* Main Card */}
        <article
          id="comics-main-card"
          className="bg-white/95 backdrop-blur-md border border-white/70 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden text-center"
        >
          {/* Ambient Glows */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 bg-pink-300/30 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-300/30 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Category Tag */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/90 text-pink-700 text-xs font-bold uppercase tracking-wider border border-pink-200">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              Webcomics &amp; Fun
            </span>
          </div>

          {/* 1. Centered Title Above the Image */}
          <header className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Pusheen Comics
            </h1>
            <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto">
              Click the image below to read the official comics, animations, and adorable stories!
            </p>
          </header>

          {/* 2. Clickable Image (Properly Sized & Responsive) */}
          <div className="flex justify-center py-2">
            <a
              id="clickable-comics-image"
              href={comicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-pink-50 cursor-pointer"
              title="Click to open Pusheen Comics on pusheen.com"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBFkryQYWjBpQVW4kTmuDmNtPTLHVpfEt8Q6EQ6Os_jpbBKsM4w6X-PsrS&s=10"
                alt="Pusheen Comics - Click to read"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + '/cool.jpg') {
                    e.currentTarget.src = '/cool.jpg';
                  }
                }}
              />

              {/* Hover Overlay Badge */}
              <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-pink-600 font-bold text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <BookOpen className="w-4 h-4" />
                  <span>Read on Pusheen.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-500" />
                </span>
              </div>

              {/* Always visible bottom corner indicator */}
              <div className="absolute bottom-3 right-3 bg-stone-900/75 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow">
                <span>Click to visit</span>
                <ExternalLink className="w-3 h-3 text-pink-300" />
              </div>
            </a>
          </div>

          {/* 3. Short Description / Caption Below the Image */}
          <div className="space-y-3 max-w-xl mx-auto">
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Join Pusheen, Stormy, Pip, and friends in their charming illustrated adventures!
              Clicking the image redirects you straight to the official{' '}
              <a
                href={comicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 font-bold underline hover:text-pink-700 inline-flex items-center gap-0.5"
              >
                <span>Pusheen Comics Blog</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-medium border border-pink-200">
                <Smile className="w-3 h-3 text-pink-500" />
                Weekly Comic Strips
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium border border-purple-200">
                <Heart className="w-3 h-3 text-purple-500" />
                Animated GIFs
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-medium border border-rose-200">
                <BookOpen className="w-3 h-3 text-rose-500" />
                Holiday Specials
              </span>
            </div>
          </div>

          {/* Direct Link Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              Back to Gallery
            </button>

            <a
              id="visit-comics-btn"
              href={comicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Go to Pusheen Comics</span>
              <ExternalLink className="w-4 h-4 text-pink-100" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
};
