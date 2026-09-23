import { FiFeather, FiHeart, FiPenTool, FiShield } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/common/Reveal";

const VALUES = [
  [FiPenTool, "Craftsmanship", "Thoughtful joinery and careful finishing make every piece worth keeping."],
  [FiFeather, "Sustainable Materials", "We choose certified timber and honest materials with a lighter footprint."],
  [FiShield, "Timeless Design", "Quiet silhouettes are made to live beautifully through changing seasons."],
  [FiHeart, "Customer-First Service", "From first question to final delivery, real people are here to help."],
];

export default function MissionValues() {
  return (
    <section className="bg-background-soft py-16 lg:py-20">
      <Container>
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-overline text-accent">Our values</p>
          <h2 className="mt-3 text-h2">What We Stand For</h2>
          <p className="mt-4 text-body-md text-text-secondary">
            The principles behind every design, decision, and delivery.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([Icon, title, description], index) => (
            <Reveal key={title} delay={index * 70} as="article" className="card p-6 text-center transition-theme hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-accent">
                <Icon size={25} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-h5">{title}</h3>
              <p className="mt-2 text-body-sm text-text-secondary">{description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
