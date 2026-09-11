import React from 'react';

interface PhotoItem {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
}

const PHOTOS: PhotoItem[] = [
  {
    id: 1,
    title: 'Alpine Sunrise',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Alpine Sunrise',
  },
  {
    id: 2,
    title: 'Coastal Waves',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Coastal Waves',
  },
  {
    id: 3,
    title: 'Misty Forest',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Misty Forest',
  },
  {
    id: 4,
    title: 'Desert Dunes',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Desert Dunes',
  },
  {
    id: 5,
    title: 'Modern Facade',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Modern Facade',
  },
  {
    id: 6,
    title: 'Golden Valley',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Golden Valley',
  },
  {
    id: 7,
    title: 'Sunlit Canopy',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Sunlit Canopy',
  },
  {
    id: 8,
    title: 'Mountain Peaks',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Mountain Peaks',
  },
  {
    id: 9,
    title: 'Tranquil Lake',
    imageUrl: 'https://images.unsplash.com/photo-1439853941329-a99ce049f002?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Tranquil Lake',
  },
];

export default function App() {
  return (
    <main id="app-container" className="min-h-screen bg-stone-50 text-stone-800 p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <h1 id="gallery-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            A 9-photo showcase arranged in 3 rows and 3 columns
          </p>
        </header>

        {/* 9-photo grid: 3 rows, 3 columns, equal dimensions */}
        <section
          id="photo-grid"
          className="grid grid-cols-3 gap-3 sm:gap-5"
        >
          {PHOTOS.map((photo) => (
            <article
              key={photo.id}
              id={`photo-card-${photo.id}`}
              className="bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-xs flex flex-col transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="w-full aspect-square overflow-hidden bg-stone-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-2 sm:p-3 text-center">
                <h2 className="text-xs sm:text-sm font-semibold text-stone-800 truncate">
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
