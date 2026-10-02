import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SERMONS_FROM_SCIENCE: SCard = {
  id: "sermons-from-science",
  href: "/serscioverview",
  title: "Sermons from Science",
  body: "Demonstrations of scientific marvels and color films on nature illustrate the compatibility of faith with modern-day science.",
  pavilionSrc: "/images/sersci/sermons-from-science-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Sermons from Science",
};

export const S_CARDS: SCard[] = [SERMONS_FROM_SCIENCE];
