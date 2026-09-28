"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import AccordionItem from "@/components/shared/common/AccordionItem";

const questions = [
  { id: "delivery", question: "Do you offer home delivery?", answer: "Yes. Delivery options and timing are shown for your location during checkout, and our team confirms the delivery window in advance." },
  { id: "assembly", question: "Do you provide furniture assembly?", answer: "Assembly availability depends on the piece and delivery area. Contact our team before ordering and we will confirm the available support." },
  { id: "returns", question: "What is your return policy?", answer: "If a piece is not right for your space, contact us within 7 days of delivery. Items should be in original condition for return or exchange support." },
  { id: "payment", question: "Do you offer Cash on Delivery or EMI?", answer: "Cash on Delivery, bKash, and EMI options are available on eligible orders. Payment options are confirmed at checkout." },
  { id: "warranty", question: "Do your furniture products come with a warranty?", answer: "Every Arvello piece includes a 1-year workmanship warranty. Our team can also share care guidance for your furniture." },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-background-soft py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-overline text-accent">Good to know</p>
            <h2 className="mt-3 text-h2">Frequently Asked Questions</h2>
            <p className="mt-4 text-body-md text-text-secondary">Helpful answers before you bring a piece home.</p>
          </div>
          <ul className="mt-10 rounded-xl border border-border bg-surface px-5 sm:px-8">
            {questions.map((item) => <AccordionItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId((current) => current === item.id ? null : item.id)} />)}
          </ul>
        </div>
      </Container>
    </section>
  );
}
