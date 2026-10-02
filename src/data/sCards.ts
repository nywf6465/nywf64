import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SEVEN_UP: SCard = {
  id: "seven-up",
  href: "/sevupoverview",
  title: "Seven-Up",
  body: "This open-air cafe offers musical entertainment and an international sandwich buffet.",
  pavilionSrc: "/images/sevup/seven-up-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Seven-Up",
};

export const S_CARDS: SCard[] = [SEVEN_UP];
