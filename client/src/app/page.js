import { BestDeals, DreamSpaceBanner, FeaturedProducts, Hero, HomeInspiration, Newsletter, PromoBanner, ShopByCategory, Testimonials, WhyChooseUs } from "@/sections/home";

export default function Home() {
  return <>
    <Hero />
    <ShopByCategory />
    <FeaturedProducts />
    <PromoBanner />
    <WhyChooseUs />
    <DreamSpaceBanner />
    <BestDeals />
    <Testimonials />
    <HomeInspiration />
    <Newsletter />
  </>;
}
