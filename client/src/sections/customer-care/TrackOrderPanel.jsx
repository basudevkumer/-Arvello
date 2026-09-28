"use client";

import { FiCheck } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const statuses = ["Order Confirmed", "Processing", "Packed", "Shipped", "Out for Delivery", "Delivered"];

export default function TrackOrderPanel() {
  return (
    <section className="pb-12 lg:pb-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <form onSubmit={(event) => event.preventDefault()} className="card grid gap-5 p-6 sm:p-8">
            <div><p className="text-overline text-accent">Order lookup</p><h2 className="mt-2 text-h3">Track your order</h2><p className="mt-3 text-body-sm text-text-secondary">Enter your details when tracking is connected to your order account.</p></div>
            <Input id="order-number" name="orderNumber" label="Order Number" placeholder="e.g. ARV-0000" />
            <Input id="order-contact" name="contact" label="Email or Phone" placeholder="you@example.com" />
            <Button type="submit" className="w-full">Track Order</Button>
            <p className="text-caption text-text-muted">Tracking is ready for future order-system integration.</p>
          </form>
          <div className="rounded-2xl bg-background-soft p-6 sm:p-8" aria-label="Order tracking stages">
            <p className="text-overline text-accent">Tracking stages</p>
            <h2 className="mt-2 text-h3">Know what happens next</h2>
            <ol className="mt-7 grid gap-4 sm:grid-cols-2">
              {statuses.map((status, index) => <li key={status} className="flex items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-text-inverse"><FiCheck size={15} aria-hidden="true" /></span><span><span className="block text-label-md">{status}</span><span className="mt-1 block text-caption text-text-muted">Status stage {index + 1}</span></span></li>)}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
