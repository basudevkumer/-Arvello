"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { categories, rooms } from "@/lib/data/categories";

const roomCategoryIds = {
  "Living Room": "sofas",
  Bedroom: "bedroom",
  "Dining Room": "dining",
  "Home Office": "office",
  Outdoor: "outdoor",
};

export default function BrowseByRoom() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const roomCategory = categories.find((category) => category.id === roomCategoryIds[activeRoom]);

  return (
    <section className="bg-background-soft py-12 lg:py-16">
      <Container>
        <div className="mb-7">
          <p className="text-overline text-accent">Where will you use it?</p>
          <h2 className="mt-2 text-h3">Browse by Room</h2>
          <p className="mt-2 text-body-md text-text-secondary">Choose a room to discover furniture curated for that space.</p>
        </div>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Browse rooms">
          {rooms.map((room) => (
            <button key={room} type="button" role="tab" aria-selected={activeRoom === room} onClick={() => setActiveRoom(room)} className={`min-h-11 shrink-0 rounded-full border px-5 text-label-sm transition-theme ${activeRoom === room ? "border-primary bg-primary text-text-inverse" : "border-border-strong bg-surface text-text-secondary hover:border-primary hover:text-primary"}`}>
              {room}
            </button>
          ))}
        </div>
        {roomCategory ? (
          <Link href={`/shop?category=${roomCategory.slug}`} className="group relative isolate flex min-h-64 overflow-hidden rounded-2xl bg-primary sm:min-h-72">
            <Image src={roomCategory.image} alt={`${activeRoom} furniture`} fill sizes="(min-width: 1024px) 1200px, 100vw" className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/80 via-neutral-950/30 to-transparent" />
            <div className="mt-auto flex w-full items-end justify-between gap-4 p-6 text-text-inverse sm:p-8">
              <div>
                <h3 className="text-h3 text-text-inverse">{activeRoom}</h3>
                <p className="mt-2 text-body-md text-white/75">Explore furniture for your {activeRoom.toLowerCase()}.</p>
              </div>
              <span className="inline-flex min-h-11 shrink-0 items-center gap-2 text-label-md transition-transform duration-250 group-hover:translate-x-1">Explore {activeRoom} <FiArrowRight aria-hidden="true" /></span>
            </div>
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
