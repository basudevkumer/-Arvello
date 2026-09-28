import { FiCreditCard, FiDollarSign, FiShield, FiTruck } from "react-icons/fi";
import Container from "@/components/layout/Container";

const benefits = [
  [FiDollarSign, "COD Available"],
  [FiCreditCard, "bKash Payment"],
  [FiCreditCard, "EMI Available"],
  [FiTruck, "Nationwide Delivery"],
  [FiShield, "Warranty Support"],
];
export default function DealBenefits() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid gap-6 rounded-2xl border-border bg-surface-soft p-6 sm:grid-cols-2 lg:grid-cols-5 lg:p-8">
          {benefits.map(([Icon, title]) => (
            <div key={title} className="flex items-center gap-3">
              <Icon size={22} className="shrink-0 text-accent" aria-hidden="true" />
              <h3 className="text-label-md">{title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
