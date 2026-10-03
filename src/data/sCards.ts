import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SOCONY_MOBIL: SCard = {
  id: "socony-mobil",
  href: "/socmobiloverview",
  title: "Socony Mobil",
  body: "Visitors take part in a simulated cross-country driving game that tests their skills at the wheel.",
  pavilionSrc: "/images/socmobil/socony-mobil-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Socony Mobil",
};

export const S_CARDS: SCard[] = [SOCONY_MOBIL];
