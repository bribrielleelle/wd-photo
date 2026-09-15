import React from 'react';
import { Cake, Sparkles, Heart } from 'lucide-react';

interface PhotoItem {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
}

const COTTON_CANDY_PHOTOS: PhotoItem[] = [
  {
    id: 1,
    title: 'Cotton Candy',
    imageUrl: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Cotton Candy',
  },
  {
    id: 2,
    title: "Thrifty's Cotton Candy Ice Cream",
    imageUrl: '/thrifty-cotton-candy.jpg',
    alt: "Thrifty's Cotton Candy Ice Cream",
  },
  {
    id: 3,
    title: 'Cotton Candy Lollipops',
    imageUrl: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Cotton Candy Lollipops',
  },
  {
    id: 4,
    title: 'Berry Macarons',
    imageUrl: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Berry Macarons',
  },
  {
    id: 5,
    title: 'Pink Shoreline',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Pink Shoreline',
  },
  {
    id: 6,
    title: 'Marshmallow Dream',
    imageUrl: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Marshmallow Dream',
  },
  {
    id: 7,
    title: 'Lavender Twilight',
    imageUrl: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Lavender Twilight',
  },
  {
    id: 8,
    title: 'Sweet Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Sweet Sparkles',
  },
  {
    id: 9,
    title: 'Pastel Horizon',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Pastel Horizon',
  },
];

export default function App() {
  return (
    <main
      id="app-container"
      className="flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-pink-50 via-sky-50 to-purple-50 text-stone-700 p-4 sm:p-8 font-sans"
    >
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Cotton Candy Profile Header */}
        <header
          id="profile-banner"
          className="text-center bg-white/85 backdrop-blur-sm border border-pink-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3 relative overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div
            className="absolute -top-10 -left-10 w-32 h-32 bg-pink-200/50 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-200/50 rounded-full blur-2xl pointer-events-none"
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

          <div className="flex justify-center items-center">
            <div
              id="user-birthday"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-sm font-medium border border-sky-200 shadow-xs"
            >
              <Cake className="w-4 h-4 text-sky-600" />
              <span>Birthday: <strong className="text-sky-950">10-18-2011</strong></span>
            </div>
          </div>
        </header>

        {/* 9-Photo Grid: 3 rows, 3 columns, equal dimensions */}
        <section
          id="photo-grid"
          className="grid grid-cols-3 gap-3 sm:gap-5"
        >
          {COTTON_CANDY_PHOTOS.map((photo) => (
            <article
              key={photo.id}
              id={`photo-card-${photo.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-pink-100 shadow-xs flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-pink-300"
            >
              {/* Equal dimension square wrapper */}
              <div className="w-full aspect-square overflow-hidden bg-gradient-to-br from-pink-100 to-sky-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title bar */}
              <div className="p-2 sm:p-3 text-center bg-white border-t border-pink-50">
                <h2 className="text-xs sm:text-sm font-semibold text-stone-700 truncate">
                  {photo.title}
                </h2>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
