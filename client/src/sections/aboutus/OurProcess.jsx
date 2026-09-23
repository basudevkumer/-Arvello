import { FiCheckCircle, FiCompass, FiEdit3, FiPackage, FiPenTool } from "react-icons/fi";
import Container from "@/components/layout/Container";
import ProcessStep from "@/components/shared/common/ProcessStep";
import Reveal from "@/components/shared/common/Reveal";

const STEPS = [
  { icon: FiEdit3, title: "Design", description: "Every piece starts with a useful idea and a hand-drawn line." },
  { icon: FiCompass, title: "Source", description: "We select responsible materials for strength, character, and longevity." },
  { icon: FiPenTool, title: "Handcraft", description: "Skilled makers shape, join, and finish each piece with patience." },
  { icon: FiCheckCircle, title: "Quality Check", description: "A final pair of trained eyes checks every detail before it leaves." },
  { icon: FiPackage, title: "Delivery", description: "Our two-person crew brings it safely into the room it belongs in." },
];

export default function OurProcess() {
  return (
    <section className="bg-background-soft py-16 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-overline text-accent">Made with intention</p>
          <h2 className="mt-3 text-h2">From Idea to Your Home</h2>
          <p className="mt-4 text-body-md text-text-secondary">Good furniture is a chain of small, careful decisions.</p>
        </Reveal>
        <ol className="relative mt-12 grid gap-8 lg:grid-cols-5 lg:gap-4 before:hidden lg:before:absolute lg:before:left-[10%] lg:before:right-[10%] lg:before:top-8 lg:before:block lg:before:h-px lg:before:bg-border-strong">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 70} as="li" className="relative z-10">
              <ProcessStep step={step} index={index} isLast={index === STEPS.length - 1} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
