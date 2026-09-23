"use client";

import { useState } from "react";
import { FiCheckCircle, FiMapPin } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const INITIAL_VALUES = { name: "", email: "", phone: "", subject: "", message: "" };
const SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "order-support", label: "Order Support" },
  { value: "wholesale", label: "Wholesale / Bulk" },
  { value: "other", label: "Other" },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.subject) errors.subject = "Please choose a subject.";
  if (!values.message.trim()) errors.message = "Please tell us how we can help.";
  return errors;
}

export default function ContactFormAndMap() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const updateValue = (event) => { const { name, value } = event.target; setValues((current) => ({ ...current, [name]: value })); if (errors[name]) setErrors((current) => ({ ...current, [name]: "" })); };
  const handleSubmit = (event) => { event.preventDefault(); const nextErrors = validate(values); setErrors(nextErrors); if (Object.keys(nextErrors).length) return; setStatus("submitting"); new Promise((resolve) => window.setTimeout(resolve, 700)).then(() => setStatus("success")).catch(() => setStatus("error")); };

  return <section className="pb-16 lg:pb-20"><Container><div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16"><div><p className="text-overline text-accent">Send a message</p><h2 className="mt-3 text-h2">How can we help?</h2><p className="mt-4 max-w-xl text-body-md text-text-secondary">Tell us a little about what you need and a member of our team will get back to you within one business day.</p>{status === "success" ? <div className="mt-8 rounded-xl border border-primary bg-primary-light p-6" role="status"><FiCheckCircle size={28} className="text-primary" aria-hidden="true" /><h3 className="mt-4 text-h5">Message received</h3><p className="mt-2 text-body-md text-text-secondary">Thank you for reaching out. We will be in touch shortly.</p><button type="button" onClick={() => { setValues(INITIAL_VALUES); setStatus("idle"); }} className="mt-5 text-label-md text-primary underline underline-offset-4">Send another message</button></div> : <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5" aria-busy={status === "submitting"}><div className="grid gap-5 sm:grid-cols-2"><Input id="contact-name" name="name" label="Name" placeholder="Your name" value={values.name} onChange={updateValue} error={errors.name} required className="rounded-xl" /><Input id="contact-email" name="email" type="email" label="Email" placeholder="you@example.com" value={values.email} onChange={updateValue} error={errors.email} required className="rounded-xl" /></div><div className="grid gap-5 sm:grid-cols-2"><Input id="contact-phone" name="phone" type="tel" label="Phone" placeholder="Optional" value={values.phone} onChange={updateValue} className="rounded-xl" /><Select id="contact-subject" name="subject" label="Subject" placeholder="Choose a subject" options={SUBJECTS} value={values.subject} onChange={updateValue} error={errors.subject} required className="rounded-xl" /></div><div className="grid gap-2"><label htmlFor="contact-message" className="text-label-md text-text-primary">Message<span className="ml-1 text-error" aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows={6} placeholder="How can we help?" value={values.message} onChange={updateValue} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} className={`w-full resize-y rounded-xl border bg-surface px-4 py-3 text-14 text-text-primary transition-theme placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15 ${errors.message ? "border-error" : "border-border-strong"}`} />{errors.message ? <p id="contact-message-error" className="text-body-sm text-error">{errors.message}</p> : null}</div><div><Button type="submit" size="lg" loading={status === "submitting"} disabled={status === "submitting"}>Send Message</Button></div></form>}</div><div><div className="overflow-hidden rounded-xl border border-border bg-background-muted"><iframe title="Arvello studio location map" src="https://www.openstreetmap.org/export/embed.html?bbox=90.373%2C23.735%2C90.405%2C23.755&layer=mapnik&marker=23.745%2C90.389" className="h-[320px] w-full border-0 sm:h-[380px]" loading="lazy" /></div><div className="card mt-4 flex items-start gap-4 p-5"><FiMapPin className="mt-1 shrink-0 text-accent" size={20} aria-hidden="true" /><div><h3 className="text-label-lg">Visit our studio</h3><p className="mt-1 text-body-sm text-text-secondary">House 12, Road 8, Dhanmondi, Dhaka</p><p className="mt-2 text-caption text-text-muted">Sat–Thu · 9:00–18:00 · Friday closed</p></div></div></div></div></Container></section>;
}
