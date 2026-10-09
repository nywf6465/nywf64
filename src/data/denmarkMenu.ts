import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Denmark menu — nav-menu topics for all routes beginning with `denmark`.
 * Labels match the denmarkoverview menu-topics mockup.
 * Non-Overview routes: `denmark01`…`denmark05`.
 */
export const DENMARK_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/denmark01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/denmark02",
  },
  {
    label: "Photograph Album",
    href: "/denmark03",
  },
  {
    label: "Pamphlet: Flag Raising",
    href: "/denmark04",
  },
  {
    label: "Pamphlet: Pavilion Guide",
    href: "/denmark05",
  },
];
