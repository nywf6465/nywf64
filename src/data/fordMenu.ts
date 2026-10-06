import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Ford menu — nav-menu topic list for all routes beginning with `ford`.
 * Labels match the ford-menu-topics mockup (Overview first).
 * Non-Overview routes: `ford01`…`ford21`.
 */
export const FORD_MENU_TOPICS: AttractionTopic[] = [
  { label: "Overview", href: "/fordoverview" },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/ford01",
  },
  { label: "World's Fair Information Manual", href: "/ford02" },
  { label: "Postcards", href: "/ford03" },
  { label: "Advertising", href: "/ford04" },
  { label: "Photograph Album", href: "/ford05" },
  { label: "Pavilion Plans Announced", href: "/ford06" },
  { label: "The Souvenir Booklet", href: "/ford07" },
  {
    label: "Brochure: Ride Walt Disney's Magic Skyway",
    href: "/ford08",
  },
  { label: "Brochure: Aurora", href: "/ford09" },
  {
    label: "The Magic Skyway - Transcript of the 1964 Show",
    href: "/ford10",
  },
  {
    label: "The Magic Skyway - Transcript of the 1965 Show",
    href: "/ford11",
  },
  { label: "Article: A Fair for the World", href: "/ford12" },
  {
    label: "Article: Preview of Walt Disney's World's Fair Shows",
    href: "/ford13",
  },
  {
    label: "Article: Preview of Ford's Pavilion at the New York World's Fair",
    href: "/ford14",
  },
  { label: "Article: Up and Running", href: "/ford15" },
  { label: "Article: Ford Wonder Rotunda", href: "/ford16" },
  { label: "Article: The Show's the Thing", href: "/ford17" },
  { label: "Article: Hit Show for '65", href: "/ford18" },
  {
    label: "Article: Lighting at the Fair - Ford Pavilion",
    href: "/ford19",
  },
  { label: "A Favorite Souvenir", href: "/ford20" },
  { label: "Remembering the Magic Skyway", href: "/ford21" },
];
