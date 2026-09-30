import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Betliv menu — nav-menu topics for all routes beginning with `betliv`.
 * Labels match the betliv-menu-topics mockup; Overview at top.
 * Non-Overview routes: `betliv01`…`betliv21`.
 * Spellings are exact (Cafe', Dorthy, SPECTRACKULAR).
 */
export const BETLIV_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/betlivoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/betliv01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/betliv02",
  },
  {
    label: "Postcards",
    href: "/betliv03",
  },
  {
    label: "Photograph Album",
    href: "/betliv04",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/betliv05",
  },
  {
    label: "Brochure: Plan for the Development of Better Living Building",
    href: "/betliv06",
  },
  {
    label: "Deplorable Conditions",
    href: "/betliv07",
  },
  {
    label: "The Story of the Better Living Center",
    href: "/betliv08",
    parts: [
      {
        text: "The Story of the Better Living Center",
        italic: true,
      },
    ],
  },
  {
    label: "Lists of Sub-Exhibitors",
    href: "/betliv09",
  },
  {
    label: "Brochure: Visitor's Guide",
    href: "/betliv10",
  },
  {
    label: "Lifesavers Tower / Hilton Cafe' International",
    href: "/betliv11",
  },
  {
    label: "Four Centuries of American Masterpieces",
    href: "/betliv12",
  },
  {
    label: 'Borden\'s "All About Elsie"',
    href: "/betliv13",
  },
  {
    label: "Borden's Sideshows",
    href: "/betliv14",
  },
  {
    label: "Hershey Chocolate / Morton Salt",
    href: "/betliv15",
  },
  {
    label: "The Crystal Palace of Fashion",
    href: "/betliv16",
  },
  {
    label: "SPECTRACKULAR",
    href: "/betliv17",
  },
  {
    label:
      "Norelco / The General / Children's World / Dorthy Draper's Dream Home",
    href: "/betliv18",
  },
  {
    label:
      "Humane Society of the United States / Beech Nut Theatre / Culligan",
    href: "/betliv19",
  },
  {
    label: "Purex Women's Hospitality Center",
    href: "/betliv20",
  },
  {
    label: "Epilogue",
    href: "/betliv21",
  },
];
