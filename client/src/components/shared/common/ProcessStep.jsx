/**
 * One numbered step in the "how it's made" process strip.
 *
 * Desktop: a column inside a horizontal row, with the connector line drawn
 * by the parent. Mobile: the same column stacks, and a short vertical
 * connector appears beneath each step except the last.
 */
export default function ProcessStep({ step, index, isLast = false }) {
  const { icon: Icon, title, description } = step;

  return (
    <div className="flex flex-col items-center text-center">
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-sm">
        <Icon size={26} aria-hidden="true" />
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-11 font-bold text-text-primary">
          {index + 1}
        </span>
      </span>

      <h3 className="mt-5 text-label-lg">{title}</h3>
      <p className="mt-2 max-w-[24ch] text-body-sm text-text-secondary">
        {description}
      </p>

      {isLast ? null : (
        <span
          aria-hidden="true"
          className="mt-6 h-6 w-px bg-border-strong lg:hidden"
        />
      )}
    </div>
  );
}
