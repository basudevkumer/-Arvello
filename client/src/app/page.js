import { BestDeals, BundleOffer, DreamSpaceBanner, FAQ, FeaturedProducts, Hero, HomeInspiration, Newsletter, PromoBanner, ShopByCategory, Testimonials, WhyChooseUs } from "@/sections/home";

export default function Home() {
  return <>
    <Hero />
    <ShopByCategory />
    <FeaturedProducts />
    <PromoBanner />
    <BundleOffer />
    <WhyChooseUs />
    <Testimonials />
    <BestDeals />
    <DreamSpaceBanner />
    <HomeInspiration />
    <FAQ />
    <Newsletter />
  </>;
}
