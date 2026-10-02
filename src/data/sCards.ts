import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SANTA_MARIA: SCard = {
  id: "santa-maria",
  href: "/sanmaroverview",
  title: "Santa Maria",
  body: "A full-sized replica of Columbus' flagship is moored at the end of a 15th Century Spanish wharf.",
  pavilionSrc: "/images/sanmar/santa-maria-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Santa Maria",
};

export const S_CARDS: SCard[] = [SANTA_MARIA];
