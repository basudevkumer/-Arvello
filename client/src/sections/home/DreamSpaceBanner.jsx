import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { imageUrl } from "./data";
export default function DreamSpaceBanner() {
  return (
    <section className="py-4">
      <Container>
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src={imageUrl("photo-1618220179428-22790b461013", 1200)}
            alt="Styled dining space"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-overlay-dark" />
          <div className="relative flex min-h-80 items-center px-6 py-12 sm:px-12">
            <div className="max-w-md">
              <h2 className="text-h2 text-text-inverse">
                Design Your <span className="text-accent">Dream Space</span>{" "}
                Today
              </h2>
              <p className="mt-4 text-body-md text-white/75">
                Furniture that turns houses into beautiful homes.
              </p>
              <Link href="/shop" className="btn btn-accent mt-7">
                Explore Collection <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
