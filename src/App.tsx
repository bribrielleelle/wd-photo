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
              className="group bg-white/95 backdrop-blur-xs rounded-2xl overflow-hidden border border-white/60 shadow-md flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-white"
            >
              {/* Equal dimension square wrapper */}
              <div className="w-full aspect-square overflow-hidden bg-gradient-to-br from-pink-100 to-sky-100">
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
