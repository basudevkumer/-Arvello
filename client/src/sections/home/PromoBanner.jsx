import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { imageUrl } from "./data";
export default function PromoBanner() { return <section className="py-8 lg:py-12"><Container><div className="relative isolate overflow-hidden rounded-2xl bg-primary px-6 py-12 text-text-inverse sm:px-12 lg:py-16"><div className="relative z-10 max-w-xl"><p className="text-overline text-accent">Limited Time Offer</p><h2 className="mt-3 text-h2 text-text-inverse">Get <span className="text-accent">20% OFF</span> On Selected Products</h2><p className="mt-4 text-body-md text-white/75">Give your home a fresh and stylish upgrade.</p><Link href="/deal" className="btn btn-accent mt-7">Grab The Deal <FiArrowRight className="ml-2" /></Link></div><Image src={imageUrl("photo-1550226891-ef816aed4a98", 900)} alt="Statement armchair in a stylish room" fill sizes="50vw" className="-z-10 object-cover object-right opacity-35" /></div></Container></section>; }
