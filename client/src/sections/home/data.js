export const imageUrl = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const homeProducts = [
  { id: "elegance-sofa", name: "Elegance Fabric Sofa", category: "Living Room", image: imageUrl("photo-1555041469-a586c61ea9bc"), price: 599, previousPrice: 699, rating: 4.8, reviewCount: 128, badge: "New" },
  { id: "modern-coffee-table", name: "Modern Coffee Table", category: "Living Room", image: imageUrl("photo-1532372320572-cda25653a26d"), price: 249, previousPrice: 299, rating: 4.8, reviewCount: 96 },
  { id: "minimalist-lounge-chair", name: "Minimalist Lounge Chair", category: "Living Room", image: imageUrl("photo-1567538096630-e0c55bd6374c"), price: 189, previousPrice: 229, rating: 4.9, reviewCount: 64 },
  { id: "wooden-bookshelf", name: "Wooden Bookshelf", category: "Storage", image: imageUrl("photo-1594620302200-9a762244a156"), price: 329, previousPrice: 399, rating: 4.8, reviewCount: 75 },
  { id: "comfort-bed-frame", name: "Comfort Bed Frame", category: "Bedroom", image: imageUrl("photo-1505693416388-ac5ce068fe85"), price: 799, previousPrice: 899, rating: 4.9, reviewCount: 142 },
  { id: "indoor-plant-pot", name: "Indoor Plant & Pot", category: "Decor", image: imageUrl("photo-1614594975525-e45190c55d0b"), price: 79, previousPrice: 99, rating: 4.8, reviewCount: 72 },
];

export const dealProducts = [
  { ...homeProducts[0], name: "Modern 3 Seater Sofa", price: 549, previousPrice: 729, badge: "-25%" },
  { ...homeProducts[1], name: "Dining Table Set", category: "Dining", price: 419, previousPrice: 599, badge: "-30%" },
  { ...homeProducts[4], name: "King Size Bed", price: 699, previousPrice: 849, badge: "-20%" },
  { ...homeProducts[2], name: "Floor Lamp", category: "Lighting", price: 89, previousPrice: 119, badge: "-25%" },
];

export const categories = [
  ["Sofas", "photo-1555041469-a586c61ea9bc", "🛋️"], ["Dining", "photo-1616486338812-3dadae4b4ace", "🍽️"],
  ["Bedroom", "photo-1505693416388-ac5ce068fe85", "🛏️"], ["Storage", "photo-1594620302200-9a762244a156", "🗄️"],
  ["Lighting", "photo-1507473885765-e6ed057f782c", "💡"], ["Decor", "photo-1618220179428-22790b461013", "🌿"],
].map(([name, id, icon]) => ({ name, image: imageUrl(id, 500), icon }));
