import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SCOTT_PAPER: SCard = {
  id: "scott-paper",
  href: "/scopapoverview",
  title: "Scott Paper",
  body: 'A tour through an "Enchanted Forest" tells the story of paper from woodland to home.',
  pavilionSrc: "/images/scopap/scott-paper-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Scott Paper",
};

export const S_CARDS: SCard[] = [SCOTT_PAPER];
