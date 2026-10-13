import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/** Official Preview Book topics — cover + pages 1–16. */
export const PREVIEW_MENU_TOPICS: AttractionTopic[] = [
  { href: "/preview", label: "Cover" },
  ...Array.from({ length: 16 }, (_, i) => {
    const n = i + 1;
    const slug = String(n).padStart(2, "0");
    return { href: `/preview${slug}`, label: `Page ${n}` };
  }),
];
