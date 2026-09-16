import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  Clock,
  Tag,
  Heart,
  Cat,
  Coffee,
  Cookie,
  Smile,
  RefreshCw,
  Gift,
  ExternalLink,
  Globe,
  ShoppingBag
} from 'lucide-react';

interface PusheenBlogProps {
  onBack: () => void;
}

const PUSHEEN_FAVORITES = [
  {
    name: 'Cherry French Macaron',
    desc: 'Crisp pastel shells with cherry buttercream creaminess.',
    emoji: '🍒'
  },
  {
    name: 'Strawberry Shortcake',
    desc: 'Fluffy sponge cake layers piled with fresh strawberries and whipped cream.',
    emoji: '🍓'
  },
  {
    name: 'Pink Frosted Donut',
    desc: 'Classic ring donut with strawberry sugar glaze and rainbow sprinkles.',
    emoji: '🍩'
  },
  {
    name: 'Marshmallow Hot Cocoa',
    desc: 'Steaming sweet cocoa crowned with puffy kitty marshmallows.',
    emoji: '☕'
  },
  {
    name: 'Cotton Candy Cloud',
    desc: 'Spun pink sugar that melts instantly into sweet happiness.',
    emoji: '🍭'
  }
];

const PUSHEEN_ACTIVITIES = [
  'Napping on warm clean laundry while dreaming of macarons.',
  'Baking bite-sized pink strawberry cookies for friends.',
  'Taking a mid-afternoon snack break (and a second snack break).',
  'Curling up into a round loaf next to a fresh cup of tea.',
  'Stretching tiny paws toward the bakery treat shelf.',
  'Rolling happily in a cardboard box filled with pastry tissue paper.'
];

