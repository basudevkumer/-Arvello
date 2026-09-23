"use client";

import { FiChevronDown } from "react-icons/fi";

export default function AccordionItem({ item, isOpen, onToggle }) {
  const answerId = `faq-answer-${item.id}`;
  return (
    <li className="border-b border-border last:border-b-0">
      <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={onToggle} className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-label-lg text-text-primary transition-theme hover:text-primary">
        <span>{item.question}</span>
        <FiChevronDown size={20} aria-hidden="true" className={`shrink-0 text-accent transition-transform duration-250 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div id={answerId} hidden={!isOpen}><p className="max-w-3xl pb-5 pr-8 text-body-md text-text-secondary">{item.answer}</p></div>
    </li>
  );
}
