import Breadcrumb from "@/components/layout/Breadcrumb";
import HeroBanner from "@/components/shared/common/HeroBanner";
import { imageUrl } from "@/sections/home/data";

export default function AboutBanner() {
  return (
    <div className="py-8 lg:py-12">
      <HeroBanner
        eyebrow="Craft, care and better living"
        title="Furniture Designed for the Way You Live"
        description="Discover the story, values, and people behind Arvello furniture."
        image={imageUrl("photo-1524758631624-e2822e304c36", 1200)}
        imageAlt="Warm, fully furnished living room styled with Arvello furniture"
        imagePriority
      >
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} className="text-text-inverse" />
      </HeroBanner>
    </div>
  );
}
