import {
  AboutBanner,
  AboutCTA,
  MeetTheTeam,
  MissionValues,
  OurProcess,
  OurStory,
  StatsCounter,
  Testimonials,
  Timeline,
} from "@/sections/aboutus";

export const metadata = {
  title: "About Us | Arvello",
  description: "Meet the people, process, and purpose behind Arvello furniture.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutBanner />
      <OurStory />
      <MissionValues />
      <StatsCounter />
      <Timeline />
      <OurProcess />
      <MeetTheTeam />
      <Testimonials />
      <AboutCTA />
    </>
  );
}
