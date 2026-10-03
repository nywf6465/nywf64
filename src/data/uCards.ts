import type { FountainsCard } from "@/data/fountainsCards";

/**
 * U-page link cards — fountains-model layout.
 * U-specific rows (empty until cards arrive).
 */
export type UCard = FountainsCard;

/** Same ICON/TEXT/title/href as Top Ten United States row. */
const UNITED_STATES: UCard = {
  id: "united-states",
  href: "/unistaoverview",
  title: "United States & The Challenge to Greatness",
  body: 'The nation\'s past and its progress toward President Johnson\'s "Great Society" are outlined in many dramatic exhibits and a spectacular 15-minute film-ride.',
  pavilionSrc: "/images/top-ten/united-states-pavilion.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "United States",
};

export const U_CARDS: UCard[] = [UNITED_STATES];
