import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import InspirationCard from "@/components/shared/common/InspirationCard";
import { inspiration } from "@/lib/data/inspiration";

export default function TrendingReads() {
  const trending = [...inspiration]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);
  return (
    <section className="bg-background-soft py-12 lg:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-overline text-accent">Keep exploring</p>
            <h2 className="mt-2 text-h3">Trending This Week</h2>
          </div>
          <Link
            href="/inspiration"
            className="inline-flex shrink-0 items-center gap-2 text-label-md text-primary transition-theme hover:text-primary-hover"
          >
            View All <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {trending.map((story) => (
            <InspirationCard key={story.id} story={story} compact />
          ))}
        </div>
      </Container>
    </section>
  );
}
