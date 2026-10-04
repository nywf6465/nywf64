import type { FountainsCard } from "@/data/fountainsCards";

/**
 * U-page link cards — fountains-model layout.
 * U-specific rows: Underground World Home … Unisphere.
 */
export type UCard = FountainsCard;

export const U_CARDS: UCard[] = [
  {
    id: "underground-world-home",
    href: "/undrghomeoverview",
    title: "Underground World Home",
    body: "The advantages of underground living are realistically displayed in an ultramodern 10-room house built below the earth's surface.",
    pavilionSrc: "/images/undrghome/underground-world-home-icon.jpg",
    pavilionWidth: 829,
    pavilionHeight: 303,
    pavilionAlt: "Underground World Home",
  },
  {
    id: "united-arab-republic",
    href: "/uaroverview",
    title: "United Arab Republic",
    body: "Models of the Aswan Dam and the Suez Canal are among many displays that emphasize progress in this ancient land.",
    pavilionSrc: "/images/uar/united-arab-republic-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "United Arab Republic",
  },
  {
    id: "united-nations",
    href: "/unoverview",
    title: "United Nations",
    body: "The United Nations exhibit features materials from the UN Secretariat and a display of stamps from the UN Postal Administration is shown.",
    pavilionSrc: "/images/un/united-nations-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "United Nations",
  },
  {
    id: "united-states",
    href: "/unistaoverview",
    title: "United States",
    body: 'The nation\'s past and its progress toward President Johnson\'s "Great Society" are outlined in many dramatic exhibits and a spectacular 15-minute film-ride.',
    pavilionSrc: "/images/top-ten/united-states-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "United States",
  },
  {
    id: "us-post-office",
    href: "/uspooverview",
    title: "U.S. Post Office",
    body: "Visitors climb a ramp to see one of America's most mechanized Post Offices in full operation.",
    pavilionSrc: "/images/uspo/us-post-office-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "U.S. Post Office",
  },
  {
    id: "us-rubber",
    href: "/usruboverview",
    title: "U.S. Rubber",
    body: "Visitors soar 80 feet in the air around a giant auto tire for a spectacular view of the Fair.",
    pavilionSrc: "/images/usrub/us-rubber-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "U.S. Rubber",
  },
  {
    id: "unisphere",
    href: "/unisphoverview",
    title: "Unisphere",
    body: "Symbol of the Fair, this 12-story high stainless-steel model of the earth was built and presented by United States Steel.",
    pavilionSrc: "/images/unisphere/unisphere-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Unisphere",
  },
];
