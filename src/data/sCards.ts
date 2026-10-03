import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SIERRA_LEONE: SCard = {
  id: "sierra-leone",
  href: "/sierraoverview",
  title: "Sierra Leone",
  body: "Two troupes perform intricate dances, and acrobats entertain with feats of skill and precision.",
  pavilionSrc: "/images/sierra/sierra-leone-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Sierra Leone",
};

export const S_CARDS: SCard[] = [SIERRA_LEONE];
