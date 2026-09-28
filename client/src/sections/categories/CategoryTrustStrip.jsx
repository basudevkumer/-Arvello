import { FiCreditCard, FiDollarSign, FiShield, FiTruck } from "react-icons/fi";
import Container from "@/components/layout/Container";

const trustItems = [
  [FiDollarSign, "COD Available"],
  [FiCreditCard, "bKash Payment"],
  [FiCreditCard, "EMI Available"],
  [FiTruck, "Nationwide Delivery"],
  [FiShield, "Warranty Support"],
];

export default function CategoryTrustStrip() {
  return (
    <section aria-label="Shopping benefits" className="border-y border-border bg-background-soft">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3 lg:grid-cols-5">
          {trustItems.map(([Icon, label], index) => (
            <div key={label} className={`flex min-h-16 items-center justify-center gap-2 px-3 py-3 text-center ${index > 2 ? "border-t border-border sm:border-t-0" : ""}`}>
              <Icon className="shrink-0 text-accent" size={18} aria-hidden="true" />
              <span className="text-label-sm text-text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
