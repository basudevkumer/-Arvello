const image = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const categories = [
  { id: "sofas", name: "Sofas", slug: "sofas", productCount: 24, image: image("photo-1555041469-a586c61ea9bc"), rooms: ["Living Room", "Outdoor"] },
  { id: "dining", name: "Dining", slug: "dining", productCount: 18, image: image("photo-1616486338812-3dadae4b4ace"), rooms: ["Dining Room", "Outdoor"] },
  { id: "bedroom", name: "Bedroom", slug: "bedroom", productCount: 21, image: image("photo-1505693416388-ac5ce068fe85"), rooms: ["Bedroom"] },
  { id: "storage", name: "Storage", slug: "storage", productCount: 16, image: image("photo-1594620302200-9a762244a156"), rooms: ["Living Room", "Bedroom", "Home Office"] },
  { id: "lighting", name: "Lighting", slug: "lighting", productCount: 32, image: image("photo-1507473885765-e6ed057f782c"), rooms: ["Living Room", "Bedroom", "Dining Room", "Home Office"] },
  { id: "decor", name: "Decor", slug: "decor", productCount: 28, image: image("photo-1618220179428-22790b461013"), rooms: ["Living Room", "Bedroom", "Home Office"] },
  { id: "office", name: "Home Office", slug: "home-office", productCount: 14, image: image("photo-1497366811353-6870744d04b2"), rooms: ["Home Office"] },
  { id: "outdoor", name: "Outdoor Living", slug: "outdoor", productCount: 12, image: image("photo-1600210492486-724fe5c67fb0"), rooms: ["Outdoor"] },
];

export const rooms = ["Living Room", "Bedroom", "Dining Room", "Home Office", "Outdoor"];
