import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SWEDEN: SCard = {
  id: "sweden",
  href: "/swedenoverview",
  title: "Sweden",
  body: "In unusual exhibits, a creative country displays its many skills in technology, design and cuisine.",
  pavilionSrc: "/images/sweden/sweden-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Sweden",
};

export const S_CARDS: SCard[] = [SWEDEN];
