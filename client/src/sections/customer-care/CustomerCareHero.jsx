import Breadcrumb from "@/components/layout/Breadcrumb";
import HeroBanner from "@/components/shared/common/HeroBanner";
import { imageUrl } from "@/sections/home/data";

export default function CustomerCareHero({ title, description, eyebrow = "Arvello customer care", imageId = "photo-1556742049-0cfed4f6a45d", children }) {
  return (
    <div className="py-8 lg:py-12">
      <HeroBanner eyebrow={eyebrow} title={title} description={description} image={imageUrl(imageId, 1200)} imageAlt="Arvello customer care team helping a furniture customer" imagePriority>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Customer Care" }, { label: title }]} className="text-text-inverse" />
        {children}
      </HeroBanner>
    </div>
  );
}
