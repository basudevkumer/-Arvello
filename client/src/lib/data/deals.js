import { products } from "./products";

const byId = (id) => products.find((product) => product.id === id);
const deal = (
  productId,
  discountPercent,
  dealType,
  stockLeft,
  category,
  extra = {},
) => {
  const product = byId(productId);
  return {
    ...product,
    id: `deal-${productId}`,
    productId,
    previousPrice: product.originalPrice,
    price: Math.round(product.originalPrice * (1 - discountPercent / 100)),
    discountPercent,
    dealType,
    dealEndsAt: "2026-12-31T23:59:59.000Z",
    stockLeft,
    category,
    badge: `${discountPercent}% off`,
    ...extra,
  };
};

export const deals = [
  deal("product-1", 28, "standard", 12, "Sofa"),
  deal("product-2", 32, "flash", 4, "Sofa"),
  deal("product-5", 24, "flash", 7, "Dining"),
  deal("product-9", 30, "flash", 5, "Bedroom"),
  deal("product-16", 35, "flash", 8, "Lighting"),
  deal("product-3", 22, "standard", 18, "Sofa"),
  deal("product-6", 26, "standard", 9, "Dining"),
  deal("product-10", 20, "standard", 14, "Bedroom"),
  deal("product-13", 27, "standard", 6, "Storage"),
  deal("product-17", 25, "standard", 11, "Lighting"),
  deal("product-4", 38, "clearance", 3, "Sofa"),
  deal("product-8", 42, "clearance", 2, "Dining"),
  deal("product-12", 34, "clearance", 4, "Bedroom"),
  {
    id: "deal-bundle-living",
    name: "The Complete Living Room",
    category: "Living Room",
    price: 1799,
    previousPrice: 2247,
    discountPercent: 20,
    dealType: "bundle",
    dealEndsAt: "2026-12-31T23:59:59.000Z",
    stockLeft: 6,
    bundleItems: ["product-1", "product-14", "product-20"],
    image: byId("product-1").image,
    imageAlt: "Complete living room furniture bundle",
    badge: "Bundle & save",
  },
  {
    id: "deal-bundle-bedroom",
    name: "Calm Bedroom Collection",
    category: "Bedroom",
    price: 1599,
    previousPrice: 1947,
    discountPercent: 18,
    dealType: "bundle",
    dealEndsAt: "2026-12-31T23:59:59.000Z",
    stockLeft: 4,
    bundleItems: ["product-9", "product-11", "product-12"],
    image: byId("product-9").image,
    imageAlt: "Calm bedroom furniture bundle",
    badge: "Bundle & save",
  },
];

export const dealOfTheDay = deals.find(
  (item) => item.productId === "product-2",
);
export const flashDeals = deals.filter((item) => item.dealType === "flash");
export const clearanceDeals = deals.filter(
  (item) => item.dealType === "clearance",
);
export const bundleDeals = deals.filter((item) => item.dealType === "bundle");
export const catalogDeals = deals.filter(
  (item) =>
    !["flash", "bundle", "clearance"].includes(item.dealType) &&
    item.id !== dealOfTheDay?.id,
);
export const getProduct = (id) => byId(id);
