import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SINCLAIR: SCard = {
  id: "sinclair",
  href: "/sinclairoverview",
  title: "Sinclair",
  body: "Life as it existed 165 million years ago is re-created in a display of life-sized dinosaurs.",
  pavilionSrc: "/images/sinclair/sinclair-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Sinclair",
};

export const S_CARDS: SCard[] = [SINCLAIR];
