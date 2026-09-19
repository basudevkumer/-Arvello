"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [], productName = "Product", className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!images.length) return <div className={`aspect-[4/3] rounded-lg bg-background-muted ${className}`} aria-label="Product image unavailable" />;
  const activeImage = images[activeIndex] || images[0];
  return <div className={`grid gap-4 ${className}`}><div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-background-muted"><Image src={activeImage.src} alt={activeImage.alt || productName} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain" /></div><div className="flex gap-3 overflow-x-auto pb-1" role="list" aria-label="Product images">{images.map((image, index) => <button key={`${image.src}-${index}`} type="button" onClick={() => setActiveIndex(index)} aria-label={`View image ${index + 1} of ${images.length}`} aria-current={index === activeIndex ? "true" : undefined} className={`relative size-20 shrink-0 overflow-hidden rounded-md border-2 bg-background-muted transition-theme motion-reduce:transition-none ${index === activeIndex ? "border-primary" : "border-border"}`}><Image src={image.src} alt="" fill sizes="80px" className="object-cover" /></button>)}</div></div>;
}
