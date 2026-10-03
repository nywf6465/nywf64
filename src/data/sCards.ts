import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SWITZERLAND: SCard = {
  id: "switzerland",
  href: "/switzoverview",
  title: "Switzerland",
  body: "In a cluster of Alpine chalets, Swiss industries display tourist attractions, watches, chocolates and cheese.",
  pavilionSrc: "/images/switz/switzerland-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Switzerland",
};

export const S_CARDS: SCard[] = [SWITZERLAND];
