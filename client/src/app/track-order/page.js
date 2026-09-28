import { CareProcess, CustomerCareHero, CustomerCareLinks, TrackOrderPanel } from "@/sections/customer-care";

export const metadata = { title: "Track Order | Arvello", description: "Track your Arvello furniture order and find helpful delivery support." };

export default function TrackOrderPage() {
  return <><CustomerCareHero title="Track Your Order" description="Stay updated on your Arvello order from confirmation through delivery." /><TrackOrderPanel /><CareProcess eyebrow="Your order journey" title="A clear path from order to home" steps={["Order Confirmed", "Processing", "Packed", "Shipped"].map((title) => ({ title, description: "This tracking stage will update when order tracking is connected." }))} /><CustomerCareLinks title="Need help with your order?" /></>;
}
