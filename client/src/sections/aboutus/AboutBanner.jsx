import Breadcrumb from "@/components/layout/Breadcrumb";
import HeroBanner from "@/components/shared/common/HeroBanner";
import { imageUrl } from "@/sections/home/data";

/**
 * Page hero for About Us. Reuses the shared HeroBanner so the banner
 * geometry, typography and breadcrumb treatment stay identical to Shop,
 * Categories, Inspiration and Deal.
 */
export default function AboutBanner() {
  return (
    <div className="py-8 lg:py-12">
      <HeroBanner
        eyebrow="Craft, care and better living"
        title="About Us"
        description="A furniture workshop that grew slowly, on purpose — and the people who still build every piece by hand."
        image={imageUrl("photo-1524758631624-e2822e304c36", 1200)}
        imageAlt="Warm, fully furnished living room styled with Arvello furniture"
        imagePriority
      >
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          className="text-text-inverse"
        />
      </HeroBanner>
    </div>
  );
}
