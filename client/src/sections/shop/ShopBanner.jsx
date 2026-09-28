import HeroBanner from "@/components/shared/common/HeroBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { imageUrl } from "@/sections/home/data";

export default function ShopBanner() {
  return <div className="py-8 lg:py-12"><HeroBanner eyebrow="Arvello furniture collection" title="Shop Premium Furniture" description="Find curated pieces designed to elevate every room, with an easy and considered shopping experience." image={imageUrl("photo-1618220179428-22790b461013", 1200)} imageAlt="Curated modern furniture collection" imagePriority><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} className="text-text-inverse" /></HeroBanner></div>;
}
