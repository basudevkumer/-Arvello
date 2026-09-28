"use client";

import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const categories = [
  { value: "order", label: "Order Support" },
  { value: "delivery", label: "Delivery Support" },
  { value: "returns", label: "Returns & Refunds" },
  { value: "product", label: "Product Support" },
  { value: "general", label: "General Support" },
];

export default function SupportForm() {
  return (
    <section className="pb-12 lg:pb-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div><p className="text-overline text-accent">Support request</p><h2 className="mt-2 text-h3">Tell us how we can help</h2><p className="mt-3 text-body-md text-text-secondary">Share a few details and this form will be ready for connection to Arvello&apos;s support workflow.</p><div className="mt-6 rounded-xl border border-border bg-background-soft p-5"><p className="text-label-md">Before you send a request</p><p className="mt-2 text-body-sm text-text-secondary">For common questions, the FAQ and policy pages may have the answer you need right away.</p></div></div>
          <form onSubmit={(event) => event.preventDefault()} className="card grid gap-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2"><Input id="support-name" name="name" label="Name" required placeholder="Your name" /><Input id="support-email" name="email" type="email" label="Email" required placeholder="you@example.com" /></div>
            <div className="grid gap-5 sm:grid-cols-2"><Input id="support-order" name="orderNumber" label="Order Number" placeholder="Optional" /><Select id="support-category" name="category" label="Category" placeholder="Choose a category" options={categories} /></div>
            <Input id="support-subject" name="subject" label="Subject" required placeholder="What do you need help with?" />
            <div className="grid gap-2"><label htmlFor="support-message" className="text-label-md text-text-primary">Message<span className="ml-1 text-error" aria-hidden="true">*</span></label><textarea id="support-message" name="message" required rows={6} placeholder="Tell us a little more" className="w-full resize-y rounded-md border border-border-strong bg-surface px-4 py-3 text-14 text-text-primary outline-none transition-theme placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15" /></div>
            <Button type="submit" size="lg" className="w-fit">Submit Request</Button>
            <p className="text-caption text-text-muted">This form is a frontend-ready interface and does not submit to a live support system yet.</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