export const PusheenBlog: React.FC<PusheenBlogProps> = ({ onBack }) => {
  const [activityIndex, setActivityIndex] = useState(0);
  const [snackLiked, setSnackLiked] = useState<Record<number, boolean>>({});

  const nextActivity = () => {
    setActivityIndex((prev) => (prev + 1) % PUSHEEN_ACTIVITIES.length);
  };

  const toggleLike = (index: number) => {
    setSnackLiked((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <main
      id="pusheen-blog-container"
      className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-8 font-sans"
    >
      <div className="w-full max-w-5xl mx-auto space-y-6">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between">
          <button
            id="back-to-gallery-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-white/60 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:shadow cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Back to Gallery</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href="https://pusheen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-pink-700 hover:text-pink-800 text-xs font-semibold border border-pink-200 shadow-2xs transition-all hover:shadow cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-pink-500" />
              <span>pusheen.com</span>
              <ExternalLink className="w-3 h-3 text-pink-400" />
            </a>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/90 text-pink-700 text-xs font-semibold uppercase tracking-wider border border-pink-200">
              <Cat className="w-3.5 h-3.5 text-pink-500" />
              Pusheen Spotlight
            </span>
          </div>
        </nav>

        {/* 2-Column Responsive Layout: Main Article (Left) + Pusheen.com Column (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Main Blog Article */}
          <article
            id="pusheen-blog-post"
            className="lg:col-span-8 bg-white/95 backdrop-blur-md border border-white/70 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden"
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

          {/* 1. Centered Title Above the Image */}
          <header className="text-center space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold tracking-wide border border-pink-200">
              <Tag className="w-3.5 h-3.5 text-pink-500" />
              <span>Sweet Plush &amp; Character Corner</span>
            </div>

            <h1
              id="pusheen-blog-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight"
            >
              Pusheen the Cat
            </h1>

            <div className="flex justify-center items-center gap-4 text-xs sm:text-sm text-stone-500 font-medium">
              <span className="inline-flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-pink-400" />
                Brielle Davis
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-pink-400" />
                3 min read
              </span>
            </div>
          </header>

          {/* 2. Properly Sized & Responsive Image */}
          <figure className="space-y-3 relative z-10">
            <div className="w-full max-w-2xl mx-auto aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-pink-100 bg-gradient-to-br from-pink-100 to-rose-50">
              <img
                id="pusheen-featured-image"
                src="https://pusheen.com/cdn/shop/files/PusheenSweetsCherryMacaronPlush2-pcEnvironment_009_web.jpg?v=1752088267"
                alt="Pusheen with Cherry Macaron"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + '/pusheen-macaron.jpg') {
                    e.currentTarget.src = '/pusheen-macaron.jpg';
                  }
                }}
              />
            </div>

            {/* 3. Short Description / Caption Below the Image */}
            <figcaption className="text-center text-xs sm:text-sm text-stone-500 italic max-w-lg mx-auto">
              Pusheen snuggled up with her oversized pink cherry macaron plush, ready for a cozy afternoon tea and pastry nap.
            </figcaption>
          </figure>

          {/* Editorial & Story Section */}
          <section className="space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-pink-100 pt-6 relative z-10">
            <p>
              Meet <strong>Pusheen</strong>—the delightfully round, lovable domestic grey tabby cat who has charmed hearts across the world with her love of food, naps, cozy blankets, and sweet treats.
            </p>

            {/* Stat & Personality Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-pink-50/80 border border-pink-100 text-center">
                <div className="font-bold text-pink-900 text-sm flex items-center justify-center gap-1.5">
                  <Cat className="w-4 h-4 text-pink-500" />
                  <span>Favorite Hobby</span>
                </div>
                <div className="text-xs text-pink-700 mt-1">Snacking and sleeping in bakery boxes</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-fuchsia-50/80 border border-fuchsia-100 text-center">
                <div className="font-bold text-fuchsia-900 text-sm flex items-center justify-center gap-1.5">
                  <Heart className="w-4 h-4 text-fuchsia-500" />
                  <span>Best Feature</span>
                </div>
                <div className="text-xs text-fuchsia-700 mt-1">Plump toe beans &amp; tail wiggles</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-100 text-center">
                <div className="font-bold text-amber-900 text-sm flex items-center justify-center gap-1.5">
                  <Cookie className="w-4 h-4 text-amber-500" />
                  <span>Signature Snack</span>
                </div>
                <div className="text-xs text-amber-700 mt-1">Pastel pink cherry French macarons</div>
              </div>
            </div>

            <p>
              Whether she is transforming into a mermaid cat, a baked loaf, or a pastry chef, Pusheen reminds us to take time to savor life&apos;s simplest joys: sharing sweet confections with friends and taking cozy naps.
            </p>
          </section>

          {/* Pusheen's Favorite Confections */}
          <section className="border-t border-pink-200/80 pt-6 space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-pink-500" />
                  <span>Pusheen&apos;s Bakery Menu</span>
                </h2>
                <p className="text-xs text-stone-500">Click a heart to favorite Pusheen&apos;s top treats!</p>
              </div>
              <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
                5 Treats
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PUSHEEN_FAVORITES.map((item, idx) => {
                const liked = !!snackLiked[idx];
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50/60 to-white border border-pink-100 flex items-start justify-between gap-3 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" role="img" aria-label={item.name}>
                        {item.emoji}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-stone-900">{item.name}</h3>
                        <p className="text-xs text-stone-600 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleLike(idx)}
                      className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                        liked ? 'bg-pink-100 text-pink-600' : 'bg-stone-50 text-stone-400 hover:text-pink-500'
                      }`}
                      aria-label={`Like ${item.name}`}
                    >
                      <Heart className={`w-4 h-4 ${liked ? 'fill-pink-500 text-pink-500' : ''}`} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Interactive Cozy Pusheen Activity Generator */}
          <section className="border-t border-pink-200/80 pt-6 space-y-4 relative z-10">
            <div className="bg-gradient-to-br from-pink-100/70 via-fuchsia-50/50 to-purple-100/60 border border-pink-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-900">
                    Pusheen&apos;s Daily Cozy Mood
                  </span>
                </div>
                <button
                  type="button"
                  onClick={nextActivity}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-pink-700 hover:bg-pink-50 text-xs font-semibold shadow-2xs border border-pink-200 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-pink-500" />
                  <span>Change Mood</span>
                </button>
              </div>

              <blockquote className="text-sm sm:text-base font-medium text-stone-800 italic bg-white/80 p-4 rounded-xl border border-pink-100 shadow-2xs">
                &ldquo;{PUSHEEN_ACTIVITIES[activityIndex]}&rdquo;
              </blockquote>
            </div>
          </section>

          {/* 4. Navigation Back to Gallery / Homepage */}
          <footer className="pt-6 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <button
              id="footer-back-to-gallery-btn"
              onClick={onBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Gallery</span>
            </button>

            <div className="inline-flex items-center gap-2 text-xs text-stone-500">
              <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
              <span>Part of Brielle&apos;s Sweet Collection</span>
            </div>
          </footer>
        </article>

        {/* Right Column: Official Pusheen Link & Web Hub */}
        <aside
          id="pusheen-sidebar-column"
          className="lg:col-span-4 space-y-4 w-full"
        >
          {/* Main Official Link Card */}
          <div className="bg-white/95 backdrop-blur-md border border-white/70 rounded-3xl p-6 shadow-xl space-y-5 relative overflow-hidden">
            <div
              className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300/25 rounded-full blur-xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2.5">
              <span className="p-2.5 rounded-2xl bg-pink-100 text-pink-600 shadow-2xs">
                <Globe className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600">
                  Official Website
                </span>
                <h3 className="text-lg font-extrabold text-stone-900 leading-tight">
                  Pusheen.com
                </h3>
              </div>
            </div>

            {/* Pusheen preview badge */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100/80 text-xs text-stone-600 space-y-2">
              <p className="leading-relaxed">
                Discover the official world of <strong>Pusheen the Cat</strong>, including comics, animations, plushies, sweet merch, and seasonal surprises!
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded-full bg-white text-pink-700 font-medium text-[11px] border border-pink-200">
                  Official Shop
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white text-purple-700 font-medium text-[11px] border border-purple-200">
                  Comics &amp; GIFs
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white text-rose-700 font-medium text-[11px] border border-rose-200">
                  Plushies
                </span>
              </div>
            </div>

            {/* Primary Link Button */}
            <a
              id="pusheen-official-main-link"
              href="https://pusheen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>Visit pusheen.com</span>
              <ExternalLink className="w-4 h-4 text-pink-100" />
            </a>

            <p className="text-[11px] text-center text-stone-400">
              Opens Pusheen&apos;s official website in a new tab
            </p>
          </div>

          {/* Quick Explore Links to Pusheen.com */}
          <div className="bg-white/95 backdrop-blur-md border border-white/70 rounded-3xl p-5 shadow-lg space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Explore on Pusheen.com</span>
            </h4>

            <div className="space-y-2">
              <a
                href="https://pusheen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-pink-50/80 border border-transparent hover:border-pink-200 text-xs font-semibold text-stone-800 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-pink-500" />
                  <span>Pusheen Shop</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-pink-600 transition-colors" />
              </a>

              <a
                href="https://pusheen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200 text-xs font-semibold text-stone-800 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-purple-500" />
                  <span>Comics &amp; Animations</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-purple-600 transition-colors" />
              </a>

              <a
                href="https://pusheen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-rose-50/80 border border-transparent hover:border-rose-200 text-xs font-semibold text-stone-800 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-rose-500" />
                  <span>Sweet Plushies &amp; Treats</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Fact Box */}
          <div className="bg-gradient-to-br from-pink-50/90 to-purple-50/90 border border-pink-200/70 rounded-3xl p-5 shadow-sm space-y-2 text-xs">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <Cat className="w-4 h-4 text-pink-500" />
              <span>Did You Know?</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              The name &ldquo;Pusheen&rdquo; comes from the Irish word <em>puis&iacute;n</em>, which translates to &ldquo;kitten.&rdquo;
            </p>
          </div>
        </aside>
      </div>
    </div>
  </main>
  );
};
