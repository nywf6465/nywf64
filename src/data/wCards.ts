import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion (empty until cards arrive).
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "westinghouse",
    href: "/weshouoverview",
    title: "Westinghouse",
    body: "The heart of the exhibit is a torpedo-shaped Time Capsule, suspended over a reflecting pool.",
    pavilionSrc: "/images/weshou/westinghouse-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Westinghouse",
  },
];
