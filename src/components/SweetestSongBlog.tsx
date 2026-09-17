import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Heart,
  Clock,
  Wind,
  ShoppingBag,
  Gem,
  Award,
  Music,
  Smile
} from 'lucide-react';
import { SpotifyPlaylistPlaceholder } from './SpotifyPlaylistPlaceholder';

interface SweetestSongBlogProps {
  onBack: () => void;
}

export const SweetestSongBlog: React.FC<SweetestSongBlogProps> = ({ onBack }) => {
  const productUrl =
    'https://www.bathandbodyworks.com/p/sweetest-song-fine-fragrance-mist-028011402?srsltid=AU7gw4VMgHhzrVr5Tiwhg0ZazVZfZ3Qll-EZYz_O-QQIFhErVHKeUJwO';

  return (
    <main
      id="sweetest-song-page"
      className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-8 font-sans"
    >
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between">
          <button
            id="back-to-gallery-from-sweetest-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-white/60 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:shadow cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Back to Gallery</span>
          </button>

          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-pink-700 hover:text-pink-800 text-xs font-semibold border border-pink-200 shadow-2xs transition-all hover:shadow cursor-pointer"
          >
            <Gem className="w-3.5 h-3.5 text-pink-500" />
            <span>bathandbodyworks.com</span>
            <ExternalLink className="w-3 h-3 text-pink-400" />
          </a>
        </nav>

        {/* Main Card */}
        <article
          id="sweetest-song-card"
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

          {/* Brand Pill */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100/90 text-pink-800 text-xs font-bold uppercase tracking-wider border border-pink-200 shadow-2xs">
              <Music className="w-3.5 h-3.5 text-pink-500" />
              Bath &amp; Body Works • Fine Fragrance Mist
            </span>
          </div>

          {/* 1. Centered Title with Perfume Name */}
          <header className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Sweetest Song
            </h1>
            <p className="text-sm sm:text-base font-semibold text-pink-700">
              Fragrance Family: Fruity Floral Gourmand / Sweet Berry Petals
            </p>
          </header>

          {/* 2. Image of the Perfume Bottle */}
          <div className="flex justify-center py-2">
            <div className="group relative block w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-tr from-pink-50 to-purple-50">
              <img
                id="sweetest-song-bottle-img"
                src="https://imgix.bustle.com/uploads/image/2025/3/21/1614085c/sweetest-song-full-collection.tif?w=414&h=394&fit=crop&crop=faces&dpr=2"
                alt="Sweetest Song Fine Fragrance Mist Bottle"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + '/sweetest-song.jpg') {
                    e.currentTarget.src = '/sweetest-song.jpg';
                  }
                }}
              />
              <div className="absolute bottom-3 right-3 bg-stone-900/70 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 shadow">
                <Award className="w-3 h-3 text-pink-300" />
                <span>Fine Fragrance Mist</span>
              </div>
            </div>
          </div>

          {/* 3. Full Sensory-Rich Description */}
          <section className="bg-pink-50/60 border border-pink-200/80 rounded-2xl p-5 sm:p-6 text-left space-y-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-pink-800 mb-1">
                The Inspiration &amp; Story
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Sweetest Song is a joyful, melodic anthem of sweet springtime romance and carefree laughter.
                Designed to evoke the feeling of playing your favorite uplifting melody on repeat under blossoming trees,
                it opens with a sparkling chorus of sugar-dusted wild raspberries and ruby red currant, cascading effortlessly
                into an enchanting harmony of candied rose petals and dewy magnolia, before settling into a soft, cozy refrain
                of warm spun amber sugar and whipped marshmallow musk.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-pink-200/70 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-stone-700">
                <Clock className="w-4 h-4 text-pink-500 shrink-0" />
                <div>
                  <span className="font-bold text-stone-900 block">Longevity</span>
                  <span className="text-stone-600">5–7 Hours</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <Wind className="w-4 h-4 text-pink-500 shrink-0" />
                <div>
                  <span className="font-bold text-stone-900 block">Sillage</span>
                  <span className="text-stone-600">Sweet &amp; Uplifting</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <Heart className="w-4 h-4 text-pink-500 shrink-0" />
                <div>
                  <span className="font-bold text-stone-900 block">Occasions</span>
                  <span className="text-stone-600">Spring Picnics &amp; Dates</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Fragrance Notes Breakdown */}
          <section className="space-y-3 text-left">
            <h2 className="text-center text-sm font-bold uppercase tracking-wider text-stone-800">
              Fragrance Notes Architecture
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white border border-pink-200 rounded-2xl p-4 text-center shadow-xs hover:border-pink-400 transition-colors">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full mb-1.5">
                  Top Notes
                </span>
                <p className="text-xs sm:text-sm font-medium text-stone-700">
                  Sugar-Dusted Raspberries, Ruby Red Currant &amp; Pink Mandarin
                </p>
              </div>

              <div className="bg-white border border-pink-200 rounded-2xl p-4 text-center shadow-xs hover:border-pink-400 transition-colors">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full mb-1.5">
                  Heart Notes
                </span>
                <p className="text-xs sm:text-sm font-medium text-stone-700">
                  Candied Rose Petals, Sweet Pink Blossom &amp; Dewy Magnolia
                </p>
              </div>

              <div className="bg-white border border-pink-200 rounded-2xl p-4 text-center shadow-xs hover:border-pink-400 transition-colors">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full mb-1.5">
                  Base Notes
                </span>
                <p className="text-xs sm:text-sm font-medium text-stone-700">
                  Spun Amber Sugar, Whipped Marshmallow &amp; Cashmeran Musk
                </p>
              </div>
            </div>
          </section>

          {/* 5. Highlighted Price Section */}
          <div className="inline-block bg-gradient-to-r from-pink-50 via-white to-pink-50 border-2 border-pink-300 rounded-2xl px-6 py-3 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-700 block">
              Signature Fragrance Price
            </span>
            <div className="text-2xl sm:text-3xl font-black text-pink-700 tracking-tight">
              <strong>$18.95</strong>
            </div>
            <span className="text-xs text-stone-500 block">
              8 fl oz / 236 ml Fine Fragrance Mist
            </span>
          </div>

          {/* Sweetest Song Matching Playlist */}
          <div className="text-left pt-2">
            <SpotifyPlaylistPlaceholder initialPlaylistId="2UUgR8Xd23qIEWtigBUUJg" />
          </div>

          {/* 6. Action Buttons with "Buy Now" */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              Back to Gallery
            </button>

            <a
              id="buy-sweetest-song-btn"
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 hover:from-pink-700 hover:to-rose-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy Now</span>
              <ExternalLink className="w-4 h-4 text-pink-200" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
};
