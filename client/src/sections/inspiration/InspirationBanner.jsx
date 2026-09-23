import HeroBanner from "@/components/shared/common/HeroBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { imageUrl } from "@/sections/home/data";

export default function InspirationBanner() {
  return (
    <div className="py-8 lg:py-12">
      <HeroBanner
        eyebrow="Ideas for modern living"
        title="Inspiration"
        description="Thoughtful rooms, styling notes, and stories to help you make home your own."
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
