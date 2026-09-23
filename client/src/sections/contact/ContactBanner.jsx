import Breadcrumb from "@/components/layout/Breadcrumb";
import HeroBanner from "@/components/shared/common/HeroBanner";
import { imageUrl } from "@/sections/home/data";

export default function ContactBanner() {
  return <div className="py-8 lg:py-12"><HeroBanner eyebrow="We are here to help" title="Contact Us" description="Questions about a piece, an order, or a project? Our team would love to hear from you." image={imageUrl("photo-1556742049-0cfed4f6a45d", 1200)} imageAlt="Arvello team member helping a customer choose furniture" imagePriority><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} className="text-text-inverse" /></HeroBanner></div>;
}
