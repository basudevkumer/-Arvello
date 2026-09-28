import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { homeProducts } from "./data";

const bundle = [homeProducts[0], homeProducts[1]];

export default function BundleOffer() {
  const individualTotal = bundle.reduce((total, product) => total + product.price, 0);
  const bundlePrice = individualTotal - 49;

  return (
    <section className="bg-background-soft py-16 lg:py-20">
      <Container>
        <div className="grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid grid-cols-2 gap-2 p-2 sm:p-3">
            {bundle.map((product) => (
              <div key={product.id} className="relative aspect-square overflow-hidden rounded-lg bg-background-muted">
                <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-overline text-accent">Complete the room</p>
            <h2 className="mt-3 text-h3">Sofa + Coffee Table</h2>
            <p className="mt-3 text-body-md text-text-secondary">Pair two everyday essentials for a more considered living room.</p>
            <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-5 text-center">
              <div><dt className="text-caption text-text-muted">Individual total</dt><dd className="mt-1 text-label-lg">${individualTotal}</dd></div>
              <div><dt className="text-caption text-text-muted">Bundle price</dt><dd className="mt-1 text-label-lg text-primary">${bundlePrice}</dd></div>
              <div><dt className="text-caption text-text-muted">You save</dt><dd className="mt-1 text-label-lg text-accent">$49</dd></div>
            </dl>
            <Link href="/shop" className="btn btn-primary mt-7 w-fit">Explore Bundle <FiArrowRight className="ml-2" /></Link>
            <p className="mt-4 flex items-center gap-2 text-caption text-text-muted"><FiCheck className="text-success" /> Curated from our current collection</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
