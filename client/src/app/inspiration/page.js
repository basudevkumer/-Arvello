import {
  FeaturedStory,
  InspirationBanner,
  InspirationMasonryGrid,
  InspirationNewsletterCTA,
  ShopTheLook,
  TrendingReads,
} from "@/sections/inspiration";

export default function Inspiration() {
  return (
    <>
      <InspirationBanner />
      <FeaturedStory />
      <InspirationMasonryGrid />
      <ShopTheLook />
      <TrendingReads />
      <InspirationNewsletterCTA />
    </>
  );
}