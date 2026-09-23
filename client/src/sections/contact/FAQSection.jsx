"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import AccordionItem from "@/components/shared/common/AccordionItem";
import { faq } from "@/lib/data/faq";

export default function FAQSection() { const [openId, setOpenId] = useState(null); return <section className="bg-background-soft py-16 lg:py-20"><Container><div className="mx-auto max-w-3xl"><div className="text-center"><p className="text-overline text-accent">Good to know</p><h2 className="mt-3 text-h2">Frequently Asked Questions</h2><p className="mt-4 text-body-md text-text-secondary">A few quick answers before you get in touch.</p></div><ul className="mt-10 rounded-xl border border-border bg-surface px-5 sm:px-8">{faq.map((item) => <AccordionItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId((current) => current === item.id ? null : item.id)} />)}</ul></div></Container></section>; }
