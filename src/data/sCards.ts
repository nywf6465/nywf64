import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SHEA_STADIUM: SCard = {
  id: "shea-stadium",
  href: "/sheastaoverview",
  title: "Shea Stadium",
  body: "This home of two teams — the New York Mets (baseball) and Jets (football) — is one of the most modern stadiums in the world.",
  pavilionSrc: "/images/sheasta/shea-stadium-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Shea Stadium",
};

export const S_CARDS: SCard[] = [SHEA_STADIUM];
