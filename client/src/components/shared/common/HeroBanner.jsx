import Link from "next/link";
import Image from "next/image";

export default function HeroBanner({
  eyebrow,
  title,
  description,
  image,
  imageAlt = title,
  imagePriority = false,
  primaryAction,
  secondaryAction,
  children,
  className = "",
}) {
  return (
    <section
      className={`relative isolate overflow-hidden rounded-lg bg-primary text-text-inverse ${className}`}
    >
      <div className="absolute inset-0 -z-10 bg-primary" />
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={imagePriority}
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="-z-10 object-cover opacity-35"
        />
      ) : null}
      <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:p-16">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-overline text-accent-light">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 text-text-inverse">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-xl text-body-lg text-primary-light">
              {description}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {primaryAction ? (
              <Link href={primaryAction.href} className="btn btn-accent">
                {primaryAction.label}
              </Link>
            ) : null}
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="btn border border-divider-inverse text-text-inverse hover:bg-divider-inverse"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
