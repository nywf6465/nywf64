import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Sersci menu — nav-menu topics for all routes beginning with `sersci`.
 * Labels match the sersci-menu-topics mockup.
 * Non-Overview routes: `sersci01`…`sersci08`.
 */
export const SERSCI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/sersci01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/sersci02",
  },
  {
    label: "Postcards",
    href: "/sersci03",
  },
  {
    label: "Photograph Album",
    href: "/sersci04",
  },
  {
    label: "Pavilion Floorplan",
    href: "/sersci05",
  },
  {
    label: "The World's Fair History of Sermons from Science",
    href: "/sersci06",
    parts: [
      {
        text: "The World's Fair History of Sermons from Science",
        italic: true,
      },
    ],
  },
  {
    label: "Fund Raising Brochure",
    href: "/sersci07",
  },
  {
    label: "Magazine: Power for Living",
    href: "/sersci08",
    parts: [
      { text: "Magazine: " },
      { text: "Power for Living", italic: true },
    ],
  },
];
