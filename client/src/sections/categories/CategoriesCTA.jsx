import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";

export default function CategoriesCTA() {
  return (
    <section className="pb-16 lg:pb-20">
      <Container>
        <div className="rounded-2xl border border-border bg-background-soft px-6 py-12 text-center sm:px-12">
          <p className="text-overline text-accent">Need a little help?</p>
          <h2 className="mt-3 text-h3">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-body-md text-text-secondary">Explore our complete furniture collection and find the right pieces for your space.</p>
          <Link href="/shop" className="btn btn-primary mt-7">Shop All Furniture <FiArrowRight className="ml-2" aria-hidden="true" /></Link>
        </div>
      </Container>
    </section>
  );
}
