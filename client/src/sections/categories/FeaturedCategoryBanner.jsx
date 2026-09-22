import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { categories } from "@/lib/data/categories";

export default function FeaturedCategoryBanner() { return <section className="py-12 lg:py-16"><Container><div className="relative isolate overflow-hidden rounded-2xl bg-primary px-6 py-12 text-text-inverse sm:px-12 lg:py-16"><div className="relative z-10 max-w-xl"><p className="text-overline text-accent">Editor’s pick</p><h2 className="mt-3 text-h2 text-text-inverse">The <span className="text-accent">Living Room</span> Edit</h2><p className="mt-4 text-body-md text-white/75">Comfort-first silhouettes and timeless textures for the room you live in most.</p><Link href={`/shop?category=${categories[0].slug}`} className="btn btn-accent mt-7">Explore Collection <FiArrowRight className="ml-2" /></Link></div><Image src={categories[0].image} alt="Living room furniture collection" fill sizes="50vw" className="-z-10 object-cover object-right opacity-35" /></div></Container></section>; }
