import CategoryCard from "./CategoryCard";

export default function CategoryGrid({ categories = [], columns = "default", className = "", emptyMessage = "No categories available." }) {
  if (!categories.length) return <p className="text-body-md text-text-secondary">{emptyMessage}</p>;
  const columnClass = { default: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", compact: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", wide: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  return <div className={`grid gap-6 ${columnClass} ${className}`}>{categories.map((category) => <CategoryCard key={category.id || category.href || category.name} {...category} />)}</div>;
}
