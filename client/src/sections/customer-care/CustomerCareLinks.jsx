import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";

const links = [
  ["Track Order", "/track-order"],
  ["Returns & Refunds", "/returns-refunds"],
  ["Shipping Policy", "/shipping-policy"],
  ["FAQ", "/faq"],
  ["Support", "/support"],
];

export default function CustomerCareLinks({ title = "Need another answer?" }) {
  return (
    <section className="pb-16 lg:pb-20">
      <Container>
        <div className="rounded-2xl border border-border bg-background-soft p-6 sm:p-8">
          <h2 className="text-h4">{title}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="card flex min-h-12 items-center justify-between gap-3 p-4 text-label-md text-primary transition-theme hover:border-primary hover:shadow-sm">
                {label}<FiArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
