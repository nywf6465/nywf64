import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion.
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "walters-international-wax-museum",
    href: "/walwaxoverview",
    title: "Walter's International Wax Museum",
    body: "Figures in this collection of life-sized images range from Lady Godiva to the Beatles.",
    pavilionSrc: "/images/walwax/walters-international-wax-museum-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 330,
    pavilionAlt: "Walter's International Wax Museum",
    },
  {
    id: "west-virginia",
    href: "/wesviroverview",
    title: "West Virginia",
    body: "Highlights include a trip through a coal mine, an exhibition of glassblowing and a chance to win a mountaintop vacation home.",
    pavilionSrc: "/images/wesvir/west-virginia-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "West Virginia",
    },
  {
    id: "westinghouse",
    href: "/weshouoverview",
    title: "Westinghouse",
    body: "The heart of the exhibit is a torpedo-shaped Time Capsule, suspended over a reflecting pool.",
    pavilionSrc: "/images/weshou/westinghouse-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Westinghouse",
    },
  {
    id: "wisconsin",
    href: "/wisconsinoverview",
    title: "Wisconsin",
    body: "A big, stylized tepee rises above state exhibits, including the world's largest cheese.",
    pavilionSrc: "/images/wisconsin/wisconsin-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Wisconsin",
    },
  {
    id: "world-of-food",
    href: "/worfoooverview",
    title: "World of Food",
    body: "The World of Food pavilion was to have housed exhibits relating to nutrition and the food industry. The pavillion was started, steel framework was erected, but was never completed.",
    pavilionSrc: "/images/worfoo/world-of-food-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "World of Food",
    },
  {
    id: "worlds-fair-marina",
    href: "/wfmaroverview",
    title: "World's Fair Marina",
    body: "Fairgoers can watch yachtsmen and small-boat buffs at work, and tour a Coast Guard exhibit.",
    pavilionSrc: "/images/wfmar/worlds-fair-marina-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "World's Fair Marina",
    },
  {
    id: "worlds-fair-pavilion",
    href: "/wfpavoverview",
    title: "World's Fair Pavilion",
    body: "This is the Fair's major indoor assembly hall. The light latticework structure is a geodesic dome composed of 1,250 interconnected pieces of aluminum tubing.",
    pavilionSrc: "/images/wfpav/worlds-fair-pavilion-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "World's Fair Pavilion",
    }
];
