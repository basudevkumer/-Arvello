const image = (id, width = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

/**
 * Arvello team members.
 *
 * `socialLinks[].icon` is a stable key resolved to a react-icons component
 * inside `TeamMemberCard` — data stays presentational-free.
 */
export const team = [
  {
    id: "team-1",
    name: "Imran Chowdhury",
    role: "Founder & Creative Director",
    photo: image("photo-1507003211169-0a1dd7228f2d"),
    photoAlt: "Imran Chowdhury, founder of Arvello, smiling in his workshop",
    shortBio:
      "Started Arvello from a single workbench in 2015. Still sketches every collection by hand.",
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    ],
  },
  {
    id: "team-2",
    name: "Farhana Rahman",
    role: "Head of Design",
    photo: image("photo-1494790108377-be9c29b29330"),
    photoAlt: "Farhana Rahman, head of design at Arvello",
    shortBio:
      "Trained in Copenhagen, obsessed with quiet proportions and materials that age gracefully.",
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    ],
  },
  {
    id: "team-3",
    name: "Tanvir Ahmed",
    role: "Master Craftsman",
    photo: image("photo-1500648767791-00dcc994a43e"),
    photoAlt: "Tanvir Ahmed, master craftsman at Arvello",
    shortBio:
      "Twenty-two years with timber. Teaches every new joiner how to read a grain before cutting.",
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    ],
  },
  {
    id: "team-4",
    name: "Nusrat Jahan",
    role: "Sustainability Lead",
    photo: image("photo-1438761681033-6461ffad8d80"),
    photoAlt: "Nusrat Jahan, sustainability lead at Arvello",
    shortBio:
      "Sources our certified timber and linen partners, and audits every supplier relationship.",
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    ],
  },
  {
    id: "team-5",
    name: "Rahim Hossain",
    role: "Head of Customer Experience",
    photo: image("photo-1472099645785-5658abf4ff4e"),
    photoAlt: "Rahim Hossain, head of customer experience at Arvello",
    shortBio:
      "Leads the team that answers every message - and personally reads each piece of feedback.",
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    ],
  },
  {
    id: "team-6",
    name: "Ayesha Karim",
    role: "Quality Assurance Manager",
    photo: image("photo-1544005313-94ddf0286df2"),
    photoAlt: "Ayesha Karim, quality assurance manager at Arvello",
    shortBio:
      "Runs the final inspection line. Nothing leaves the workshop without her signature.",
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    ],
  },
  {
    id: "team-7",
    name: "Sabbir Hasan",
    role: "Logistics Director",
    photo: image("photo-1506794778202-cad84cf45f1d"),
    photoAlt: "Sabbir Hasan, logistics director at Arvello",
    shortBio:
      "Built the delivery network that now reaches twenty-five cities without a single missed window.",
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
    ],
  },
  {
    id: "team-8",
    name: "Maliha Sultana",
    role: "Interior Stylist",
    photo: image("photo-1580489944761-15a19d654956"),
    photoAlt: "Maliha Sultana, interior stylist at Arvello",
    shortBio:
      "Styles every room we photograph, and writes the inspiration notes you read on the journal.",
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
    ],
  },
];
