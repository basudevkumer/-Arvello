import HeroBanner from "@/components/shared/common/HeroBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { imageUrl } from "@/sections/home/data";

export default function ShopBanner() {
  return <div className="py-8 lg:py-12"><HeroBanner eyebrow="Curated for modern living" title="Shop Furniture" description="Find thoughtful pieces that make every room feel like home." image={imageUrl("photo-1618220179428-22790b461013", 1200)} imageAlt="Curated modern furniture collection" imagePriority><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} className="text-text-inverse" /></HeroBanner></div>;
}
