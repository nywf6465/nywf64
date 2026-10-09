import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * missouri menu — nav-menu topics for all routes beginning with `missouri`.
 * Labels match `media/missouri-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `missouri01`…`missouri05`.
 */
export const MISSOURI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/missouri01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/missouri02",
  },
  {
    label: "Photograph Album",
    href: "/missouri03",
  },
  {
    label: "Rendezvous in Space",
    href: "/missouri04",
  },
  {
    label: "Magazine: Missouri Business 3/64",
    href: "/missouri05",
  },
];
