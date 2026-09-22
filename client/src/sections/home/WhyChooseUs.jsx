import { FiHeart, FiHome, FiTag, FiShield } from "react-icons/fi";
import Container from "@/components/layout/Container";
const features = [
  [FiShield, "Premium Quality", "Built to last with the finest materials."],
  [FiHome, "Modern Designs", "Trendy styles for every space."],
  [FiTag, "Affordable Price", "Luxury feel within your budget."],
  [FiHeart, "Customer First", "Your happiness is our priority."],
];
export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <h2 className="text-h3">Why Choose Arvello</h2>
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mt-3 text-body-md text-text-secondary">
            More than furniture — we craft better living.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([Icon, title, text]) => (
            <article key={title} className="card p-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-accent">
                <Icon size={25} />
              </span>
              <h3 className="mt-5 text-h5">{title}</h3>
              <p className="mt-2 text-body-sm text-text-secondary">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
