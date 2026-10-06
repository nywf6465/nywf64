import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Genele menu — nav-menu topic list for all routes beginning with `genele`.
 * Labels match the genele-menu-topics mockup (italics via `parts` where needed).
 * Both Photograph Album rows are kept (distinct routes).
 */
export const GENELE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/geneleguidebook",
  },
  {
    label: "World's Fair Information Manual",
    href: "/genelemanual",
  },
  {
    label: "Postcards",
    href: "/genelepostcards",
  },
  {
    label: "Advertising",
    href: "/geneleadvertising",
  },
  {
    label: "Photograph Album",
    href: "/genelephotographalbum",
  },
  {
    label: "Photograph Album",
    href: "/genelephotographalbum2",
  },
  {
    label: "Construction",
    href: "/geneleconstruction",
  },
  {
    label: "The Souvenir Booklet",
    href: "/genelesouvenirbooklet",
  },
  {
    label: "Brochure: Your Tour of Progressland",
    href: "/geneletouroprogressland",
  },
  {
    label: "Brochure: Facts About General Electric's Nuclear Fusion Demonstration",
    href: "/genelenuclearfusion",
  },
  {
    label: "Ride the Carousel of Progress",
    href: "/geneleridecarousel",
  },
  {
    label: "There's a Great Big Beautiful Tomorrow",
    href: "/genelebeautifultomorrow",
    parts: [{ text: "There's a Great Big Beautiful Tomorrow", italic: true }],
  },
  {
    label: "Scrims",
    href: "/genelescrims",
  },
  {
    label: "Transcript of the Skydome Spectacular Show",
    href: "/geneleskydometranscript",
    parts: [
      { text: "Transcript of the " },
      { text: "Skydome Spectacular", italic: true },
      { text: " Show" },
    ],
  },
  {
    label: "Article: Preview of Disney's World's Fair Shows",
    href: "/geneledisneypreview",
  },
  {
    label: "Article: G.E.'s \"Progressland\"",
    href: "/genelegeprogressland",
  },
  {
    label: "Article: G.E. in Progressland",
    href: "/genelegeinprogressland",
  },
  {
    label: "Article: Lighting at the Fair - General Electric Pavilion",
    href: "/genelelighting",
  },
  {
    label: "Article: An Elegantly Domed Carousel",
    href: "/geneledomedcarousel",
  },
  {
    label: "Article: Parrot & Atoms Help GE Tell Story of Power",
    href: "/geneleparrotatoms",
  },
  {
    label: "The Progressland Model Auction",
    href: "/genelemodelauction",
  },
  {
    label: "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow",
    href: "/genelebeyondthefair",
    parts: [
      {
        text: "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow",
        italic: true,
      },
    ],
  },
];
