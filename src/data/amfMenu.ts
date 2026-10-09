import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * amf menu — nav-menu topics for all routes beginning with `amf`.
 * Labels match `media/amf-menu-topics-source.jpg`.
 * Non-Overview routes: `amf01`…`amf11`.
 */
export const AMF_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/amf01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/amf02",
  },
  {
    label: "Postcards",
    href: "/amf03",
  },
  {
    label: "Photograph Album",
    href: "/amf04",
  },
  {
    label: "Press Releases",
    href: "/amf05",
  },
  {
    label: "Booklet: MONORAIL Tomorrow's Transportation Today",
    href: "/amf06",
  },
  {
    label: "Booklet: Mass Transit: AMF Monorail",
    href: "/amf07",
  },
  {
    label: "Brochure: Ride the Monorail",
    href: "/amf08",
  },
  {
    label: "The Monorail Song",
    href: "/amf09",
  },
  {
    label: "AMF Jr. Monorail Toy",
    href: "/amf10",
  },
  {
    label: "The Fate of Car #4",
    href: "/amf11",
  },
];
