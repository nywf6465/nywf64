import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * West Virginia menu — nav-menu topics for all routes beginning with `wesvir`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `wesvir01`…`wesvir08`.
 */
export const WESVIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/wesviroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/wesvir01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/wesvir02",
  },
  {
    label: "Photograph Album",
    href: "/wesvir03",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/wesvir04",
  },
  {
    label: "Brochure: An Invitation to the West Virginia Pavilion",
    href: "/wesvir05",
  },
  {
    label: "Brochure: Come to the Fair",
    href: "/wesvir06",
  },
  {
    label: "Window on the Universe",
    href: "/wesvir07",
    parts: [{ text: "Window on the Universe", italic: true }],
  },
  {
    label: "Epilogue",
    href: "/wesvir08",
  },
];
