import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { imageUrl } from "./data";
const posts = [
  [
    "Interior Tips",
    "5 Easy Ways to Make Your Living Room Look Expensive",
    "Aug 15, 2024",
    "photo-1616486338812-3dadae4b4ace",
  ],
  [
    "Home Decor",
    "Minimalist Bedroom Ideas for a Peaceful Lifestyle",
    "Aug 10, 2024",
    "photo-1505693416388-ac5ce068fe85",
  ],
  [
    "Buying Guide",
    "How to Choose the Perfect Sofa for Your Home",
    "Aug 05, 2024",
    "photo-1555041469-a586c61ea9bc",
  ],
];
export default function HomeInspiration() {
  return (
    <section id="inspiration" className="py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-overline text-accent">Ideas & inspiration</p>
            <h2 className="mt-2 text-h3">Home Inspiration</h2>
            <p className="mt-2 text-body-sm text-text-secondary">
              Ideas to make your home more stylish.
            </p>
          </div>
          <Link
            href="/inspiration"
            className="inline-flex items-center gap-2 text-label-md text-primary"
          >
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map(([tag, title, date, id]) => (
            <article key={title} className="card overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image
                  src={imageUrl(id, 700)}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="badge badge-success absolute left-3 top-3">
                  {tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-label-lg leading-snug">{title}</h3>
                <p className="mt-3 text-caption text-text-muted">{date}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
