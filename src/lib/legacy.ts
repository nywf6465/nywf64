/**
 * Legacy nywf64.com hubs — homepage CTA / category targets.
 * Prefer sibling `.html` bodies; `.shtml` was chrome+iframe only.
 */
export type LegacyEntry = {
  id: string;
  title: string;
  href: string;
  legacyStem: string;
  imageRoot: string;
};

/** Seven category ovals — homepage body artwork → landing pages */
export const categoryHubs: LegacyEntry[] = [
  {
    id: "attractions",
    title: "Pavilions, Attractions & Exhibits",
    href: "/attractions",
    legacyStem: "attractions",
    imageRoot: "Image/pavilions/",
  },
  {
    id: "maps",
    title: "Interactive Maps & Photos",
    href: "/interactivemaps",
    legacyStem: "interactivemaps",
    imageRoot: "Image/maps/",
  },
  {
    id: "information",
    title: "The Information Booth",
    href: "/information",
    legacyStem: "information",
    imageRoot: "Image/information/",
  },
  {
    id: "people",
    title: "People of the Fair",
    href: "/people",
    legacyStem: "people",
    imageRoot: "Image/people/",
  },
  {
    id: "stories",
    title: "Stories and Essays",
    href: "/stories",
    legacyStem: "stories",
    imageRoot: "Image/stories/",
  },
  {
    id: "artifacts",
    title: "Artifacts & Legacies",
    href: "/artifacts",
    legacyStem: "artifacts",
    imageRoot: "Image/artifacts/",
  },
  {
    id: "park",
    title: "Flushing Meadows Park",
    href: "/flushingmeadows",
    legacyStem: "flushingmeadows",
    imageRoot: "Image/",
  },
];

/** Information Booth history spine */
export const informationBoothSpine: LegacyEntry[] = [
  {
    id: "fair-story",
    title: "Story of the Fair",
    href: "#fair-story",
    legacyStem: "fair_story01",
    imageRoot: "Image/fair_story/",
  },
  {
    id: "true-fair",
    title: "Unofficial World’s Fair",
    href: "#true-fair",
    legacyStem: "true_fair01",
    imageRoot: "Image/",
  },
  {
    id: "building",
    title: "Building the Fair",
    href: "#building",
    legacyStem: "building01",
    imageRoot: "Image/",
  },
  {
    id: "intpar",
    title: "Hunt for exhibitors",
    href: "#intpar",
    legacyStem: "intpar01",
    imageRoot: "Image/",
  },
  {
    id: "fair-era",
    title: "Era of the Fair",
    href: "#fair-era",
    legacyStem: "fair_era01",
    imageRoot: "Image/",
  },
  {
    id: "farewell",
    title: "End of the Fair",
    href: "#farewell",
    legacyStem: "farewell01",
    imageRoot: "Image/",
  },
];

export const mediaHooks = {
  interimUnisphere: "Image/unisph/unisph250.jpg",
  unisphereAlbums: [
    "Image/photolab/",
    "Image/arch/",
    "Image/wolfe/",
    "Image/mainliner/",
  ],
  exploreAerial: ["Image/big_picture/", "Image/maps/"],
  indexTiles: "Image/Index/",
} as const;

export const VISITOR_TAKEAWAY =
  "A complete retrospective on the 1964/1965 New York World’s Fair and its contributions to the cultural history of mid-20th Century America.";
