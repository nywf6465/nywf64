import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SUDAN: SCard = {
  id: "sudan",
  href: "/sudanoverview",
  title: "Sudan",
  body: "Displays include 4,000-year-old relics of Nubian civilization and a newly discovered fresco of the Madonna.",
  pavilionSrc: "/images/sudan/sudan-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Sudan",
};

export const S_CARDS: SCard[] = [SUDAN];
