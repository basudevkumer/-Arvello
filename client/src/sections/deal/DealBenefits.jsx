import { FiCheckCircle, FiShield, FiTruck, FiRefreshCw } from "react-icons/fi";
import Container from "@/components/layout/Container";

const benefits = [
  [
    FiCheckCircle,
    "Genuine Savings",
    "Thoughtful prices, never inflated discounts.",
  ],
  [FiShield, "Quality Guaranteed", "Crafted to bring lasting comfort home."],
  [FiTruck, "Free Shipping on Deals", "Enjoy delivery on qualifying offers."],
  [FiRefreshCw, "Easy 30-Day Returns", "Shop with confidence and flexibility."],
];
export default function DealBenefits() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid gap-6 rounded-2xl border-border bg-surface-soft p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {benefits.map(([Icon, title, copy]) => (
            <div key={title} className="flex gap-4">
              <Icon
                size={24}
                className="shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-label-lg">{title}</h3>
                <p className="mt-1 text-body-sm text-text-secondary">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
