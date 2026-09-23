import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Container from "@/components/layout/Container";

const CONTACT_METHODS = [
  {
    icon: FiPhone,
    label: "Call us",
    value: "+880 1234 567890",
    href: "tel:+8801234567890",
  },
  {
    icon: FiMail,
    label: "Email us",
    value: "hello@arvello.com",
    href: "mailto:hello@arvello.com",
  },
  {
    icon: FiMapPin,
    label: "Visit us",
    value: "Dhanmondi, Dhaka",
    detail: "House 12, Road 8",
  },
  {
    icon: FiClock,
    label: "Opening hours",
    value: "Sat–Thu · 9:00–18:00",
    detail: "Friday closed",
  },
];

export default function ContactInfoStrip() {
  return (
    <section className="pb-16 lg:pb-20" aria-label="Contact information">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_METHODS.map(({ icon: Icon, label, value, detail, href }) => {
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-caption text-text-muted">
                    {label}
                  </span>
                  <span className="mt-1 block break-words text-label-md text-text-primary">
                    {value}
                  </span>
                  {detail ? (
                    <span className="mt-1 block text-caption text-text-secondary">
                      {detail}
                    </span>
                  ) : null}
                </span>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="card flex items-start gap-4 p-5 transition-theme hover:border-primary hover:shadow-sm"
              >
                {content}
              </a>
            ) : (
              <div key={label} className="card flex items-start gap-4 p-5">
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
