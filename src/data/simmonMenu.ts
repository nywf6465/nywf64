import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Simmons menu — topics for `simmon*` / `summon*` routes.
 * Labels match the simmon-menu-topics mockup; Overview at top.
 * Non-Overview routes: `summon01`…`summon10` (per route naming request).
 */
export const SIMMON_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/simmonoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/summon01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/summon02",
  },
  {
    label: "Postcards",
    href: "/summon03",
  },
  {
    label: "Gallery of Photographs",
    href: "/summon04",
  },
  {
    label: "Invitation to Visit",
    href: "/summon05",
  },
  {
    label: "Press Releases & Press",
    href: "/summon06",
  },
  {
    label: "Brochure",
    href: "/summon07",
  },
  {
    label: "Johnny Carson's Review",
    href: "/summon08",
  },
  {
    label: "The Simmons Company",
    href: "/summon09",
  },
  {
    label: "Epilogue",
    href: "/summon10",
  },
];
