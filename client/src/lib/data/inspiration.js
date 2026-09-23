const image = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const inspiration = [
  {
    id: "quiet-luxury-living",
    title: "The Art of Quiet Luxury",
    excerpt:
      "Layer natural textures, considered silhouettes, and a little breathing room for a living space that feels effortlessly refined.",
    coverImage: image("photo-1586023492125-27b2c045efd7"),
    imageAlt: "Quiet luxury living room with layered neutral furniture",
    tag: "Modern",
    aspectRatio: "portrait",
    publishDate: "2025-02-18",
    views: 98,
    slug: "quiet-luxury-living",
  },
  {
    id: "scandi-sunlight",
    title: "A Softer Take on Scandinavian",
    excerpt:
      "Warm timber, tactile linens, and sun-washed tones make everyday rituals feel beautifully simple.",
    coverImage: image("photo-1616594039964-ae9021a400a0"),
    imageAlt: "Sunlit Scandinavian bedroom with wood furniture",
    tag: "Scandinavian",
    aspectRatio: "landscape",
    publishDate: "2025-02-12",
    views: 91,
    slug: "scandi-sunlight",
  },
  {
    id: "minimal-bedroom",
    title: "A Bedroom Made for Exhaling",
    excerpt:
      "Discover the small styling choices that turn a bedroom into a calm, restorative retreat.",
    coverImage: image("photo-1615874959474-d609969a20ed"),
    imageAlt: "Minimal bedroom with soft bedding and natural light",
    tag: "Minimalist",
    aspectRatio: "tall",
    publishDate: "2025-02-07",
    views: 86,
    slug: "minimal-bedroom",
  },
  {
    id: "bohemian-layers",
    title: "How to Layer a Collected Home",
    excerpt:
      "Mix pattern, patina, and handmade details without losing a sense of visual calm.",
    coverImage: image("photo-1617806118233-18e1de247200"),
    imageAlt: "Collected bohemian interior with layered textiles",
    tag: "Bohemian",
    aspectRatio: "square",
    publishDate: "2025-01-29",
    views: 82,
    slug: "bohemian-layers",
  },
  {
    id: "industrial-warmth",
    title: "Industrial, but Make It Warm",
    excerpt:
      "A guide to balancing honest materials with the comfort every home deserves.",
    coverImage: image("photo-1583847268964-b28dc8f51f92"),
    imageAlt: "Warm industrial living room with leather seating",
    tag: "Industrial",
    aspectRatio: "landscape",
    publishDate: "2025-01-22",
    views: 76,
    slug: "industrial-warmth",
  },
  {
    id: "rustic-reset",
    title: "The Modern Rustic Reset",
    excerpt:
      "Bring a grounded, welcoming character to your home with wood, stone, and thoughtful contrast.",
    coverImage: image("photo-1567016432779-094069958ea5"),
    imageAlt: "Modern rustic room with timber and neutral furnishings",
    tag: "Rustic",
    aspectRatio: "portrait",
    publishDate: "2025-01-15",
    views: 73,
    slug: "rustic-reset",
  },
  {
    id: "small-space-flow",
    title: "Making Room for Better Living",
    excerpt:
      "Flexible furniture and intentional zones can make even the smallest floor plan feel generous.",
    coverImage: image("photo-1493663284031-b7e3aefcae8e"),
    imageAlt: "Bright small living space with practical furniture",
    tag: "Modern",
    aspectRatio: "square",
    publishDate: "2025-01-09",
    views: 68,
    slug: "small-space-flow",
  },
  {
    id: "natural-materials",
    title: "A Material Palette for Slow Days",
    excerpt:
      "A considered mix of oak, linen, ceramic, and woven texture creates a home with lasting warmth.",
    coverImage: image("photo-1484101403633-562f891dc89a"),
    imageAlt: "Natural materials styled in a warm home interior",
    tag: "Rustic",
    aspectRatio: "tall",
    publishDate: "2025-01-03",
    views: 64,
    slug: "natural-materials",
  },
];

export const inspirationTags = [
  "All",
  "Modern",
  "Scandinavian",
  "Minimalist",
  "Bohemian",
  "Industrial",
  "Rustic",
];

export const featuredStory = inspiration[0];

export const shopTheLook = {
  image: image("photo-1493663284031-b7e3aefcae8e", 1800),
  imageAlt: "Warm modern living room styled with Arvello furniture",
  hotspots: [
    {
      id: "sofa",
      label: "Luna Linen Sofa",
      productId: "product-1",
      top: "58%",
      left: "34%",
    },
    {
      id: "lamp",
      label: "Arc Floor Lamp",
      productId: "product-17",
      top: "36%",
      left: "78%",
    },
    {
      id: "side-table",
      label: "Marble Side Table",
      productId: "product-8",
      top: "66%",
      left: "65%",
    },
    {
      id: "planter",
      label: "Ceramic Planter Set",
      productId: "product-19",
      top: "48%",
      left: "14%",
    },
  ],
};
