export default function SectionHeading({ eyebrow, title, description, align = "left", className = "", children }) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}><div className="flex items-center gap-3">{eyebrow ? <span className="text-overline text-accent">{eyebrow}</span> : null}{children}</div><h2 className="text-h2">{title}</h2>{description ? <p className="text-body-md text-text-secondary">{description}</p> : null}</div>;
}
