import React, { useState, useEffect } from 'react';
import { Cake, Sparkles, Heart, ArrowLeft, BookOpen, Clock, Tag, Lock } from 'lucide-react';
import { PinkConchaBlog } from './components/PinkConchaBlog';
import { PusheenBlog } from './components/PusheenBlog';
import { PusheenComicsBlog } from './components/PusheenComicsBlog';
import { BurberryHerBlog } from './components/BurberryHerBlog';
import { MarshmallowBlushBlog } from './components/MarshmallowBlushBlog';
import { SweetestSongBlog } from './components/SweetestSongBlog';
import { PasswordGate } from './components/PasswordGate';

interface PhotoItem {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
}

const COTTON_CANDY_PHOTOS: PhotoItem[] = [
  {
    id: 1,
    title: 'Yummy',
    imageUrl: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/tk%2Fphoto%2F2025%2F05-2025%2F2025-05-conchas%2Fconchas-643',
    alt: 'Yummy',
  },
  {
    id: 2,
    title: 'Pink Marshmallows',
    imageUrl: 'https://media.istockphoto.com/id/534132623/photo/heart-marshmallows-background.jpg?s=612x612&w=0&k=20&c=1XKgVgQpsctHbd5YB8pjudmLCifFJd-1SecBS0pCcD0=',
    alt: 'Pink Marshmallows',
  },
  {
    id: 3,
    title: 'Pink Macarons',
    imageUrl: 'https://blog.wilton.com/wp-content/uploads/sites/2/2021/02/Troubleshooting-French-Macaron-Recipe.jpg',
    alt: 'Pink Macarons',
  },
  {
    id: 4,
    title: 'Pusheen',
    imageUrl: 'https://pusheen.com/cdn/shop/files/PusheenSweetsCherryMacaronPlush2-pcEnvironment_009_web.jpg?v=1752088267',
    alt: 'Pusheen',
  },
  {
    id: 5,
    title: 'Is',
    imageUrl: 'https://pusheen.com/cdn/shop/files/Strawberry_Sponge_Cake_Squisheen_Plush_008_web.jpg?v=1737737676',
    alt: 'Is',
  },
  {
    id: 6,
    title: 'Cool!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBFkryQYWjBpQVW4kTmuDmNtPTLHVpfEt8Q6EQ6Os_jpbBKsM4w6X-PsrS&s=10',
    alt: 'Cool!',
  },
  {
    id: 7,
    title: 'Burberry Her',
    imageUrl: 'https://fimgs.net/mdimg/secundar/fit.143897.jpg',
    alt: 'Burberry Her',
  },
  {
    id: 8,
    title: 'Marshmallow Blush',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DN0xRINXm8HviF3WICbd9jSYn7qYYs29yLNRmwO5ln-DXBADNQYRY9Jy&s=10',
    alt: 'Marshmallow Blush',
  },
  {
    id: 9,
    title: 'Sweetest Song',
    imageUrl: 'https://imgix.bustle.com/uploads/image/2025/3/21/1614085c/sweetest-song-full-collection.tif?w=414&h=394&fit=crop&crop=faces&dpr=2',
    alt: 'Sweetest Song',
  },
];

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('gallery_unlocked') === 'true';
    } catch {
      return false;
    }
  });

  const [currentView, setCurrentView] = useState<'gallery' | 'pink-macaron-blog' | 'pink-concha-blog' | 'pusheen-blog' | 'comics-blog' | 'burberry-her-blog' | 'marshmallow-blush-blog' | 'sweetest-song-blog'>(() => {
    if (window.location.hash === '#pink-macarons') return 'pink-macaron-blog';
    if (window.location.hash === '#pink-conchas' || window.location.hash === '#yummy') return 'pink-concha-blog';
    if (window.location.hash === '#pusheen') return 'pusheen-blog';
    if (window.location.hash === '#comics' || window.location.hash === '#cool') return 'comics-blog';
    if (window.location.hash === '#burberry-her' || window.location.hash === '#perfume') return 'burberry-her-blog';
    if (window.location.hash === '#marshmallow-blush' || window.location.hash === '#marshmallow') return 'marshmallow-blush-blog';
    if (window.location.hash === '#sweetest-song' || window.location.hash === '#sweet') return 'sweetest-song-blog';
    return 'gallery';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#pink-macarons') {
        setCurrentView('pink-macaron-blog');
      } else if (window.location.hash === '#pink-conchas' || window.location.hash === '#yummy') {
        setCurrentView('pink-concha-blog');
      } else if (window.location.hash === '#pusheen') {
        setCurrentView('pusheen-blog');
      } else if (window.location.hash === '#comics' || window.location.hash === '#cool') {
        setCurrentView('comics-blog');
      } else if (window.location.hash === '#burberry-her' || window.location.hash === '#perfume') {
        setCurrentView('burberry-her-blog');
      } else if (window.location.hash === '#marshmallow-blush' || window.location.hash === '#marshmallow') {
        setCurrentView('marshmallow-blush-blog');
      } else if (window.location.hash === '#sweetest-song' || window.location.hash === '#sweet') {
        setCurrentView('sweetest-song-blog');
      } else {
        setCurrentView('gallery');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToMacaronBlog = () => {
    setCurrentView('pink-macaron-blog');
    window.location.hash = 'pink-macarons';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToConchaBlog = () => {
    setCurrentView('pink-concha-blog');
    window.location.hash = 'pink-conchas';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPusheenBlog = () => {
    setCurrentView('pusheen-blog');
    window.location.hash = 'pusheen';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToComicsBlog = () => {
    setCurrentView('comics-blog');
    window.location.hash = 'comics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPerfumeBlog = () => {
    setCurrentView('burberry-her-blog');
    window.location.hash = 'burberry-her';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMarshmallowBlog = () => {
    setCurrentView('marshmallow-blush-blog');
    window.location.hash = 'marshmallow-blush';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSweetestSongBlog = () => {
    setCurrentView('sweetest-song-blog');
    window.location.hash = 'sweetest-song';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToGallery = () => {
    setCurrentView('gallery');
    if (
      window.location.hash === '#pink-macarons' ||
      window.location.hash === '#pink-conchas' ||
      window.location.hash === '#yummy' ||
      window.location.hash === '#pusheen' ||
      window.location.hash === '#comics' ||
      window.location.hash === '#cool' ||
      window.location.hash === '#burberry-her' ||
      window.location.hash === '#perfume' ||
      window.location.hash === '#marshmallow-blush' ||
      window.location.hash === '#marshmallow' ||
      window.location.hash === '#sweetest-song' ||
      window.location.hash === '#sweet'
    ) {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUnlock = () => {
    try {
      sessionStorage.setItem('gallery_unlocked', 'true');
    } catch {
      // ignore
    }
    setIsUnlocked(true);
  };

  const handleLock = () => {
    try {
      sessionStorage.removeItem('gallery_unlocked');
    } catch {
      // ignore
    }
    setIsUnlocked(false);
  };

  if (!isUnlocked) {
    return <PasswordGate onUnlock={handleUnlock} />;
  }

  if (currentView === 'sweetest-song-blog') {
    return <SweetestSongBlog onBack={navigateToGallery} />;
  }

  if (currentView === 'marshmallow-blush-blog') {
    return <MarshmallowBlushBlog onBack={navigateToGallery} />;
  }

  if (currentView === 'burberry-her-blog') {
    return <BurberryHerBlog onBack={navigateToGallery} />;
  }

  if (currentView === 'comics-blog') {
    return <PusheenComicsBlog onBack={navigateToGallery} />;
  }

  if (currentView === 'pusheen-blog') {
    return <PusheenBlog onBack={navigateToGallery} />;
  }

  if (currentView === 'pink-concha-blog') {
    return <PinkConchaBlog onBack={navigateToGallery} />;
  }

  if (currentView === 'pink-macaron-blog') {
    return (
      <main
        id="blog-page-container"
        className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-8 font-sans"
      >
        <div className="w-full max-w-3xl mx-auto space-y-6">
          {/* Top navigation back button */}
          <nav className="flex items-center justify-between">
            <button
              id="back-to-gallery-btn"
              onClick={navigateToGallery}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-white/60 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:shadow cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-pink-500" />
              <span>Back to Gallery</span>
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/90 text-pink-700 text-xs font-semibold uppercase tracking-wider border border-pink-200">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              Sweet Edition Blog
            </span>
          </nav>

          {/* Main Blog Article Card */}
          <article
            id="macaron-blog-post"
            className="bg-white/95 backdrop-blur-md border border-white/70 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden"
          >
            {/* Ambient corner glows */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* 1. Centered title above the image */}
            <header className="text-center space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold tracking-wide border border-pink-200">
                <Tag className="w-3.5 h-3.5 text-pink-500" />
                <span>French Patisserie Spotlight</span>
              </div>

              <h1
                id="blog-title"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight"
              >
                Pink Macarons
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

            {/* 2. Properly sized and responsive image */}
            <figure className="space-y-3 relative z-10">
              <div className="w-full max-w-2xl mx-auto aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-pink-100 bg-gradient-to-br from-pink-100 to-rose-50">
                <img
                  id="macaron-featured-image"
                  src="https://blog.wilton.com/wp-content/uploads/sites/2/2021/02/Troubleshooting-French-Macaron-Recipe.jpg"
                  alt="Pink French Macarons"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (e.currentTarget.src !== window.location.origin + '/pink-macarons.jpg') {
                      e.currentTarget.src = '/pink-macarons.jpg';
                    }
                  }}
                />
              </div>

              {/* 3. Short description or caption below the image */}
              <figcaption className="text-center text-xs sm:text-sm text-stone-500 italic max-w-lg mx-auto">
                Crisp, delicate strawberry-tinted shells filled with velvet buttercream ganache and baked to Parisian perfection.
              </figcaption>
            </figure>

            {/* Connecting Blog Body / Story */}
            <section className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-pink-100 pt-6 relative z-10">
              <p>
                Few confections capture pure whimsy and elegance like classic French macarons. Crafted with finely sifted almond flour, delicate egg white meringue, and a whisper of sweet pink hue, each bite offers a crisp outer shell that gives way to a decadent, chewy center.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2">
                <div className="p-3.5 rounded-2xl bg-pink-50/80 border border-pink-100 text-center">
                  <div className="font-semibold text-pink-900 text-sm">Fluffy Ruffled Feet</div>
                  <div className="text-xs text-pink-700 mt-1">Proof of gentle resting before baking</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-fuchsia-50/80 border border-fuchsia-100 text-center">
                  <div className="font-semibold text-fuchsia-900 text-sm">Almond Meringue</div>
                  <div className="text-xs text-fuchsia-700 mt-1">Light, airy, and naturally gluten-free</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-100 text-center">
                  <div className="font-semibold text-sky-900 text-sm">Strawberry Ganache</div>
                  <div className="text-xs text-sky-700 mt-1">Rich white chocolate infused with berry</div>
                </div>
              </div>
              <p>
                Whether paired with afternoon tea or saved as an after-school sweet reward, these pastel pink treats bring warmth, color, and joy to our curated gallery.
              </p>
            </section>

            {/* 4. Button or link to navigate back to homepage */}
            <footer className="pt-6 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <button
                id="footer-back-to-gallery-btn"
                onClick={navigateToGallery}
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
        </div>
      </main>
    );
  }

  return (
    <main
      id="app-container"
      className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-8 font-sans"
    >
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <header
          id="profile-banner"
          className="text-center bg-white/90 backdrop-blur-md border border-white/50 rounded-3xl p-6 sm:p-8 shadow-lg space-y-3 relative overflow-hidden"
        >
          {/* Subtle decorative sunset glow */}
          <div
            className="absolute -top-10 -left-10 w-36 h-36 bg-purple-300/40 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-10 w-36 h-36 bg-pink-300/40 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/90 text-pink-700 text-xs font-semibold uppercase tracking-wider border border-pink-200">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Sweet Edition</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-400" />
          </div>

          <h1
            id="user-name"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900"
          >
            BRIELLE DAVIS
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-2.5">
            <div
              id="user-birthday"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-sm font-medium border border-sky-200 shadow-xs"
            >
              <Cake className="w-4 h-4 text-sky-600" />
              <span>Birthday: <strong className="text-sky-950">10-18-2011</strong></span>
            </div>

            <button
              id="lock-gallery-btn"
              type="button"
              onClick={handleLock}
              title="Lock Gallery"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 hover:text-pink-800 text-xs font-semibold border border-pink-200 shadow-2xs transition-all hover:scale-105 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-pink-500" />
              <span>Lock Gallery</span>
            </button>
          </div>
        </header>

        {/* 9-Photo Grid: 3 rows, 3 columns, equal dimensions */}
        <section
          id="photo-grid"
          className="grid grid-cols-3 gap-3 sm:gap-5"
        >
          {COTTON_CANDY_PHOTOS.map((photo) => {
            const isMacaron = photo.id === 3;
            const isConcha = photo.id === 1;
            const isPusheen = photo.id === 4;
            const isComics = photo.id === 6;
            const isBurberry = photo.id === 7;
            const isMarshmallow = photo.id === 8;
            const isSweetest = photo.id === 9;
            const isClickable = isMacaron || isConcha || isPusheen || isComics || isBurberry || isMarshmallow || isSweetest;
            const handleClick = isMacaron
              ? navigateToMacaronBlog
              : isConcha
              ? navigateToConchaBlog
              : isPusheen
              ? navigateToPusheenBlog
              : isComics
              ? navigateToComicsBlog
              : isBurberry
              ? navigateToPerfumeBlog
              : isMarshmallow
              ? navigateToMarshmallowBlog
              : isSweetest
              ? navigateToSweetestSongBlog
              : undefined;

            return (
              <article
                key={photo.id}
                id={`photo-card-${photo.id}`}
                onClick={handleClick}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={isClickable ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (handleClick) handleClick();
                  }
                } : undefined}
                className={`group bg-white/95 backdrop-blur-xs rounded-2xl overflow-hidden border shadow-md flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  isClickable
                    ? 'cursor-pointer ring-2 ring-pink-400/60 hover:ring-pink-500 border-pink-200'
                    : 'border-white/60 hover:border-white'
                }`}
              >
                {/* Equal dimension square wrapper */}
                <div className="w-full aspect-square overflow-hidden bg-gradient-to-br from-pink-100 to-sky-100 relative">
                  <img
                    src={photo.imageUrl}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (photo.id === 1 && e.currentTarget.src !== window.location.origin + '/yummy-conchas.jpg') {
                        e.currentTarget.src = '/yummy-conchas.jpg';
                      } else if (photo.id === 2 && e.currentTarget.src !== window.location.origin + '/pink-marshmallows.jpg') {
                        e.currentTarget.src = '/pink-marshmallows.jpg';
                      } else if (photo.id === 3 && e.currentTarget.src !== window.location.origin + '/pink-macarons.jpg') {
                        e.currentTarget.src = '/pink-macarons.jpg';
                      } else if (photo.id === 4 && e.currentTarget.src !== window.location.origin + '/pusheen-macaron.jpg') {
                        e.currentTarget.src = '/pusheen-macaron.jpg';
                      } else if (photo.id === 5 && e.currentTarget.src !== window.location.origin + '/pusheen-sponge-cake.jpg') {
                        e.currentTarget.src = '/pusheen-sponge-cake.jpg';
                      } else if (photo.id === 6 && e.currentTarget.src !== window.location.origin + '/cool.jpg') {
                        e.currentTarget.src = '/cool.jpg';
                      } else if (photo.id === 7 && e.currentTarget.src !== window.location.origin + '/burberry-her.jpg') {
                        e.currentTarget.src = '/burberry-her.jpg';
                      } else if (photo.id === 8 && e.currentTarget.src !== window.location.origin + '/marshmallow-blush.jpg') {
                        e.currentTarget.src = '/marshmallow-blush.jpg';
                      } else if (photo.id === 9 && e.currentTarget.src !== window.location.origin + '/sweetest-song.jpg') {
                        e.currentTarget.src = '/sweetest-song.jpg';
                      }
                    }}
                  />

                  {/* Click to read blog pill on interactive cards */}
                  {isClickable && (
                    <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-pink-700 text-[10px] sm:text-xs font-semibold shadow-xs border border-pink-200">
                        <BookOpen className="w-3 h-3 text-pink-500" />
                        <span className="hidden xs:inline sm:inline">
                          {isComics ? 'Comics' : (isBurberry || isMarshmallow || isSweetest) ? 'Perfume' : 'Read Blog'}
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Title bar */}
                <div className="p-2 sm:p-3 text-center bg-white border-t border-pink-50 flex items-center justify-center gap-1">
                  <h2 className="text-xs sm:text-sm font-semibold text-stone-700 truncate">
                    {photo.title}
                  </h2>
                  {isClickable && (
                    <span className="text-pink-500 text-xs font-bold" aria-hidden="true">↗</span>
                  )}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
