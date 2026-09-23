import {
  ContactBanner,
  ContactFormAndMap,
  ContactInfoStrip,
  FAQSection,
  SocialConnect,
} from "@/sections/contact";

export const metadata = {
  title: "Contact Us | Arvello",
  description: "Get in touch with the Arvello team about furniture, orders, and projects.",
};

export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <ContactInfoStrip />
      <ContactFormAndMap />
      <FAQSection />
      <SocialConnect />
    </>
  );
}
