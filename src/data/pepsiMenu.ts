import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Pepsi menu — nav-menu topic list for all routes beginning with `pepsi`.
 * Labels match the pepsi-menu-topics mockup (italics via `parts` where needed).
 */
export const PEPSI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/pepsiguidebook",
  },
  {
    label: "World's Fair Information Manual",
    href: "/pepsimanual",
  },
  {
    label: "Postcards",
    href: "/pepsipostcards",
  },
  {
    label: "Advertising",
    href: "/pepsiadvertising",
  },
  {
    label: "Photograph Album",
    href: "/pepsiphotographalbumi",
  },
  {
    label: "Photograph Album",
    href: "/pepsiphotographalbumii",
  },
  {
    label: "A Little Boat Ride",
    href: "/pepsilittleboatride",
    parts: [{ text: "A Little Boat Ride", italic: true }],
  },
  {
    label: "Behind the Scenes",
    href: "/pepsibehindthescenes",
  },
  {
    label: "Tower of the Four Winds",
    href: "/pepsitowerfourwinds",
  },
  {
    label: "It's a Small World After All",
    href: "/pepsiitsasmallworld",
    parts: [{ text: "It's a Small World After All", italic: true }],
  },
  {
    label: "Pavilion Guides",
    href: "/pepsipavilionguides",
  },
  {
    label: "Last Survivor",
    href: "/pepsilastsurvivor",
    parts: [{ text: "Last Survivor", italic: true }],
  },
];
