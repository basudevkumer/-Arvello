"use client";

import { FiSend } from "react-icons/fi";
import Container from "@/components/layout/Container";
export default function Newsletter() {
  return (
    <section className="pb-16 pt-4 lg:pb-20">
      <Container>
        <div className="flex flex-col gap-6 rounded-2xl bg-primary p-7 text-text-inverse sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-white/10 p-3 text-accent">
              <FiSend size={24} />
            </span>
            <div>
              <h2 className="text-h4 text-text-inverse">
                Get Updates & Special Offers
              </h2>
              <p className="mt-1 text-body-sm text-white/70">
                Subscribe now and never miss a deal.
              </p>
            </div>
          </div>
          <form
            className="flex w-full max-w-lg flex-col gap-2 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email address"
              className="min-h-11 flex-1 rounded-md border border-white/20 bg-white px-4 text-14 text-text-primary outline-none placeholder:text-text-muted focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="btn btn-accent min-h-11">
              Subscribe <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
