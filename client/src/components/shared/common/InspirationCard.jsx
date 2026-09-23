import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

const imageClasses = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export default function InspirationCard({ story, compact = false }) {
  const imageClass = imageClasses[story.aspectRatio] || imageClasses.landscape;
  return (
    <article
      className={`group overflow-hidden rounded-xl border border-border bg-surface ${compact ? "w-[280px] shrink-0 snap-start" : "break-inside-avoid mb-5"}`}
    >
      <Link
        href={`/inspiration/${story.slug}`}
        className="block"
        aria-label={`Read ${story.title}`}
      >
        <div
          className={`relative overflow-hidden bg-background-muted ${compact ? "aspect-[4/3]" : imageClass}`}
        >
          <Image
            src={story.coverImage}
            alt={story.imageAlt}
            fill
            sizes={
              compact
                ? "280px"
                : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-350 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
          />
          <Badge variant="success" className="absolute left-3 top-3">
            {story.tag}
          </Badge>
          {!compact ? (
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-overlay-dark px-4 py-3 text-label-md text-text-inverse transition-transform duration-250 group-hover:translate-y-0 motion-reduce:transition-none">
              Read More <span aria-hidden="true">→</span>
            </span>
          ) : null}
        </div>
        <div className={compact ? "p-4" : "p-5"}>
          <h3
            className={`${compact ? "text-label-lg" : "text-h4"} leading-snug group-hover:text-primary`}
          >
            {story.title}
          </h3>
          {!compact && story.excerpt ? (
            <p className="mt-2 line-clamp-2 text-body-sm text-text-secondary">
              {story.excerpt}
            </p>
          ) : null}
          <p className="mt-3 text-caption text-text-muted">
            {new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            }).format(new Date(`${story.publishDate}T00:00:00Z`))}
          </p>
        </div>
      </Link>
    </article>
  );
}
