import {
  DealBanner,
  DealOfTheDay,
  FlashSaleSection,
  DealCatalog,
  BundleDeals,
  ClearanceSection,
  DealBenefits,
  DealNewsletterCTA,
} from "@/sections/deal";

export default function Deal() {
  return (
    <>
      <DealBanner />
      <DealOfTheDay />
      <FlashSaleSection />
      <DealCatalog />
      <BundleDeals />
      <ClearanceSection />
      <DealBenefits />
      <DealNewsletterCTA />
    </>
  );
}
