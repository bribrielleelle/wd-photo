import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  Clock,
  Tag,
  Wand2,
  ChefHat,
  Check,
  Copy,
  Heart,
  RefreshCw,
  Flame,
  Utensils
} from 'lucide-react';
import { FEATURED_PINK_RECIPES, generateCustomPinkRecipe, PinkRecipe } from '../data/pinkRecipes';

interface PinkConchaBlogProps {
  onBack: () => void;
}

export const PinkConchaBlog: React.FC<PinkConchaBlogProps> = ({ onBack }) => {
  // Recipe Generator State
  const [selectedRecipe, setSelectedRecipe] = useState<PinkRecipe>(FEATURED_PINK_RECIPES[0]);
  const [customInput, setCustomInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  const handleSelectFeatured = (recipe: PinkRecipe) => {
    setIsGenerating(true);
    setTimeout(() => {
      setSelectedRecipe(recipe);
      setCheckedIngredients({});
      setIsGenerating(false);
    }, 250);
  };

  const handleGenerateCustom = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!customInput.trim()) {
      // Pick a random featured one if empty
      const randomIndex = Math.floor(Math.random() * FEATURED_PINK_RECIPES.length);
      handleSelectFeatured(FEATURED_PINK_RECIPES[randomIndex]);
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      const newRecipe = generateCustomPinkRecipe(customInput);
      setSelectedRecipe(newRecipe);
      setCheckedIngredients({});
      setIsGenerating(false);
    }, 300);
  };

  const handleCopyRecipe = () => {
    const text = `${selectedRecipe.title} (${selectedRecipe.category})
Prep: ${selectedRecipe.prepTime} | Cook: ${selectedRecipe.cookTime} | Servings: ${selectedRecipe.servings}

INGREDIENTS:
${selectedRecipe.ingredients.join('\n')}

INSTRUCTIONS:
${selectedRecipe.instructions.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}

BAKER'S PINK SECRET:
${selectedRecipe.pinkSecretTip}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <main
      id="concha-blog-container"
      className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-purple-200 via-fuchsia-200 via-pink-200 to-pink-100 text-stone-700 p-4 sm:p-8 font-sans"
    >
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {/* Top navigation back button */}
        <nav className="flex items-center justify-between">
          <button
            id="back-to-gallery-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-white/60 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:shadow cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Back to Gallery</span>
          </button>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/90 text-pink-700 text-xs font-semibold uppercase tracking-wider border border-pink-200">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            Pan Dulce Edition
          </span>
        </nav>

        {/* Main Concha Post Card */}
        <article
          id="concha-blog-post"
          className="bg-white/95 backdrop-blur-md border border-white/70 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden"
        >
          {/* Ambient corner glows */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 bg-pink-300/30 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-300/30 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* 1. Centered Title Above Image */}
          <header className="text-center space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold tracking-wide border border-pink-200">
              <Tag className="w-3.5 h-3.5 text-pink-500" />
              <span>Mexican Pan Dulce Spotlight</span>
            </div>

            <h1
              id="concha-blog-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight"
            >
              Pink Concha
            </h1>

            <div className="flex justify-center items-center gap-4 text-xs sm:text-sm text-stone-500 font-medium">
              <span className="inline-flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-pink-400" />
                Brielle Davis
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-pink-400" />
                4 min read
              </span>
            </div>
          </header>

          {/* 2. Properly sized and responsive image */}
          <figure className="space-y-3 relative z-10">
            <div className="w-full max-w-2xl mx-auto aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-pink-100 bg-gradient-to-br from-pink-100 to-rose-50">
              <img
                id="concha-featured-image"
                src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/tk%2Fphoto%2F2025%2F05-2025%2F2025-05-conchas%2Fconchas-643"
                alt="Pink Conchas"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + '/yummy-conchas.jpg') {
                    e.currentTarget.src = '/yummy-conchas.jpg';
                  }
                }}
              />
            </div>

            {/* 3. Short description or caption below the image */}
            <figcaption className="text-center text-xs sm:text-sm text-stone-500 italic max-w-lg mx-auto">
              Soft, buttery brioche-style sweet roll crowned with a signature seashell-scored pink sugar crust, baked to fragrant golden perfection.
            </figcaption>
          </figure>

          {/* Editorial / Story Section */}
          <section className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-pink-100 pt-6 relative z-10">
            <p>
              Known affectionately across Mexican panaderías as the crown jewel of sweet breads, the <strong>concha</strong> gets its poetic name from the Spanish word for &ldquo;seashell.&rdquo; Beneath its decorative pink sugar crust lies an airy, golden brioche crumb rich with butter, vanilla, and gentle warmth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2">
              <div className="p-3.5 rounded-2xl bg-pink-50/80 border border-pink-100 text-center">
                <div className="font-semibold text-pink-900 text-sm">Shell Sugar Crust</div>
                <div className="text-xs text-pink-700 mt-1">Crisp, crumbly pink vanilla topping</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-100 text-center">
                <div className="font-semibold text-amber-900 text-sm">Brioche Yeast Base</div>
                <div className="text-xs text-amber-700 mt-1">Slow-risen for tender featherlight crumb</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-100 text-center">
                <div className="font-semibold text-purple-900 text-sm">Morning Ritual</div>
                <div className="text-xs text-purple-700 mt-1">Perfect dipped in spiced café de olla</div>
              </div>
            </div>

            <p>
              While white and chocolate conchas are bakery staples, the iconic <strong>pink concha</strong> represents joyful celebrations, afternoon meriendas, and sweet memories.
            </p>
          </section>

          {/* 4. Option to Generate Any Pink Sweet Recipes */}
          <section
            id="pink-recipe-generator"
            className="border-t border-pink-200/80 pt-8 space-y-6 relative z-10"
          >
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-xs font-bold shadow-xs">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Pink Sweet Recipe Studio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                Generate Any Pink Sweet Recipe
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Craving conchas, macarons, cupcakes, or your own custom pastel confection? Pick a pink classic or type any treat to generate a full recipe!
              </p>
            </div>

            {/* Recipe Craving Input Box */}
            <form onSubmit={handleGenerateCustom} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Enter any pink treat (e.g., Strawberry Scones, Rose Macarons, Pink Concha...)"
                    className="w-full px-4 py-3 pl-10 rounded-2xl bg-pink-50/60 border border-pink-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all"
                  />
                  <ChefHat className="w-4 h-4 text-pink-400 absolute left-3.5 top-3.5 pointer-events-none" />
                </div>
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60"
                >
                  <Wand2 className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>{isGenerating ? 'Mixing...' : 'Generate Recipe'}</span>
                </button>
              </div>

              {/* Quick Preset Sweet Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs text-stone-500 font-medium mr-1">Popular Pink Sweets:</span>
                {FEATURED_PINK_RECIPES.map((recipe) => {
                  const isCurrent = selectedRecipe.id === recipe.id;
                  return (
                    <button
                      key={recipe.id}
                      type="button"
                      onClick={() => handleSelectFeatured(recipe)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                        isCurrent
                          ? 'bg-pink-500 text-white shadow-xs font-semibold'
                          : 'bg-white text-stone-600 hover:bg-pink-100 hover:text-pink-700 border border-pink-100'
                      }`}
                    >
                      {recipe.title.split(' ')[0]} {recipe.category.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </form>

            {/* Generated Recipe Card Display */}
            <div
              id="active-recipe-card"
              className="bg-gradient-to-br from-pink-50/90 via-white to-rose-50/80 border border-pink-200 rounded-2xl p-5 sm:p-7 shadow-md space-y-6 transition-all"
            >
              {/* Recipe Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pink-100 pb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-pink-100 text-pink-700 text-[11px] font-bold uppercase tracking-wider mb-1">
                    {selectedRecipe.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                    {selectedRecipe.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    {selectedRecipe.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyRecipe}
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-pink-50 border border-pink-200 text-xs font-semibold text-stone-700 hover:text-pink-700 shadow-2xs transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Recipe Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-400" />
                      <span>Copy Recipe</span>
                    </>
                  )}
                </button>
              </div>

              {/* Recipe Meta Info Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-white/80 border border-pink-100">
                  <div className="text-[10px] text-stone-400 uppercase font-semibold">Prep Time</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-800 flex items-center justify-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-pink-500" />
                    <span>{selectedRecipe.prepTime}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/80 border border-pink-100">
                  <div className="text-[10px] text-stone-400 uppercase font-semibold">Bake Time</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-800 flex items-center justify-center gap-1 mt-0.5">
                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                    <span>{selectedRecipe.cookTime}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/80 border border-pink-100">
                  <div className="text-[10px] text-stone-400 uppercase font-semibold">Yield</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-800 flex items-center justify-center gap-1 mt-0.5">
                    <Utensils className="w-3.5 h-3.5 text-fuchsia-500" />
                    <span>{selectedRecipe.servings}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/80 border border-pink-100">
                  <div className="text-[10px] text-stone-400 uppercase font-semibold">Skill Level</div>
                  <div className="text-xs sm:text-sm font-bold text-pink-600 mt-0.5">
                    {selectedRecipe.difficulty}
                  </div>
                </div>
              </div>

              {/* Two Column Ingredients & Instructions */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Ingredients (2 cols) */}
                <div className="md:col-span-2 space-y-3">
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                    Ingredients
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                    {selectedRecipe.ingredients.map((ing, idx) => {
                      const isHeader = ing.startsWith('---');
                      if (isHeader) {
                        return (
                          <li
                            key={idx}
                            className="font-bold text-pink-800 text-xs pt-2 pb-0.5 uppercase tracking-wide"
                          >
                            {ing.replace(/---/g, '').trim()}
                          </li>
                        );
                      }
                      const isChecked = !!checkedIngredients[idx];
                      return (
                        <li
                          key={idx}
                          onClick={() => toggleIngredient(idx)}
                          className={`flex items-start gap-2 p-1.5 rounded-lg cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-emerald-50 text-stone-400 line-through'
                              : 'hover:bg-white/70'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 mt-0.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-emerald-500 border-emerald-500 text-white'
                                : 'border-stone-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-3" />}
                          </span>
                          <span>{ing}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Instructions (3 cols) */}
                <div className="md:col-span-3 space-y-3">
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
                    Baking Instructions
                  </h4>
                  <ol className="space-y-3 text-xs sm:text-sm text-stone-700">
                    {selectedRecipe.instructions.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Baker's Pink Secret Tip Box */}
              <div className="p-4 rounded-xl bg-pink-100/70 border border-pink-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-pink-900">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span>Baker&apos;s Pink Secret for the Perfect Hue</span>
                </div>
                <p className="text-pink-800/90 leading-relaxed">
                  {selectedRecipe.pinkSecretTip}
                </p>
              </div>

              {/* Re-generate random button */}
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const next = FEATURED_PINK_RECIPES[
                      (FEATURED_PINK_RECIPES.findIndex(r => r.id === selectedRecipe.id) + 1) % FEATURED_PINK_RECIPES.length
                    ];
                    handleSelectFeatured(next);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Cycle to another pink sweet recipe</span>
                </button>
              </div>
            </div>
          </section>

          {/* 5. Return to Homepage button */}
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
      </div>
    </main>
  );
};
