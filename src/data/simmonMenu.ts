import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Simmons menu — topics for `simmon*` / `summon*` routes.
 * Labels match the simmon-menu-topics mockup; Overview at top.
 * Non-Overview routes: `simmon01`…`simmon10`.
 */
export const SIMMON_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/simmonoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/simmon01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/simmon02",
  },
  {
    label: "Postcards",
    href: "/simmon03",
  },
  {
    label: "Photograph Album",
    href: "/summon04",
  },
  {
    label: "Invitation to Visit",
    href: "/simmon05",
  },
  {
    label: "Press Releases & Press",
    href: "/simmon06",
  },
  {
    label: "Brochure",
    href: "/simmon07",
  },
  {
    label: "Johnny Carson's Review",
    href: "/simmon08",
  },
  {
    label: "The Simmons Company",
    href: "/simmon09",
  },
  {
    label: "Epilogue",
    href: "/simmon10",
  },
];
