import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { featuredStory } from "@/lib/data/inspiration";

export default function FeaturedStory() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid overflow-hidden rounded-2xl bg-background-soft lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-72 sm:min-h-96 lg:min-h-[520px]">
            <Image
              src={featuredStory.coverImage}
              alt={featuredStory.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 57vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="text-overline text-accent">Editor&apos;s pick</p>
            <h2 className="mt-4 text-display-lg">{featuredStory.title}</h2>
            <p className="mt-5 text-body-lg text-text-secondary">
              {featuredStory.excerpt}
            </p>
            <Link
              href={`/inspiration/${featuredStory.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 text-label-md text-primary transition-theme hover:text-primary-hover"
            >
              Read Full Story <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
