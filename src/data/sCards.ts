import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SWISS_SKY_RIDE: SCard = {
  id: "swiss-sky-ride",
  href: "/swiskyoverview",
  title: "Swiss Sky Ride",
  body: "Passengers ride high across the Fairgrounds in cable cars for a spectacular view of the Fair.",
  pavilionSrc: "/images/swisky/swiss-sky-ride-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Swiss Sky Ride",
};

export const S_CARDS: SCard[] = [SWISS_SKY_RIDE];
