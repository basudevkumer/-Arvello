import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { CareProcess, CustomerCareHero, CustomerCareLinks } from "@/sections/customer-care";
import Container from "@/components/layout/Container";

export const metadata = { title: "Shipping Policy | Arvello", description: "Learn how Arvello furniture delivery works and where to find order support." };

const topics = ["Delivery Areas", "Delivery Timeline", "Shipping Charges", "Furniture Delivery", "Order Processing", "Delivery Day", "Assembly / Installation", "Damaged Delivery", "Tracking"];

export default function ShippingPolicyPage() {
  return <><CustomerCareHero title="Shipping & Delivery" description="Everything you need to know about receiving your Arvello order." /><CareProcess eyebrow="Delivery journey" title="From order placed to delivered" steps={["Order Placed", "Order Confirmed", "Prepared", "Shipped"].map((title) => ({ title, description: "This delivery stage will be updated with operational details." }))} /><section className="py-12 lg:py-16"><Container><div className="mx-auto max-w-4xl"><div className="mb-8"><p className="text-overline text-accent">Delivery information</p><h2 className="mt-2 text-h3">Plan for your delivery</h2><p className="mt-3 text-body-md text-text-secondary">Delivery timelines vary by product and availability. Our team confirms the delivery window for your order.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{topics.map((topic) => <article key={topic} className="card p-5"><h3 className="text-label-lg">{topic}</h3><p className="mt-2 text-body-sm text-text-secondary">Details will be confirmed for your order.</p></article>)}</div><div className="mt-8 grid gap-3 sm:grid-cols-2"><Link href="/track-order" className="btn btn-primary">Track Your Order <FiArrowRight className="ml-2" aria-hidden="true" /></Link><Link href="/support" className="btn btn-secondary">Contact Support <FiArrowRight className="ml-2" aria-hidden="true" /></Link></div></div></Container></section><CustomerCareLinks title="Looking for something else?" /></>;
}
