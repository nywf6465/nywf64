import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

/** Same ICON/TEXT/title/href as Top Ten Spain row. */
const SPAIN: SCard = {
  id: "spain",
  href: "/spainoverview",
  title: "Spain & The Fair's Most Beautiful Pavilion",
  body: "In a striking modern pavilion, the atmosphere of old Spain forms a setting for great art, fine dining and entertainment.",
  pavilionSrc: "/images/top-ten/spain-pavilion.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Spain",
};

export const S_CARDS: SCard[] = [SPAIN];
