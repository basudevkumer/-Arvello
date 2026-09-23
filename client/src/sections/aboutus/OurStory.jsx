import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/common/Reveal";
import { imageUrl } from "@/sections/home/data";

const STORY_PARAGRAPHS = [
  "Arvello started in 2015 in a rented workshop in Dhaka, with one lathe, two apprentices, and a question we couldn't put down: why is it so hard to find furniture that feels made for a person rather than a showroom?",
  "Our first collection was fifteen pieces, all built from reclaimed teak. It sold out in nine weeks — not because we marketed it well, but because people could feel the difference. A drawer that closes properly. A frame that hasn't shifted after a year of Sunday afternoons.",
  "Eleven years on, we still work the same way. We design slowly, buy certified timber, and refuse to ship anything we wouldn't want in our own homes. Every piece is inspected by hand before it leaves the workshop, because a home is not a showroom.",
];

export default function OurStory() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-background-muted sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src={imageUrl("photo-1550226891-ef816aed4a98", 1000)}
                alt="Warm mustard armchair and wooden side table in a bright, sunlit room"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-5 hidden w-36 overflow-hidden rounded-xl border-4 border-surface shadow-lg sm:block lg:w-44">
              <div className="relative aspect-square">
                <Image
                  src={imageUrl("photo-1524758631624-e2822e304c36", 500)}
                  alt="Modern lounge seating with an arc floor lamp and wooden shelving"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="flex items-center gap-3 text-overline text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Our Story
            </p>

            <h2 className="mt-4 text-h2">Furniture Made With Purpose</h2>

            <div className="mt-5 flex flex-col gap-4 text-body-md text-text-secondary">
              {STORY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-label-lg">Imran Chowdhury</p>
              <p className="mt-1 text-caption text-text-muted">
                Founder & Creative Director, Arvello
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
