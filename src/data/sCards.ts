import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SIMMONS: SCard = {
  id: "simmons",
  href: "/simmonoverview",
  title: "Simmons",
  body: "Visitors can take half-hour naps in rest alcoves or view model rooms cleverly designed to provide extra sleeping space.",
  pavilionSrc: "/images/simmon/simmons-icon.jpg",
  pavilionWidth: 760,
  pavilionHeight: 330,
  pavilionAlt: "Simmons",
};

export const S_CARDS: SCard[] = [SIMMONS];
