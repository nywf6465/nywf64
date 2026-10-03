import type { FountainsCard } from "@/data/fountainsCards";

/**
 * V-page link cards — fountains-model layout.
 * V-specific rows: Vatican … Venezuela (empty until cards arrive).
 */
export type VCard = FountainsCard;

/** Same ICON/TEXT/title/href as Religions “Vatican” row. */
const VATICAN: VCard = {
  id: "the-vatican",
  href: "/vaticanoverview",
  title: "Vatican",
  body: "The main exhibit is the Fair's most important work of art: the 'Pieta,' Michelangelo's 466-year-old masterpiece in Carrara marble.",
  pavilionSrc: "/images/vatican/vatican-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Vatican",
};

export const V_CARDS: VCard[] = [VATICAN];
