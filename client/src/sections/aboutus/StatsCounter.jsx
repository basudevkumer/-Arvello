import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/common/Reveal";
import StatCounter from "@/components/shared/common/StatCounter";

const STATS = [
  { value: 10, suffix: "+", label: "Years in business" },
  { value: 50000, suffix: "+", label: "Happy customers" },
  { value: 1200, suffix: "+", label: "Products delivered" },
  { value: 25, suffix: "+", label: "Cities served" },
];

export default function StatsCounter() {
  return (
    <section className="bg-primary py-16 lg:py-20" aria-label="Arvello by the numbers">
      <Container>
        <Reveal className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {STATS.map((stat) => <StatCounter key={stat.label} {...stat} />)}
        </Reveal>
      </Container>
    </section>
  );
}
