import {
  AboutBanner,
  AboutCTA,
  MeetTheTeam,
  MissionValues,
  OurProcess,
  OurStory,
  Timeline,
} from "@/sections/aboutus";

export const metadata = {
  title: "About Arvello | Furniture Designed for Better Living",
  description: "Discover the story, values, process, and people behind Arvello furniture.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutBanner />
      <OurStory />
      <MissionValues />
      <Timeline />
      <OurProcess />
      <MeetTheTeam />
      <AboutCTA />
    </>
  );
}
