import { CustomerCareHero, CustomerCareLinks, SupportForm } from "@/sections/customer-care";
import Container from "@/components/layout/Container";

export const metadata = { title: "Support | Arvello", description: "Get help with your Arvello order, delivery, returns, products, or general questions." };

const options = [["Order Support", "Track or manage an existing order."], ["Delivery Support", "Questions about shipping and delivery."], ["Returns & Refunds", "Need help understanding a return?"], ["Product Support", "Questions about furniture or products."], ["General Support", "Something else? We are here to help."]];

export default function SupportPage() {
  return <><CustomerCareHero title="How Can We Help?" description="We are here to help with your order, delivery, returns, products, or anything else you need." /><section className="pb-12 lg:pb-16"><Container><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{options.map(([title, description]) => <article key={title} className="card p-5"><h2 className="text-label-lg">{title}</h2><p className="mt-2 text-body-sm text-text-secondary">{description}</p></article>)}</div></Container></section><SupportForm /><CustomerCareLinks title="Find a faster answer" /></>;
}
