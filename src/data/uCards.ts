import type { FountainsCard } from "@/data/fountainsCards";

/**
 * U-page link cards — fountains-model layout.
 * U-specific rows: U.S. Post Office, U.S. Rubber, Unisphere …
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

const US_RUBBER: UCard = {
  id: "us-rubber",
  href: "/usruboverview",
  title: "U.S. Rubber",
  body: "Visitors soar 80 feet in the air around a giant auto tire for a spectacular view of the Fair.",
  pavilionSrc: "/images/usrub/us-rubber-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "U.S. Rubber",
};

const UNISPHERE: UCard = {
  id: "unisphere",
  href: "/unisphoverview",
  title: "Unisphere",
  body: "Symbol of the Fair, this 12-story high stainless-steel model of the earth was built and presented by United States Steel.",
  pavilionSrc: "/images/unisphere/unisphere-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Unisphere",
};

export const U_CARDS: UCard[] = [US_POST_OFFICE, US_RUBBER, UNISPHERE];
