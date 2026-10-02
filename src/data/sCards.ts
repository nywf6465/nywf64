import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SCHAEFER: SCard = {
  id: "schaefer",
  href: "/schcenoverview",
  title: "Schaefer",
  body: "A restaurant, bar and beer garden offer food and drink in a sporting atmosphere; a model of an old brewery is on view.",
  pavilionSrc: "/images/schcen/schaefer-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Schaefer",
};

export const S_CARDS: SCard[] = [SCHAEFER];
