import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SKF: SCard = {
  id: "skf",
  href: "/skfoverview",
  title: "SKF",
  body: "A mechanical man introduces a film showing man's progress in locomotion; a wide range of equipment using ball and roller bearings is displayed.",
  pavilionSrc: "/images/skf/skf-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "SKF",
};

export const S_CARDS: SCard[] = [SKF];
