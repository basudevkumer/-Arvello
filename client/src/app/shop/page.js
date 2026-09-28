import { ShopBanner, ShopBuyingGuide, ShopFAQ, ShopLayout, ShopToolbar, ShopTrustStrip } from "@/sections/shop";

export default function Shop() {
  return <>
    <ShopBanner />
    <ShopTrustStrip />
    <ShopToolbar />
    <ShopLayout />
    <ShopBuyingGuide />
    <ShopFAQ />
  </>;
}
