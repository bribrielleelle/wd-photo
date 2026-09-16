export interface PinkRecipe {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: 'Easy' | 'Medium' | 'Bake Master';
  description: string;
  ingredients: string[];
  instructions: string[];
  pinkSecretTip: string;
}

export const FEATURED_PINK_RECIPES: PinkRecipe[] = [
  {
    id: 'pink-concha',
    title: 'Artisan Pink Strawberry Conchas',
    category: 'Mexican Pan Dulce',
    prepTime: '2 hrs 30 mins (with rising)',
    cookTime: '20 mins',
    servings: '10 conchas',
    difficulty: 'Medium',
    description: 'Ultra-soft, sweet yeast brioche buns crowned with the traditional shell-scored pink vanilla-strawberry sugar crust.',
    ingredients: [
      '3 1/2 cups (440g) all-purpose or bread flour',
      '1 packet (7g) active dry yeast',
      '1/2 cup (120ml) warm whole milk (105°F - 110°F)',
      '1/3 cup (65g) granulated sugar',
      '3 large eggs (room temperature)',
      '1/2 cup (113g) unsalted butter, softened',
      '1 tsp pure vanilla extract',
      '1/2 tsp kosher salt',
      '--- For the Pink Sugar Topping ---',
      '3/4 cup (90g) powdered sugar',
      '3/4 cup (95g) all-purpose flour',
      '1/2 cup (113g) vegetable shortening or butter',
      '2 tbsp freeze-dried strawberry powder (or 2 drops pink gel)',
      '1/2 tsp vanilla extract'
    ],
    instructions: [
      'Bloom the yeast in warm milk with 1 tbsp sugar for 8 minutes until frothy.',
      'In a stand mixer, knead flour, remaining sugar, eggs, vanilla, salt, and yeast mixture until elastic (approx. 8 minutes). Slowly incorporate softened butter until silky.',
      'Cover and let dough rise in a warm spot for 1.5 to 2 hours until doubled in size.',
      'Make the topping: Cream shortening and powdered sugar until smooth, then fold in flour, vanilla, and strawberry pink color until a pliable paste forms. Divide into 10 balls.',
      'Divide dough into 10 equal balls (approx. 75g each). Flatten each topping ball between plastic wrap and gently drape over each dough ball.',
      'Use a traditional concha cutter or a paring knife to score curved shell lines into the pink topping.',
      'Let rise 45 minutes until puffy. Bake at 350°F (175°C) for 18–20 minutes until bases are light golden.',
      'Cool on a wire rack and enjoy fresh with hot Mexican chocolate or café con leche!'
    ],
    pinkSecretTip: 'Use freeze-dried strawberry powder in the topping! It infuses natural berry fragrance while yielding an ethereal blush pink hue without watering down the crust paste.'
  },
  {
    id: 'pink-velvet-cupcakes',
    title: 'Dreamy Pink Velvet Cloud Cupcakes',
    category: 'Cakes & Cupcakes',
    prepTime: '20 mins',
    cookTime: '18 mins',
    servings: '12 cupcakes',
    difficulty: 'Easy',
    description: 'Tender, cocoa-kissed buttermilk cupcakes tinted in delicate pastel pink, crowned with whipped strawberry cream cheese frosting.',
    ingredients: [
      '1 1/2 cups cake flour, sifted',
      '1 tbsp unsweetened Dutch cocoa powder',
      '1 cup granulated sugar',
      '1/2 cup unsalted butter, melted & cooled',
      '2 large eggs',
      '3/4 cup buttermilk',
      '1 tsp vanilla extract',
      '1 tsp baking soda & 1 tsp apple cider vinegar',
      'Pink gel coloring or 2 tbsp beet juice reduction',
      '--- Whipped Pink Frosting ---',
      '8 oz cream cheese, chilled',
      '1/2 cup butter, softened',
      '3 cups powdered sugar',
      '2 tbsp crushed freeze-dried strawberries'
    ],
    instructions: [
      'Whisk sifted cake flour, cocoa powder, and salt in a bowl.',
      'In another bowl, whisk sugar, melted butter, eggs, buttermilk, vanilla, and pink coloring until vivid blush.',
      'Combine wet and dry ingredients just until smooth. Fold in vinegar and baking soda fizz.',
      'Divide into lined cupcake tins (3/4 full). Bake at 350°F (175°C) for 17–19 minutes until a toothpick comes out clean.',
      'Beat cream cheese and butter until fluffy. Slowly incorporate powdered sugar and strawberry powder.',
      'Pipe tall pink rosettes on cooled cupcakes and top with edible pearl sprinkles.'
    ],
    pinkSecretTip: 'A touch of cocoa powder deepens the flavor without overpowering the pastel pink hue.'
  },
  {
    id: 'rosewater-donuts',
    title: 'Rosewater & Raspberry Glazed Donuts',
    category: 'Pastries & Donuts',
    prepTime: '25 mins',
    cookTime: '12 mins',
    servings: '10 baked donuts',
    difficulty: 'Easy',
    description: 'Baked golden vanilla bean cake donuts dipped in an aromatic botanical rosewater and fresh raspberry glaze.',
    ingredients: [
      '2 cups all-purpose flour',
      '3/4 cup sugar',
      '2 tsp baking powder',
      '1/2 tsp salt & 1/4 tsp nutmeg',
      '3/4 cup milk',
      '2 eggs, beaten',
      '2 tbsp butter, melted',
      '1 tsp vanilla extract',
      '--- Floral Pink Glaze ---',
      '1 1/2 cups powdered sugar',
      '2 tbsp strained fresh raspberry puree (for pink color & tartness)',
      '1/2 tsp culinary rosewater',
      'Edible dried rose petals for garnish'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C) and lightly grease donut pans.',
      'Whisk dry ingredients in a large bowl. In a separate measuring cup, whisk milk, eggs, melted butter, and vanilla.',
      'Stir wet into dry until just combined. Pipe batter into donut molds 2/3 full.',
      'Bake for 10–12 minutes until sprung back when pressed. Cool completely.',
      'Whisk powdered sugar, fresh raspberry puree, and rosewater until thick and glossy pink.',
      'Dip top half of each donut into the glaze, twist gently, and garnish with crushed dried rose petals.'
    ],
    pinkSecretTip: 'Culinary rosewater is potent—start with 1/4 to 1/2 teaspoon so the botanical aroma gracefully complements the sweet raspberry.'
  },
  {
    id: 'pink-macaron-bites',
    title: 'Strawberry Ganache Macaron Shells',
    category: 'Cookies & Confections',
    prepTime: '45 mins',
    cookTime: '15 mins',
    servings: '20 macarons',
    difficulty: 'Bake Master',
    description: 'Silky French almond meringue cookies tinted soft petal pink and filled with rich white chocolate strawberry ganache.',
    ingredients: [
      '100g finely ground almond flour',
      '100g powdered sugar',
      '75g egg whites (aged at room temp)',
      '70g granulated sugar',
      'Pinch of cream of tartar',
      '1 pinch pink gel paste',
      '--- Strawberry Ganache ---',
      '100g quality white chocolate, chopped',
      '50ml heavy whipping cream',
      '2 tbsp concentrated strawberry reduction'
    ],
    instructions: [
      'Sift almond flour and powdered sugar twice for an ultra-smooth glossy surface.',
      'Whip egg whites with cream of tartar until foamy, slowly adding granulated sugar until stiff, glossy peaks form.',
      'Gently fold pink gel paste into the meringue.',
      'Macaronage: Fold dry mixture into meringue in gentle circular sweeps until flowing like lava ribbon.',
      'Pipe 1.5-inch rounds onto silicone baking mats. Tap tray firmly 5 times on counter to release trapped air bubbles.',
      'Rest for 35–45 minutes until a dull skin forms on top that doesn\'t stick to your finger.',
      'Bake at 300°F (150°C) for 14–16 minutes until ruffled feet are set.',
      'Simmer cream and strawberry reduction, pour over white chocolate, and chill until pipeable. Sandwich shells and mature 24 hours in fridge.'
    ],
    pinkSecretTip: 'Always age your macaron shells in the refrigerator for 24 hours after filling; moisture migrates into the shells to create the legendary Parisian melt-in-your-mouth texture.'
  },
  {
    id: 'raspberry-marshmallow-fluff',
    title: 'Pink Cloud Marshmallow Mousse',
    category: 'Chilled Desserts',
    prepTime: '20 mins',
    cookTime: '0 mins',
    servings: '6 parfait glasses',
    difficulty: 'Easy',
    description: 'No-bake whipped marshmallow and fresh raspberry cloud cups topped with crushed ruby meringues.',
    ingredients: [
      '7 oz (1 jar) marshmallow creme fluff',
      '8 oz cream cheese, softened',
      '1 cup heavy whipping cream, whipped to stiff peaks',
      '1 cup fresh raspberries, mashed & strained',
      '1 tsp lemon juice',
      '1 tsp pure vanilla bean paste',
      'Pink sprinkles and fresh berries to serve'
    ],
    instructions: [
      'Beat softened cream cheese and marshmallow fluff together until velvety and free of lumps.',
      'Fold in strained raspberry puree and lemon juice until an even blush pink tone develops.',
      'Gently fold in whipped heavy cream in three additions to keep the texture ultra-light and aerated.',
      'Spoon or pipe into vintage dessert glasses.',
      'Chill in refrigerator for at least 1 hour before serving.',
      'Top with fresh raspberries, pink sanding sugar, and a mint leaf.'
    ],
    pinkSecretTip: 'A teaspoon of fresh lemon juice cuts the sweetness and brightens the vibrant pink berry flavor.'
  },
  {
    id: 'pink-cotton-candy-cookies',
    title: 'Brielle’s Cotton Candy Sugar Cookies',
    category: 'Cookies & Confections',
    prepTime: '25 mins',
    cookTime: '10 mins',
    servings: '16 cookies',
    difficulty: 'Easy',
    description: 'Melt-in-your-mouth pink sugar cookies swirled with carnival cotton candy essence and glittering sugar crystal rims.',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1/2 tsp baking powder & 1/4 tsp salt',
      '3/4 cup unsalted butter, softened',
      '3/4 cup sugar',
      '1 large egg',
      '1 tsp cotton candy flavor syrup or strawberry extract',
      '1/2 tsp pure vanilla extract',
      'Pink food coloring',
      'Pink & blue sanding sugar for rolling'
    ],
    instructions: [
      'Cream butter and sugar until pale and fluffy. Beat in egg, cotton candy extract, vanilla, and pink coloring.',
      'Whisk flour, baking powder, and salt. Gradually mix into wet dough.',
      'Roll dough into 1.5-inch balls, then roll thoroughly in sparkling pink sanding sugar.',
      'Place on parchment-lined baking sheet and gently press with the bottom of a glass to flatten slightly.',
      'Bake at 350°F (175°C) for 9–11 minutes until edges are set but centers remain soft.',
      'Let cool 5 minutes on sheet before transferring to wire rack.'
    ],
    pinkSecretTip: 'Roll in coarse sparkling sanding sugar before baking for that authentic carnival-cotton-candy sugar sparkle crunch!'
  }
];

