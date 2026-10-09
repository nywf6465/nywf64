import { type FountainsCard } from "@/data/fountainsCards";

/**
 * Restaurants, Bars & Eateries link cards — fountains-model layout.
 * Cards match the same attractions on the letter pages (`/A`, `/B`, …).
 */
export const RESTAURANTS_CARDS: FountainsCard[] = [
  {
    id: "aerial-tower-ride",
    href: "/aertowoverview",
    // DESCRIPTION (italic under ICON) — exact from A page, keep &
    title: "Aerial Tower Ride & Waffle Restaurant",
    // TEXT (to the right of ICON) — exact from A page
    body: "An outdoor snack bar sells special waffles, and gondolas give rides to the top of a tower.",
    pavilionSrc: "/images/aertow/aerial-tower-ride-icon.png",
    pavilionWidth: 764,
    pavilionHeight: 329,
    pavilionAlt: "Aerial Tower…",
  },
  {
    id: "brass-rail-food-services",
    href: "/braraioverview",
    // DESCRIPTION (italic under ICON) — exact from B page
    title: "Brass Rail Food Services",
    // TEXT (to the right of ICON) — exact from B page
    body: "Twenty-five refreshment and souvenir stands operated by the Brass Rail Food Services organization are located throughout the Fairgrounds.",
    pavilionSrc: "/images/brarai/brass-rail-food-services-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Brass Rail Food Services",
  },
  {
    id: "british-lion-pub",
    href: "/brilionoverview",
    // DESCRIPTION (italic under ICON) — exact from B page
    title: "British Lion Pub",
    // TEXT (to the right of ICON) — exact from B page
    body: "In a replica of a 17th Century Tudor inn, traditional British food and drink are served.",
    pavilionSrc: "/images/brilion/british-lion-pub-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "British Lion Pub",
  },
  {
    id: "century-grill",
    href: "/cengrioverview",
    // DESCRIPTION (italic under ICON) — exact from C page
    title: "Century Grill",
    // TEXT (to the right of ICON) — exact from C page
    body: "This restaurant serves hamburgers prepared with savory sauces, along with side dishes from every nation represented at the Fair.",
    pavilionSrc: "/images/cengri/century-grill-icon.png",
    pavilionWidth: 764,
    pavilionHeight: 330,
    pavilionAlt: "Century Grill",
  },
  {
    id: "chun-king-inn",
    href: "/chukininnoverview",
    // DESCRIPTION (italic under ICON) — exact from C page
    title: "Chun King Inn",
    // TEXT (to the right of ICON) — exact from C page
    body: "A pagoda-style restaurant with a lake-dotted garden offers comfortable, inexpensive dining.",
    pavilionSrc: "/images/chukininn/chun-king-inn-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Chun King Inn",
  },
  {
    id: "lowengar",
    href: "/lowengaroverview",
    // DESCRIPTION (italic under ICON) — exact from L page
    title: "Lowenbrau Gardens",
    // TEXT (to the right of ICON) — exact from L page
    body: "Bavarian food and beer are served in a replica of an open-air cafe in a village square.",
    pavilionSrc: "/images/lowengar/lowengar-icon.png",
    pavilionWidth: 761,
    pavilionHeight: 330,
    pavilionAlt: "Lowenbrau Gardens",
  },
  {
    id: "maspiz",
    href: "/maspizoverview",
    // DESCRIPTION (italic under ICON) — exact from M page
    title: "Mastro Pizza",
    // TEXT (to the right of ICON) — exact from M page
    body: "At this counter restaurant, pizza, beer and soda are sold.",
    pavilionSrc: "/images/maspiz/maspiz-icon.png",
    pavilionWidth: 761,
    pavilionHeight: 330,
    pavilionAlt: "Mastro Pizza",
  },
  {
    id: "rheingold",
    href: "/rheingoverview",
    // DESCRIPTION (italic under ICON) — exact from R page
    title: "Rheingold",
    // TEXT (to the right of ICON) — exact from R page
    body: "Gas lamps cast a glow on a cobblestone street where a tavern, a restaurant and an outdoor cafe' recreate the New York of 1904.",
    pavilionSrc: "/images/rheing/rheing-icon.png",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Rheingold",
  },
];
