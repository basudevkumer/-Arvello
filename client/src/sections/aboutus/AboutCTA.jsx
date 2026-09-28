import Link from "next/link";
import Container from "@/components/layout/Container";

export default function AboutCTA() {
  return (
    <section className="bg-accent-light py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline text-accent">Make room for what matters</p>
          <h2 className="mt-3 text-h2">Ready to Find Something for Your Space?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-md text-text-secondary">Explore Arvello&apos;s curated furniture collection for considered, comfortable living.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn btn-primary">Shop Furniture <span className="ml-2" aria-hidden="true">→</span></Link>
            <Link href="/inspiration" className="btn btn-secondary">Explore Inspiration</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
