import { CareFaq, CustomerCareHero, CustomerCareLinks } from "@/sections/customer-care";
import Container from "@/components/layout/Container";
import Link from "next/link";

export const metadata = { title: "FAQ | Arvello", description: "Find clear answers to common Arvello furniture, delivery, returns, and order questions." };

export default function FAQPage() {
  return <><CustomerCareHero title="Frequently Asked Questions" description="Quick answers to help you shop, receive, and care for your Arvello furniture." /><CareFaq /><section className="pb-12 lg:pb-16"><Container><div className="mx-auto max-w-3xl rounded-2xl bg-background-soft p-6 text-center sm:p-8"><h2 className="text-h4">Didn&apos;t find your answer?</h2><p className="mt-2 text-body-md text-text-secondary">Our support team can help with questions about your order or furniture.</p><Link href="/support" className="btn btn-primary mt-6">Contact Support</Link></div></Container></section><CustomerCareLinks title="Continue to customer care" /></>;
}
