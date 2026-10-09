import type { FountainsCard } from "@/data/fountainsCards";

/**
 * K-page link cards — fountains-model layout.
 * K-specific rows: Kiddyland, Republic of Korea, …
 */
export type KCard = FountainsCard;

const KIDLAN: KCard = {
  id: "kidlan",
  href: "/kidlan01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Kiddyland",
  // TEXT (to the right of ICON) — exact from kidlan-card-text-source.jpg
  body: "As the name makes clear, this pavilion offers all kind of fun for the youngsters.",
  pavilionSrc: "/images/kidlan/kidlan-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Kiddyland",
};


const KOREA: KCard = {
  id: "korea",
  href: "/korea01",
  // DESCRIPTION (italic under ICON) — exact registered icon name
  title: "Republic of Korea",
  // TEXT (to the right of ICON) — exact from korea-card-text-source.jpg
  body: "A traditional teahouse and a modern pavilion are settings for exhibits that link the Korea of yesterday and today.",
  pavilionSrc: "/images/korea/korea-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Republic of Korea",
};

export const K_CARDS: KCard[] = [
  KIDLAN,
  KOREA,
];
