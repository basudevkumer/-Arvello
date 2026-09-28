import HeroBanner from "@/components/shared/common/HeroBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { imageUrl } from "@/sections/home/data";

export default function InspirationBanner() {
  return (
    <div className="py-8 lg:py-12">
      <HeroBanner
        eyebrow="Ideas for modern living"
        title="Ideas for Beautiful Spaces"
        description="Explore furniture ideas, room inspiration and styling stories designed to help you create a space that feels like home."
        image={imageUrl("photo-1618220179428-22790b461013", 1200)}
        imageAlt="Warm modern interior filled with considered furniture"
        imagePriority
      >
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Inspiration" }]}
          className="text-text-inverse"
        />
      </HeroBanner>
    </div>
  );
}
