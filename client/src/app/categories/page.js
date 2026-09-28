import { BrowseByRoom, CategoriesBanner, CategoriesCTA, CategoriesGrid, CategoryTrustStrip, FeaturedCategoryBanner } from "@/sections/categories";

export default function Categories() {
  return <>
    <CategoriesBanner />
    <CategoryTrustStrip />
    <CategoriesGrid />
    <BrowseByRoom />
    <FeaturedCategoryBanner />
    <CategoriesCTA />
  </>;
}
