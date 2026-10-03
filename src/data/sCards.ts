import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SINGER_BOWL: SCard = {
  id: "singer-bowl",
  href: "/singeroverview",
  title: "Singer Bowl",
  body: "Music festivals, sports events and variety shows are held in this open-air stadium seating 15,000.",
  pavilionSrc: "/images/singer/singer-bowl-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Singer Bowl",
};

export const S_CARDS: SCard[] = [SINGER_BOWL];
