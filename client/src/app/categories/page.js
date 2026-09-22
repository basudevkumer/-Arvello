import { BrowseByRoom, CategoriesBanner, CategoriesCTA, CategoriesGrid, FeaturedCategoryBanner } from "@/sections/categories";

export default function Categories() {
  return <>
    <CategoriesBanner />
    <CategoriesGrid />
    <BrowseByRoom />
    <FeaturedCategoryBanner />
    <CategoriesCTA />
  </>;
}
