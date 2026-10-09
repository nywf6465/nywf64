import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Cenamer menu — nav-menu topics for all routes beginning with `cenamer`.
 * Labels match the cenamer-menu-topics mockup.
 * Non-Overview routes: `cenamer01`…`cenamer06`.
 */
export const CENAMER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/cenamer01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/cenamer02",
  },
  {
    label: "Photograph Album",
    href: "/cenamer03",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/cenamer04",
  },
  {
    label: "Brochure: Fiesta Land",
    href: "/cenamer05",
  },
  {
    label: "Brochure: Art from Central America and Panama",
    href: "/cenamer06",
  },
];
