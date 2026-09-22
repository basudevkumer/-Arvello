import HeroBanner from "@/components/shared/common/HeroBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { imageUrl } from "@/sections/home/data";

export default function CategoriesBanner() {
  return <div className="py-8 lg:py-12"><HeroBanner eyebrow="Find your style" title="Explore Categories" description="Curated furniture collections for every room, mood, and moment at home." image={imageUrl("photo-1618220179428-22790b461013", 1200)} imageAlt="Curated furniture in a modern room" imagePriority><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Categories" }]} className="text-text-inverse" /></HeroBanner></div>;
}
