import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion (empty until cards arrive).
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "worlds-fair-marina",
    href: "/wfmaroverview",
    title: "World's Fair Marina",
    body: "Fairgoers can watch yachtsmen and small-boat buffs at work, and tour a Coast Guard exhibit.",
    pavilionSrc: "/images/wfmar/worlds-fair-marina-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "World's Fair Marina",
  },
];
