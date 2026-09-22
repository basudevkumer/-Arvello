import Container from "@/components/layout/Container";
import CategoryTile from "@/components/shared/category/CategoryTile";
import { categories } from "@/lib/data/categories";

export default function CategoriesGrid() {
  return <section className="scroll-mt-24 py-12 lg:py-16"><Container><div className="mb-8 max-w-xl"><p className="text-overline text-accent">Curated collections</p><h2 className="mt-2 text-h2">Explore Our Collections</h2><p className="mt-3 text-body-md text-text-secondary">Find the perfect piece for every corner of your home.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">{categories.map((category, index) => <CategoryTile key={category.id} category={category} className={`${index === 0 ? "lg:col-span-2 lg:row-span-2" : index === 1 ? "lg:col-span-2" : ""} lg:min-h-0`} />)}</div></Container></section>;
}
