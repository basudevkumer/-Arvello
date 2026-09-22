import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiRotateCcw,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import Container from "@/components/layout/Container";
import { imageUrl } from "./data";

const trust = [
  [FiTruck, "Free Shipping", "On all orders"],
  [FiRotateCcw, "Easy Returns", "Within 30 days"],
  [FiShield, "Secure Payment", "100% safe & secure"],
  [FiCheckCircle, "24/7 Support", "Always here for you"],
];
export default function Hero() {
  return (
    <section className="bg-background-soft py-12 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-overline text-accent">
              <span className="h-px w-8 bg-accent" />
              Live Beautifully
            </p>
            <h1 className="max-w-xl text-display-lg">
              Make Your Home More <span className="text-accent">Beautiful</span>{" "}
              With Arvello
            </h1>
            <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
              Discover premium furniture that blends comfort, elegance and
              functionality — for a home you’ll love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn btn-primary min-h-12 px-6">
                Shop Now <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="#inspiration"
                className="inline-flex min-h-12 items-center gap-2 px-2 text-label-md text-primary"
              >
                <FiPlay
                  className="rounded-full bg-surface-primary-soft p-2 text-primary"
                  size={36}
                />
                Watch Video
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={imageUrl("photo-1555041469-a586c61ea9bc", 1200)}
              alt="Warm modern living room with a sofa"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 -mt-6 grid overflow-hidden rounded-xl border border-border bg-surface shadow-md sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(([Icon, title, subtitle], index) => (
            <div
              key={title}
              className={`flex items-center gap-3 p-4 lg:justify-center ${index ? "border-border sm:border-l" : ""} ${index > 1 ? "border-t lg:border-t-0" : ""}`}
            >
              <span className="rounded-full bg-primary-light p-2 text-primary">
                <Icon size={19} />
              </span>
              <div>
                <p className="text-label-sm">{title}</p>
                <p className="text-caption text-text-muted">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
