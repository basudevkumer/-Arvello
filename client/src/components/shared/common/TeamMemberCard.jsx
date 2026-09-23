import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

/**
 * Maps the `icon` key stored in `lib/data/team.js` to a react-icons
 * component. Only icons already used elsewhere in the site are listed, so
 * the social vocabulary stays consistent with the footer.
 */
const SOCIAL_ICONS = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebookF,
  pinterest: FaPinterestP,
};

export default function TeamMemberCard({ member, className = "" }) {
  const { name, role, photo, photoAlt, shortBio, socialLinks = [] } = member;

  return (
    <article
      className={`card group flex h-full flex-col overflow-hidden transition-theme hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-background-muted">
        <Image
          src={photo}
          alt={photoAlt || name}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-350 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-label-lg">{name}</h3>
        <p className="mt-1 text-caption text-accent">{role}</p>
        <p className="mt-3 text-body-sm text-text-secondary">{shortBio}</p>

        {socialLinks.length ? (
          <ul className="mt-auto flex items-center gap-2 pt-5">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = SOCIAL_ICONS[icon];
              if (!Icon) return null;

              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-icon-secondary transition-theme hover:border-primary hover:bg-primary hover:text-text-inverse"
                  >
                    <Icon size={13} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
