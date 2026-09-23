import Badge from "@/components/ui/Badge";

/**
 * A single milestone on a vertical timeline.
 *
 * Layout: entries alternate between the left and right of a centre line on
 * desktop, and collapse to a single left-aligned column on smaller screens.
 * `isCurrent` marks the most recent milestone with a filled accent marker
 * plus a text badge, so the distinction never relies on colour alone.
 */
export default function TimelineItem({ milestone, index, isCurrent = false }) {
  const { year, title, description } = milestone;
  const isLeftSide = index % 2 === 0;

  return (
    <li className="relative pl-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0">
      <span
        aria-hidden="true"
        className={`absolute left-4 top-7 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full lg:left-1/2 ${
          isCurrent
            ? "h-4 w-4 bg-accent ring-4 ring-accent/25"
            : "h-3.5 w-3.5 border-2 border-border-strong bg-surface"
        }`}
      />

      <article
        className={`card p-5 transition-theme lg:p-6 ${
          isLeftSide ? "lg:col-start-1" : "lg:col-start-2"
        } ${isCurrent ? "border-accent" : ""}`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-overline text-accent">{year}</p>
          {isCurrent ? <Badge variant="warning">Today</Badge> : null}
        </div>
        <h3 className="mt-2 text-h5">{title}</h3>
        <p className="mt-2 text-body-sm text-text-secondary">{description}</p>
      </article>
    </li>
  );
}
