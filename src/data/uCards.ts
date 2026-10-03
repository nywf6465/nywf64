import type { FountainsCard } from "@/data/fountainsCards";

/**
 * U-page link cards — fountains-model layout.
 * U-specific rows: U.S. Post Office …
 */
export type UCard = FountainsCard;

const US_POST_OFFICE: UCard = {
  id: "us-post-office",
  href: "/uspooverview",
  title: "U.S. Post Office",
  body: "Visitors climb a ramp to see one of America's most mechanized Post Offices in full operation.",
  pavilionSrc: "/images/uspo/us-post-office-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "U.S. Post Office",
};

export const U_CARDS: UCard[] = [US_POST_OFFICE];
