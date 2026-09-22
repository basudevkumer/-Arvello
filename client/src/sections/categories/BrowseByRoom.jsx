"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import CategoryTile from "@/components/shared/category/CategoryTile";
import { categories, rooms } from "@/lib/data/categories";

export default function BrowseByRoom() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const roomCategories = categories.filter((category) => category.rooms.includes(activeRoom));
  return <section className="bg-background-soft py-12 lg:py-16"><Container><div className="mb-7"><p className="text-overline text-accent">Shop by space</p><h2 className="mt-2 text-h3">Shop By Room</h2><p className="mt-2 text-body-md text-text-secondary">Not sure where to start? Browse by space.</p></div><div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Browse rooms">{rooms.map((room) => <button key={room} type="button" role="tab" aria-selected={activeRoom === room} onClick={() => setActiveRoom(room)} className={`min-h-11 shrink-0 rounded-full border px-5 text-label-sm transition-theme ${activeRoom === room ? "border-primary bg-primary text-text-inverse" : "border-border-strong bg-surface text-text-secondary hover:border-primary hover:text-primary"}`}>{room}</button>)}</div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{roomCategories.map((category) => <CategoryTile key={category.id} category={category} className="min-h-56" />)}</div></Container></section>;
}
