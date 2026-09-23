import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/common/Reveal";
import TimelineItem from "@/components/shared/common/TimelineItem";
import { milestones } from "@/lib/data/milestones";

export default function Timeline() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-overline text-accent">Since 2015</p>
          <h2 className="mt-3 text-h2">Our Journey</h2>
          <p className="mt-4 text-body-md text-text-secondary">
            A decade of choosing the slower, more considered way to make furniture.
          </p>
        </Reveal>
        <ol className="relative mx-auto max-w-4xl space-y-6 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-border-strong lg:space-y-8 lg:before:left-1/2">
          {milestones.map((milestone, index) => (
            <TimelineItem key={milestone.year} milestone={milestone} index={index} isCurrent={index === milestones.length - 1} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
