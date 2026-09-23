import HeroBanner from "@/components/shared/common/HeroBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { imageUrl } from "@/sections/home/data";

export default function DealBanner() {
  return (
    <div className="py-8 lg:py-12">
      <div
        className="mx-auto w-full px-6 sm:px-8 lg:px-10"
        style={{ maxWidth: "1320px" }}
      >
        <HeroBanner
          eyebrow="Curated savings for modern living"
          title="Deals"
          description="Thoughtful furniture, exceptional value, and limited-time offers for your home."
          image={imageUrl("photo-1550226891-ef816aed4a98", 1200)}
          imageAlt="Premium furniture in a warm modern living room"
          imagePriority
        >
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Deals" }]}
            className="text-text-inverse"
          />
        </HeroBanner>
      </div>
    </div>
  );
}