export function generateCustomPinkRecipe(userCraving: string): PinkRecipe {
  const clean = userCraving.trim();
  const title = clean
    ? (clean.toLowerCase().includes('pink') ? clean : `Pink ${clean}`)
    : 'Pink Strawberry Dream Dessert';

  // Capitalize title
  const formattedTitle = title
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    id: `custom-${Date.now()}`,
    title: formattedTitle,
    category: 'Custom Sweet Creation',
    prepTime: '25 mins',
    cookTime: '15–20 mins',
    servings: '6–8 sweet portions',
    difficulty: 'Medium',
    description: `A bespoke pastel dessert recipe crafted to highlight ${clean || 'delicious pink flavors'} with velvety textures, natural berry sweetness, and an unmistakable pink aesthetic.`,
    ingredients: [
      `2 cups baker's flour or almond meal base tailored for ${clean || 'confections'}`,
      '3/4 cup superfine baker’s sugar or honey',
      '1/2 cup unsalted sweet cream butter, softened',
      '2 large farm-fresh eggs (room temperature)',
      '1/3 cup fresh strawberry, raspberry, or dragonfruit juice reduction (for signature pink tint)',
      '1 tsp pure Madagascar vanilla bean paste',
      '1/2 tsp Himalayan pink sea salt',
      '1/2 cup pink chocolate chips, freeze-dried berry crunch, or pastel sprinkles',
      '--- For the Pastel Glaze & Crown ---',
      '1 cup powdered confectioners sugar',
      '2 tbsp cream infused with pink berry reduction',
      '1/4 tsp sparkling edible luster dust'
    ],
    instructions: [
      `Preheat oven to 350°F (175°C) and prepare your baking surface with parchment paper or silicone mats.`,
      `Whisk together dry ingredients and a pinch of pink salt in a wide mixing bowl.`,
      `In a separate bowl, cream sweet butter and sugar until pale and airy. Incorporate eggs, vanilla paste, and natural pink berry reduction until a luxurious pink emulsion forms.`,
      `Gently fold the dry ingredients into the pink base until just combined, keeping the crumb delicate and tender.`,
      `Fold in your choice of pink chocolate morsels, berry pieces, or confection accents.`,
      `Portion evenly and bake for 16–18 minutes until golden along the bottom while preserving the tender pink hue on top.`,
      `Whisk confectioners sugar and berry cream into a silky pastel glaze. Drizzle generously over your cooled ${clean || 'dessert'} and finish with sparkling luster dust.`
    ],
    pinkSecretTip: 'Pair natural fruit reductions (like reduced fresh raspberry or hibiscus tea) with a pinch of cream of tartar to stabilize both the moisture and the radiant pink color during the bake!'
  };
}
