import Container from "@/components/layout/Container";

export default function CareProcess({ eyebrow = "How it works", title, steps }) {
  return (
    <section className="bg-background-soft py-12 lg:py-16">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="text-overline text-accent">{eyebrow}</p>
          <h2 className="mt-2 text-h3">{title}</h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="card relative p-5">
              <span className="text-overline text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-h5">{step.title}</h3>
              <p className="mt-2 text-body-sm text-text-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
