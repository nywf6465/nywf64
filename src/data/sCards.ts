import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SPACE_PARK: SCard = {
  id: "space-park",
  href: "/spacparkoverview",
  title: "Space Park",
  body: "The dramatic vehicles that are carrying the United States into the Space Age are on display.",
  pavilionSrc: "/images/spacpark/space-park-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Space Park",
};

export const S_CARDS: SCard[] = [SPACE_PARK];
