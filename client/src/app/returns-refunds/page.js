import { CareProcess, CustomerCareHero, CustomerCareLinks } from "@/sections/customer-care";
import Container from "@/components/layout/Container";
import Link from "next/link";

export const metadata = { title: "Returns & Refunds | Arvello", description: "Understand the Arvello returns and refunds process." };

const topics = ["Return Eligibility", "Return Window", "Non-returnable Items", "Damaged or Defective Items", "How to Request a Return", "Refund Process", "Refund Timeline", "Exchange Information"];

export default function ReturnsRefundsPage() {
  return <><CustomerCareHero title="Returns & Refunds" description="Understand the steps and information you need if a piece is not right for your space." /><CareProcess eyebrow="The return journey" title="A simple process to guide you" steps={["Request Return", "Product Inspection", "Return Approved", "Refund Processed"].map((title) => ({ title, description: "Policy details will be confirmed when the returns workflow is connected." }))} /><section className="py-12 lg:py-16"><Container><div className="mx-auto max-w-4xl"><div className="mb-8"><p className="text-overline text-accent">Policy guide</p><h2 className="mt-2 text-h3">Returns information</h2><p className="mt-3 text-body-md text-text-secondary">We are preparing the detailed policy content for this page. The topics below will make the final policy easy to scan without hiding important conditions.</p></div><div className="grid gap-4 sm:grid-cols-2">{topics.map((topic) => <article key={topic} className="card p-5"><h3 className="text-label-lg">{topic}</h3><p className="mt-2 text-body-sm text-text-secondary">Policy details will be connected here.</p></article>)}</div><div className="mt-8 rounded-xl border border-border bg-background-soft p-5"><p className="text-label-md">Need help with a return?</p><Link href="/support" className="mt-2 inline-flex text-label-md text-primary hover:text-primary-hover">Contact Support <span className="ml-2" aria-hidden="true">→</span></Link></div></div></Container></section><CustomerCareLinks title="Find another customer-care answer" /></>;
}
