import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Heart,
  Send,
  Mail,
  User,
  MessageSquare,
  CheckCircle2,
  Share2,
  Camera,
  Video,
  CirclePlay,
  Hash,
  Bookmark,
  Music
} from 'lucide-react';

interface ConnectWithMeBlogProps {
  onBack: () => void;
}

export const ConnectWithMeBlog: React.FC<ConnectWithMeBlogProps> = ({ onBack }) => {
  const profileUrl = 'https://www.instagram.com/bribrielleelle/';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 600);
  };

  const socials = [
    {
      name: 'Instagram',
      handle: '@bribrielleelle',
      url: profileUrl,
      accent: 'border-pink-200 hover:border-pink-500 hover:text-pink-600 bg-pink-50/50',
      icon: (
        <Camera className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
      ),
    },
    {
      name: 'TikTok',
      handle: '@bribrielleelle',
      url: profileUrl,
      accent: 'border-stone-200 hover:border-stone-800 hover:text-stone-900 bg-stone-50/50',
      icon: (
        <Video className="w-6 h-6 text-stone-700 group-hover:scale-110 transition-transform" />
      ),
    },
    {
      name: 'YouTube',
      handle: '@bribrielleelle',
      url: profileUrl,
      accent: 'border-red-200 hover:border-red-500 hover:text-red-600 bg-red-50/40',
      icon: (
        <CirclePlay className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
      ),
    },
    {
      name: 'Twitter / X',
      handle: '@bribrielleelle',
      url: profileUrl,
      accent: 'border-sky-200 hover:border-sky-500 hover:text-sky-600 bg-sky-50/50',
      icon: (
        <Hash className="w-6 h-6 text-sky-500 group-hover:scale-110 transition-transform" />
      ),
    },
    {
      name: 'Pinterest',
      handle: '@bribrielleelle',
      url: profileUrl,
      accent: 'border-rose-200 hover:border-rose-500 hover:text-rose-600 bg-rose-50/40',
      icon: (
        <Bookmark className="w-6 h-6 text-rose-500 group-hover:scale-110 transition-transform" />
      ),
    },
    {
      name: 'Spotify',
      handle: '@bribrielleelle',
      url: profileUrl,
      accent: 'border-emerald-200 hover:border-emerald-500 hover:text-emerald-600 bg-emerald-50/40',
      icon: (
        <Music className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
      ),
    },
  ];

  return (
    <main
      id="connect-with-me-page"
      className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-8 font-sans"
    >
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between">
          <button
            id="back-to-gallery-from-connect-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-white/60 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:shadow cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Back to Gallery</span>
          </button>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-pink-700 hover:text-pink-800 text-xs font-semibold border border-pink-200 shadow-2xs transition-all hover:shadow cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-pink-500" />
            <span>@bribrielleelle</span>
            <ExternalLink className="w-3 h-3 text-pink-400" />
          </a>
        </nav>

        {/* Main Card */}
        <article
          id="connect-with-me-card"
          className="bg-white/95 backdrop-blur-md border border-white/80 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden text-center"
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

          {/* 1. Header Section */}
          <header className="space-y-3 relative z-10">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100/90 text-pink-800 text-xs font-bold uppercase tracking-wider border border-pink-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                Follow Me &bull; Official Links
              </span>
            </div>

            {/* Profile Avatar */}
            <div className="flex justify-center pt-2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-purple-400 shadow-md">
                <img
                  src="https://pusheen.com/cdn/shop/files/Strawberry_Sponge_Cake_Squisheen_Plush_008_web.jpg?v=1737737676"
                  alt="Brielle Davis Profile Avatar"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Connect With Me
              </h1>
              <p className="text-sm sm:text-base font-medium text-stone-600 max-w-md mx-auto">
                Explore my work and connect with me! Follow my sweet adventures, creations, and lifestyle updates.
              </p>
            </div>
          </header>

          {/* 2. Social Media Links Section */}
          <section className="space-y-3 text-left">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-800 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-pink-500" />
                <span>My Socials</span>
              </h2>
              <span className="text-xs text-pink-600 font-medium">All links @bribrielleelle</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  id={`social-link-${social.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer ${social.accent}`}
                >
                  <div className="mb-2 p-2 rounded-xl bg-white shadow-2xs">
                    {social.icon}
                  </div>
                  <span className="text-sm font-bold text-stone-900 group-hover:text-inherit">
                    {social.name}
                  </span>
                  <span className="text-xs text-stone-500 group-hover:text-inherit/80">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* 3. Leave a Message Section */}
          <section className="bg-pink-50/70 border-2 border-pink-200/80 rounded-2xl p-5 sm:p-7 text-left space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-pink-600" />
                <h2 className="text-lg font-bold text-stone-900">
                  Leave a Message
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                Have a question or just want to say hi? Leave me a message!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label
                    htmlFor="message-name"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-pink-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="message-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Brielle's friend"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-pink-200 focus:border-pink-500 rounded-xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-3 focus:ring-pink-200/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message-email"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-pink-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="message-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@example.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-pink-200 focus:border-pink-500 rounded-xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-3 focus:ring-pink-200/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message-text"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Message
                </label>
                <textarea
                  id="message-text"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a sweet note, project inquiry, or just say hello!"
                  className="w-full p-3 bg-white border border-pink-200 focus:border-pink-500 rounded-xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-3 focus:ring-pink-200/50 transition-all resize-none"
                />
              </div>

              <button
                id="submit-message-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {isSubmitted && (
                <div
                  id="message-success-banner"
                  className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm animate-in fade-in"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    💖 <strong>Thank you!</strong> Your message has been sent. I'll get back to you soon!
                  </span>
                </div>
              )}
            </form>
          </section>

          {/* 4. Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              &larr; Back to Gallery
            </button>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 hover:text-pink-800 font-bold text-sm border border-pink-200 transition-colors cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* 5. Footer */}
          <footer className="pt-4 border-t border-pink-100 text-center">
            <p className="text-xs text-stone-500 flex items-center justify-center gap-1">
              <span>Thanks for visiting! Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
              <span>for Brielle Davis &bull; &copy; 2026</span>
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
};
