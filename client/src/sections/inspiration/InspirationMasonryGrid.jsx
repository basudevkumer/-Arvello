"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/common/SectionHeading";
import InspirationCard from "@/components/shared/common/InspirationCard";
import Skeleton from "@/components/ui/Skeleton";
import { inspiration, inspirationTags } from "@/lib/data/inspiration";

function GridSkeleton() {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
      {["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]"].map(
        (aspect, index) => (
          <div
            key={index}
            className="mb-5 break-inside-avoid overflow-hidden rounded-xl border border-border"
          >
            <Skeleton className={`w-full ${aspect}`} />
            <div className="space-y-3 p-5">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-1/3" />
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default function InspirationMasonryGrid() {
  const [activeTag, setActiveTag] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => () => clearTimeout(timerRef.current), []);
  const stories =
    activeTag === "All"
      ? inspiration
      : inspiration.filter((story) => story.tag === activeTag);
  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setIsLoading(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsLoading(false), 250);
  };

  return (
    <section className="bg-background-soft py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Ideas & inspiration"
          title="Get Inspired"
          description="Real rooms, real ideas — styled for every taste."
        />
        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Filter inspiration by style"
        >
          {inspirationTags.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={activeTag === tag}
              onClick={() => handleTagChange(tag)}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-label-sm transition-theme ${activeTag === tag ? "border-primary bg-primary text-text-inverse" : "border-border-strong bg-surface text-text-secondary hover:border-primary hover:text-primary"}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="mt-8" aria-live="polite">
          {isLoading ? (
            <GridSkeleton />
          ) : stories.length ? (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
              {stories.map((story) => (
                <InspirationCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-surface p-10 text-center">
              <h3 className="text-h4">
                No inspiration found for this style yet
              </h3>
              <p className="mt-2 text-body-md text-text-secondary">
                Try another style to discover more room ideas.
              </p>
              <button
                type="button"
                onClick={() => handleTagChange("All")}
                className="btn btn-primary mt-6"
              >
                View All Inspiration
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
