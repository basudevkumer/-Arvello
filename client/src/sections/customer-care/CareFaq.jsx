"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import AccordionItem from "@/components/shared/common/AccordionItem";
import { faq } from "@/lib/data/faq";

export default function CareFaq() {
  const [openId, setOpenId] = useState(null);
  return <section className="pb-12 lg:pb-16"><Container><div className="mx-auto max-w-3xl"><ul className="rounded-xl border border-border bg-surface px-5 sm:px-8">{faq.map((item) => <AccordionItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId((current) => current === item.id ? null : item.id)} />)}</ul></div></Container></section>;
}
