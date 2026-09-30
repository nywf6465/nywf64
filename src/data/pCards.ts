import type { FountainsCard } from "@/data/fountainsCards";

/**
 * P-page link cards — fountains-model layout.
 * P-specific rows: Pakistan … Protestant Center.
 */
export type PCard = FountainsCard;

const PAKISTAN: PCard = {
  id: "pakistan",
  href: "/pakistoverview",
  title: "Pakistan",
  body: "An ancient land's history and hopes are refelcted in priceless relics and models of modern industrial projects.",
  pavilionSrc: "/images/pakist/pakist-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Pakistan",
};

export const P_CARDS: PCard[] = [PAKISTAN];
